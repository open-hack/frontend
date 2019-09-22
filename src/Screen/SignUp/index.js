import React from "react"

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

const LeftContent = ({ ...props }) => (<CoverImage image={image2}>
	<Logo color="#FFFFFF" />
</CoverImage>);

const RightContent = ({ ...props }) => (<div className="RightContent">
	<div className="Login">
		<ClickableOpacity onClick={() => { console.log("junda") }}>
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
			<InputText label="Name:" />
			<InputText label="Email:" />
			<InputText label="Work:" />
			<InputText label="Role:" />
			<InputText label="Category:" />
			<InputText label="portfolio:" />
			<Button title="Sign up" />
		</div>
	</div>
	{/* <Text><b>Hello</b> guys!</Text> */}
	{/* <InputText label="Email" onChangeText={console.log} />
	<InputText label="Senha" type="password" onChangeText={console.log} /> */}
</div>);

export default ({...props}) => (<div className="SignUp">
	<Main>
		<SideBySide leftContent={<LeftContent />} rightContent={<RightContent />} />
	</Main>
</div>);