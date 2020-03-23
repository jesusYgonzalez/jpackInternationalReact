import React from "react";

import Aux from "../Aux/Aux";

const Layout = props => (
	<Aux>
		<main>{props.children}</main>
	</Aux>
);

export default Layout;
