import React from "react"
import "./style.css"

export default ({size=14, children,...props}) => (<p className="Text" style={{fontSize: size}}>{children}</p>)