import React from 'react'
import "./style.css"

export default ({leftContent, rightContent, ...props}) => (<div className="SideBySide">
	<div className="left">{leftContent}</div>
	<div className="right">{rightContent}</div>
</div>);