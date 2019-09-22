import React from "react"
import "./style.css"

export default ({onClick, children, ...props}) => (<div onClick={onClick} className="ClickableOpacity">{children}</div>);