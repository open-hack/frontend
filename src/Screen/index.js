import React from 'react';

import Header from '../Component/Header';
import Logo from '../Component/Logo';

export const withHeader = (Component) => ({...props}) => (<div style={{height:"100%", display: "flex", flexDirection: "column"}} className="withHeader">
	<Header leftComponent={<Logo height={26} color="white" />} />
	<Component {...props} />
</div>);