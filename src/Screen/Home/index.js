import React from "react"
import "./style.css"
import { withHeader } from ".."
import Main from "../../Component/Main"
import Text from "../../Component/Text"

const HomeContent = ({ ...props }) => (<Main>
	<div className="Home">
		<div style={{display: "flex", flexDirection: "column", flexBasis:"90%"}}>
			<Text align="center" size={40}>Welcome, <strong style={{ color:"#F9314E"}}>Tuxu!</strong></Text>
			<br />
			<br />
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
				<div style={{backgroundColor: "violet", flexBasis: "20%", height: 250}} />
				<div style={{backgroundColor: "violet", flexBasis: "20%", height: 250}} />
				<div style={{backgroundColor: "violet", flexBasis: "20%", height: 250}} />
				<div style={{backgroundColor: "violet", flexBasis: "20%", height: 250}} />
			</div>
		</div>
	</div>
</Main>);

export default withHeader(HomeContent);