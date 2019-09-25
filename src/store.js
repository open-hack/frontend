import React, { createContext, useState } from 'react';


const { Consumer, Provider } = createContext({});
export const withStore = (Component) => ({ ...props }) => (<Consumer>{(value) => <Component {...props} {...value} />}</Consumer>);


export default Provider;