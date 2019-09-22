import React from "react"
import "./style.css"

export default ({ label, type="text", value, onChangeText, ...props }) => (<div className="InputText">
	<input type={type} onChange={(ev)=>onChangeText(ev.target.value)} required />
	<span className="highlight" />
	<span className="bar"></span>
	<label>{label}</label>
</div>)