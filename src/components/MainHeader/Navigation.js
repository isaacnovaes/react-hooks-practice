import React, { useContext } from "react";

import authContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
	const context = useContext(authContext);

	return (
		<nav className={classes.nav}>
			<ul>
				{context.isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<button onClick={context.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
export default Navigation;
