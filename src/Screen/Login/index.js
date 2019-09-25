import React, {useState} from "react"
import { withRouter } from "react-router-dom";

import Main from '../../Component/Main';
import SideBySide from '../../Component/SideBySide';
import CoverImage from '../../Component/CoverImage';
import Button from '../../Component/Button';
import Text from '../../Component/Text';
import InputText from '../../Component/InputText';
import ClickableOpacity from '../../Component/ClickableOpacity';

import image3 from '../../assets/img/image3.png'

import "./style.css"
import Logo from "../../Component/Logo";
import axios from "axios";
import Modal from "../../Component/Modal";
import Loading from "../../Component/Loading";
import { withStore } from "../../store";

const LeftContent = ({ ...props }) => (<CoverImage image={image3}>
	<Logo height={40} color="#FFFFFF" />
</CoverImage>);

const RightContent = withStore(withRouter(({history, setIsLoading, setErrorMessage, store, setStore, ...props }) => {
	const [email, setEmail] = useState();

	return (<div className="RightContent">
		<div className="SignUpLabel">
			<Text>
				Not a member?
				&nbsp;
				<ClickableOpacity onClick={() => history.push("signup")}>
					<b>Sign up now</b>
				</ClickableOpacity>
			</Text>
		</div>
		<div className="LoginContainer">
			<div className="LoginForm">
				<div className="MainText">
					<Text size={32}>
						<strong>Hello!</strong><br /> <span style={{ fontSize: 22 }}>Just one account for all hackathons</span>
					</Text>
				</div>
				<InputText label="Email:" onChangeText={(t) => setEmail(t)} />
				<InputText label="Pass:" type="password" />
				<Button title="Login" onClick={()=>{
					setIsLoading(true);
					axios.post("https://open-hack-shawee.herokuapp.com/api/login/"+email)
						.then(d => {
							setStore({...store, user: d.data});
							history.push("home");
						})
						.catch(err => setErrorMessage("User and/or password wrong! Please Try again."))
						.then(_ => setIsLoading(false));
				}} />
			</div>
		</div>
	</div>);
}));

export default ({...props}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);
	return (<div className="Login">
		<Loading visible={isLoading} />
		<Modal visible={!isLoading && errorMessage!==undefined}>
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