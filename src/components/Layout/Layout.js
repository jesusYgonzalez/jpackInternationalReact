import React from "react";

import Aux from "../../hoc/Aux";

const Layout = props => (
	<Aux>
		<div>navbar, sidebar, main menu</div>
		<main>{props.children}</main>
	</Aux>
);

export default Layout;

