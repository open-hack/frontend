import React, { useState, useEffect } from "react";
import "./style.css";
import { withHeader } from "..";
import Text from "../../Component/Text";
import Button from "../../Component/Button";

import sendIcon from "../../assets/img/send.png";
import Modal from "../../Component/Modal";
import { withStore } from "../../store";

const MessageItem = ({side="left", user, message, ...props}) => {
	const { id: userId, name: userName, skill: userSkill } = user;
	const UserData = () => (<div class={`user-data ${side}`}>
		<img src={`https://api.adorable.io/avatars/42/${userId}.png`} alt={`userimg-${userId}`} />
		<div>
			<Text color="white" size={12}><span title={userName}>{userName.length > 10 ? `${userName.substr(0,10)}...` : userName}</span></Text>
			<Text color="white" size={10}><b>{userSkill}</b></Text>
		</div>
	</div>);
	return (<div className={`message-item ${side}`}>
		{side==="left" ? <div className="user-left"><UserData /></div> : null}
		<div className="message"><Text size={12}>{message}</Text></div>
		{side==="right" ? <div className="user-right"><UserData /></div> : null}
	</div>);
}

const UserListItem = ({id, name, skill, ...props}) => (<div className="user-list-item">
	<img src={`https://api.adorable.io/avatars/52/${id}.png`} alt={`userimg-${id}`} />
	<div>
		<Text color="white" size={20}><span title={name}>{name.length > 10 ? `${name.substr(0,10)}...` : name}</span></Text>
		<Text color="white" size={12}><b>{skill}</b></Text>
	</div>
</div>);

const Chat = ({ store, ...props }) => {
	const [onBoardingModalVisible, setOnboardingModalVisible] = useState(false);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const socket = new WebSocket('ws://127.0.0.1:8080/');
		socket.onopen = (ev) => {console.log("connected!"); };
		socket.onmessage = ({data}) => setMessages(prev => [...prev, JSON.parse(data)]);
		socket.onclose = (ev) => console.log("closed!");
		socket.onerror = (ev) => console.log("error!");
		return () => {
			console.log("junda!");
			socket.close();
		};
	}, [])

	useEffect(() => {
		const startOpenOnboard = setTimeout(() => {
			setOnboardingModalVisible(true);
		}, 100);

		return () => {
			clearTimeout(startOpenOnboard);
		};
	}, [])

	useEffect(() => {
		console.log(messages);
	}, [messages]);

	return (<div className="Chat">
		<Modal visible={onBoardingModalVisible}>
			<Text size={40} color="#F9314E"><strong>Onboarding</strong></Text>
			<div className="scrollable">
				<Text size={24}>Lorem ipsizzle dolor brizzle amet, consectetizzle gizzle brizzle. Nullizzle sapizzle velit, ghetto volutpat, suscipizzle quis, its frizzle doggy, sure. <br /><br />Brizzle pizzle dolor dapibus turpizzle tempizzle bizzle. Maurizzle pellentesque nibh fo shizzle my nizzle turpizzle</Text>
			</div>
			<div className="start">
				<Button onClick={() => setOnboardingModalVisible(false)} title="Start" />
			</div>
		</Modal>
		<div className="users">
			{store.hackathon.map(user => <UserListItem id={user.email} name={user.name} skill="Developer" />)}
			{/* <UserListItem id="junda@gmail.com" name="Sr Junda" skill="Developer"/>
			<UserListItem id="fulano@gmail.com" name="Fulaninho ..." skill="Businessman"/>
			<UserListItem id="amigo@gmail.com" name="Sr Junda" skill="Designer"/>
			<UserListItem id="xubirubis@gmail.com" name="Xubirubis Nome grande" skill="Designer"/> */}
		</div>
		<div className="conversation">
			<div className="messages">
				{messages.map(message => <MessageItem user={{ id: "junda@gmail.com", name: "Sr Junda", skill: "Developer" }} message="My goal is to make a player think, “I want to reenter this world of lies tomorrow”..."/>)}
				<MessageItem user={{ id: "junda@gmail.com", name: "Sr Junda", skill: "Developer" }} message="My goal is to make a player think, “I want to reenter this world of lies tomorrow”..."/>
				<MessageItem side="right" user={{ id: "amigo@gmail.com", name: "Sr Junda", skill: "Designer" }} message="My goal is to make a player think, “I want to reenter this world of lies tomorrow”..."/>
				<MessageItem user={{ id: "xubirubis@gmail.com", name: "Xubirubis", skill: "Designer" }} message="Lorem ipsizzle dolor brizzle amet, consectetizzle gizzle brizzle. Nullizzle sapizzle velit, ghetto volutpat, suscipizzle quis, its fo rizzle doggy, sure. Pellentesque away ghetto. erizzle. Brizzle pizzle dolor dapibus turpizzle tempizzle bizzle. Maurizzle pellentesque nibh fo shizzle my nizzle turpizzle. Rizzle in tortor. Yo phat rhoncizzle nisi. In bling bling get down get down platea dictumst. Hizzle dapibizzle. Curabitizzle tellizzle urna, fo shizzle check out this, mattizzle ac, owned vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer semper velizzle go to hizzle bling bling."/>
				<MessageItem side="right" user={{ id: "amigo@gmail.com", name: "Sr Junda", skill: "Designer" }} message="My goal is to make a player think, “I want to reenter this world of lies tomorrow”..."/>
				<MessageItem user={{ id: "xubirubis@gmail.com", name: "Xubirubis", skill: "Designer" }} message="Lorem ipsizzle dolor brizzle amet, consectetizzle gizzle brizzle. Nullizzle sapizzle velit, ghetto volutpat, suscipizzle quis, its fo rizzle doggy, sure. Pellentesque away ghetto. erizzle. Brizzle pizzle dolor dapibus turpizzle tempizzle bizzle. Maurizzle pellentesque nibh fo shizzle my nizzle turpizzle. Rizzle in tortor. Yo phat rhoncizzle nisi. In bling bling get down get down platea dictumst. Hizzle dapibizzle. Curabitizzle tellizzle urna, fo shizzle check out this, mattizzle ac, owned vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer semper velizzle go to hizzle bling bling."/>
			</div>
			<div className="type-message">
				<input placeholder="Type a message..." />
				<div className="send-message"><img src={sendIcon} alt="send-icon" /></div>
			</div>
		</div>
	</div>)
};

export default withStore(withHeader(Chat));