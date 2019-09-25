import React, {useEffect} from "react"
import { withRouter } from "react-router-dom";

import Main from '../../Component/Main';
import SideBySide from '../../Component/SideBySide';
import CoverImage from '../../Component/CoverImage';
import Button from '../../Component/Button';
import Text from '../../Component/Text';
import ClickableOpacity from '../../Component/ClickableOpacity';

import image1 from '../../assets/img/image1.png'

import "./style.css"
import Logo from "../../Component/Logo";
import { withStore } from "../../store";

const LeftContent = ({...props }) => (<CoverImage image={image1} />);

const RightContent = withStore(withRouter(({ history, store, ...props }) => {
	useEffect(() => {
		if (store.user) {
			history.push("home");
		}
	}, [store.user, history]);
	return (<div className="RightContent">
		<div className="LoginLabel">
			<ClickableOpacity onClick={() => history.push("login")}>
				<Text>Login</Text>
			</ClickableOpacity>
		</div>
		<div className="SignUpContainer">
			<div className="SignUp">
				<Logo height={40} color="#F9314E" />
				<div className="MainText">
					<Text size={32}>
						A New way<br /> to <b>management</b><br /> you <b>hackathon</b><br /> audience <b>together</b><br /> with <b>sponsors</b>
					</Text>
				</div>
				<Button title="Sign up" onClick={()=>history.push("signup")} />
			</div>
		</div>
	</div>)
}));

export default ({...props}) => (<div className="Initial">
	<Main>
		<SideBySide leftContent={<LeftContent />} rightContent={<RightContent />} />
	</Main>
</div>);