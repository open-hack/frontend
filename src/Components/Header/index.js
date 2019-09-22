import React from "react";
import "./style.css"; 

export default ({leftComponent, rightComponent, ...props}) => (
	<header className="Header">
		<div className="left">{leftComponent}</div>
		<div className="right">{rightComponent}</div>
	</header>
);