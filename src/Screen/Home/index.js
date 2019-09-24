import React from "react"
import "./style.css"

import Main from "../../Component/Main"
import Text from "../../Component/Text"
import { withHeader } from ".."

import img1 from "../../assets/img/home/img1.png";
import img2 from "../../assets/img/home/img2.png";
import img3 from "../../assets/img/home/img3.png";
import img4 from "../../assets/img/home/img4.png";

const Card = ({ title, image, enabled = true, onClick, ...props }) => (<div style={{ display: "flex", backgroundColor: "#3C273B", flexBasis: "20%", flexDirection: "column", height: 250, boxShadow: (enabled ? "0px 16px 32px rgba(60, 39, 59, 0.4)" : "none") , cursor: ( enabled ? "pointer" : "not-allowed") }}>
	<div style={{ flexBasis: "65%", flexGrow: 2, flexShrink: 0, background: `url(${image})`, backgroundSize: "cover"}}></div>
	<div style={{display: "flex", alignItems:"center", justifyContent:"center", flexBasis: "auto", flexGrow: 1, flexShrink: 0}}>
		<Text size={14} align="center" color="white"><b>{title}</b></Text>
	</div>
</div>);

const HomeContent = ({ ...props }) => (<Main>
	<div className="Home">
		<div style={{display: "flex", flexDirection: "column", flexBasis:"90%"}}>
			<Text align="center" size={40}>Welcome, <strong style={{ color:"#F9314E"}}>Tuxu!</strong></Text>
			<br />
			<br />
			<br />
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
				<Card image={img1} title="Open Hack" />
				<Card image={img2} enabled={false} title="Hackathon Globo" />
				<Card image={img3} enabled={false} title="Uber Hack | RJ" />
				<Card image={img4} enabled={false} title="Hacking.Rio" />
			</div>
		</div>
	</div>
</Main>);

export default withHeader(HomeContent);