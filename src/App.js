import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import antiStaticBags from "./product-data/bags/antiStaticBags";
console.log(antiStaticBags);

const App = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Durability</th>
					<th>Size</th>
					<th>Weight</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{antiStaticBags.map(bags => (
					<tr>
						<td>{bags.productNumber}</td>
						<td>{bags.durability}</td>
						<td>{bags.sizeWxL}</td>
						<td>{bags.weight}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default App;
