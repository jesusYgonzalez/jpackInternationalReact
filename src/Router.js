import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/navbar/home";

const Router = () => (
	<Switch>
		<Route exact path="/home" component={Home} />
	</Switch>
);

export default Router;
