import React from "react"
import "./style.css"

export default ({onClick, children, ...props}) => (<span onClick={onClick} className="ClickableOpacity">{children}</span>);