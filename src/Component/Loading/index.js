import React from "react"
import Modal from "../Modal";

import "./style.css"

export default ({ visible, ...props }) => (<Modal visible={visible} contentBackgroundColor="transparent">
	<div class="lds-ripple"><div></div><div></div></div>
</Modal>);