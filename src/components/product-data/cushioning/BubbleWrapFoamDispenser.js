import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const bubbleWrapFoamDis = [
		{
			productNumber: "DIS-BUBBLE12",
			armWidth: "12\"",
			description: "Wall Mount & Two Arms"
		},
		{
			productNumber: "DIS-BUBBLE24",
			armWidth: "24\"",
			description: "Wall Mount & Two Arms"
		}
	];

const BubbleWrapFoamDis = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Arm Width</th>
					<th>Description</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{bubbleWrapFoamDis.map(box => (
					<tr key={box.productNumber}>
						<td>{box.productNumber}</td>
						<td>{box.armWidth}</td>
						<td>{box.description}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default BubbleWrapFoamDis;
