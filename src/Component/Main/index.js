import React from "react"
import "./style.css";

export default ({children, ...props}) => (<main className="Main">
	<div className="Content">
		{children}
	</div>
</main>);