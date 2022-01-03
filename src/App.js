import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import authContext from "./context/auth-context";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedLogged = localStorage.getItem("isLogged");
		storedLogged === "1" && setIsLoggedIn(true);
	}, []);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true);
		localStorage.setItem("isLogged", "1");
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLogged");
		setIsLoggedIn(false);
	};

	return (
		<authContext.Provider value={{ isLoggedIn, onLogout: logoutHandler }}>
			<MainHeader />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</authContext.Provider>
	);
}

export default App;
