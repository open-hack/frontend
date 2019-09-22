import React from "react"
import "./style.css"

export default ({ image, children, ...props }) => (<div className="CoverImage" style={{ backgroundImage:`url(${image})`}}>
	{children}
</div>);