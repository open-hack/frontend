import React from "react"
import "./style.css"

export default ({ size = 14, color = "#3C273B", align = "left", children,...props}) => (<p className="Text" style={{fontSize: size, color: color, textAlign: align}}>{children}</p>)