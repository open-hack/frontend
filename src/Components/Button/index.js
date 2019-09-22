import React from "react"
import "./style.css"

export default ({onClick=()=>{}, title, ...props}) => (<div className="Button" onClick={(ev)=>onClick()}>{title}</div>)