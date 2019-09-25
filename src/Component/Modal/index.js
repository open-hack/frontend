import React from "react"
import "./style.css";

export default ({ children, visible = true, contentBackgroundColor="white", ...props }) => (<div className={"modal" + (visible ? "" : " invisible")}>
	<div className="modal-content" style={{backgroundColor: contentBackgroundColor}}>
		{children}
	</div>
</div>);
