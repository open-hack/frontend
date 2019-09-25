import React, {useState} from "react"
import { withRouter } from "react-router-dom";

import "./style.css"

import Main from "../../Component/Main"
import Text from "../../Component/Text"
import { withHeader } from ".."

import img1 from "../../assets/img/home/img1.png";
import img2 from "../../assets/img/home/img2.png";
import img3 from "../../assets/img/home/img3.png";
import img4 from "../../assets/img/home/img4.png";
import { withStore } from "../../store"
import Loading from "../../Component/Loading";
import Axios from "axios";

const Card = ({ title, image, enabled = true, onClick, ...props }) => (<div onClick={onClick} style={{ display: "flex", backgroundColor: "#3C273B", flexBasis: "20%", flexDirection: "column", height: 250, boxShadow: (enabled ? "0px 16px 32px rgba(60, 39, 59, 0.4)" : "none") , cursor: ( enabled ? "pointer" : "not-allowed") }}>
	<div style={{ flexBasis: "65%", flexGrow: 2, flexShrink: 0, background: `url(${image})`, backgroundSize: "cover"}}></div>
	<div style={{display: "flex", alignItems:"center", justifyContent:"center", flexBasis: "auto", flexGrow: 1, flexShrink: 0}}>
		<Text size={14} align="center" color="white"><b>{title}</b></Text>
	</div>
</div>);

const HomeContent = ({ store, setStore, history, ...props }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);
	return (<Main>
		<div className="Home">
			<Loading visible={isLoading} />
			<div style={{display: "flex", flexDirection: "column", flexBasis:"90%"}}>
				<Text align="center" size={40}>Welcome, <strong style={{ color:"#F9314E"}}>{store.user.name}!</strong></Text>
				<br />
				<br />
				<br />
				<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
					<Card image={img1} title="Open Hack" onClick={()=>{
						setIsLoading(true);
						Axios.get("https://open-hack-shawee.herokuapp.com/api/hackathon/all")
							.then(d => d.data)
							.then(data => {
								const users = Object.values(data.flatMap(h => h.users || []).reduce((p,v) => {p[v.id] = v; return p} , {}));
								setStore({...store, hackathon: users});
								history.push("chat");
							})
							.catch(err => setErrorMessage("Error to get hackathon data, please try again."))
							.then(_ => setIsLoading(false));

					}} />
					<Card image={img2} enabled={false} title="Hackathon Globo" />
					<Card image={img3} enabled={false} title="Uber Hack | RJ" />
					<Card image={img4} enabled={false} title="Hacking.Rio" />
				</div>
			</div>
		</div>
	</Main>)
};

export default withStore(withRouter(withHeader(HomeContent)));