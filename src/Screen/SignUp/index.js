import React, {useState, useEffect} from "react"
import { withRouter } from "react-router-dom";

import Main from '../../Component/Main';
import SideBySide from '../../Component/SideBySide';
import CoverImage from '../../Component/CoverImage';
import Button from '../../Component/Button';
import Text from '../../Component/Text';
import InputText from '../../Component/InputText';
import ClickableOpacity from '../../Component/ClickableOpacity';

import image2 from '../../assets/img/image2.png'

import "./style.css"
import Logo from "../../Component/Logo";
import { withStore } from "../../store";
import Axios from "axios";
import Loading from "../../Component/Loading";
import Modal from "../../Component/Modal";

const LeftContent = ({ ...props }) => (<CoverImage image={image2}>
	<Logo height={40} color="#FFFFFF" />
</CoverImage>);

const RightContent = withStore(withRouter(({ history, store, setIsLoading, setErrorMessage, setStore, ...props }) => {
	const [name, setName] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	useEffect(() => {
		if (store.user) {
			history.push("home");
		}
	}, [store.user, history]);

	return (<div className="RightContent">
		<div className="LoginLabel">
			<ClickableOpacity onClick={() => { history.push("login") }}>
				<Text>Login</Text>
			</ClickableOpacity>
		</div>
		<div className="SignUpContainer">
			<div className="SignUpForm">
				<div className="MainText">
					<Text size={32}>
						<strong>Sign Up</strong><br /> It’s quick and easy
					</Text>
				</div>
				<InputText onChangeText={(t)=>setName(t)} label="Name:" />
				<InputText onChangeText={(t)=>setEmail(t)} label="Email:" />
				<InputText label="Work:" />
				<InputText label="Role:" />
				<InputText label="Category:" />
				<InputText label="portfolio:" />
				<Button onClick={()=>{
					setIsLoading(true);
					Axios.post("https://open-hack-shawee.herokuapp.com/api/user",{name,email,username:email})
						.then(d => d.data)
						.then(data => {
							return Axios.post("https://open-hack-shawee.herokuapp.com/api/login/" + email)
						})
						.then(d => {
							setStore({ ...store, user: d.data });
							history.push("home");
						})
						.catch(err => setErrorMessage("Error to create your account, please try again."))
						.then(_ => setIsLoading(false));

				}} title="Sign up" />
			</div>
		</div>
	</div>);
}));

export default ({...props}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);
	return (<div className="SignUp">
		<Loading visible={isLoading} />
		<Modal visible={!isLoading && errorMessage !== undefined}>
			<Text size={40} color="#F9314E"><strong>Error :(</strong></Text>
			<div className="scrollable">
				<Text size={24}>{errorMessage}</Text>
			</div>
			<div className="close">
				<Button onClick={() => setErrorMessage(undefined)} title="Close" />
			</div>
		</Modal>
		<Main>
			<SideBySide leftContent={<LeftContent />} rightContent={<RightContent setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} />} />
		</Main>
	</div>);
}