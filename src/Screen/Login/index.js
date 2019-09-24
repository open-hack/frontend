import React from "react"
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

const LeftContent = ({ ...props }) => (<CoverImage image={image3}>
	<Logo height={40} color="#FFFFFF" />
</CoverImage>);

const RightContent = withRouter(({history, ...props }) => (<div className="RightContent">
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
			<InputText label="Email:" />
			<InputText label="Pass:" />
			<Button title="Login" />
		</div>
	</div>
	{/* <Text><b>Hello</b> guys!</Text> */}
	{/* <InputText label="Email" onChangeText={console.log} />
	<InputText label="Senha" type="password" onChangeText={console.log} /> */}
</div>));

export default ({...props}) => (<div className="Login">
	<Main>
		<SideBySide leftContent={<LeftContent />} rightContent={<RightContent />} />
	</Main>
</div>);