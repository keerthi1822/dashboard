import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./loginForm";
import DashBoard from "./dashBoard";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LoginForm} />
				<Route path='/dashboard' component={DashBoard} />
			</Switch>
		</BrowserRouter>
	);
};
export default MainRouter;
