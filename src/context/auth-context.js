import React from "react";

const context = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
});

export default context;
