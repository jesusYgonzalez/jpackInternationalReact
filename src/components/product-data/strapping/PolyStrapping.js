import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polyStrapping = [
		{
			productNumber: "SP-PCF3090",
			width: "1/2″",
			thickness: 0.017,
			breakStrength: "350 Lb.",
			length: "9,000′",
			coreDiameterHeight: "8″ x 8″",
			color: "Black"
		},
		{
			productNumber: "SP-MP1270W",
			width: "1/2″",
			thickness: 0.027,
			breakStrength: "600 Lb.",
			length: "7,200′",
			coreDiameterHeight: "8″ x 8″",
			color: "White"
		},
		{
			productNumber: "SP-MP1270Y",
			width: "1/2″",
			thickness: 0.027,
			breakStrength: "600 Lb.",
			length: "7,200′",
			coreDiameterHeight: "8″ x 8″",
			color: "Yellow"
		},
		{
			productNumber: "SP-MP1570Y",
			width: "5/8″",
			thickness: 0.027,
			breakStrength: "600 Lb.",
			length: "6,000′",
			coreDiameterHeight: "16″ x 6″",
			color: "Yellow"
		}
	];

const PolyStrapping = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Width</th>
					<th>Thickness</th>
					<th>Break Strength</th>
					<th>Length</th>
					<th>Core Diameter Height</th>
					<th>Color</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{polyStrapping.map(strap => (
					<tr key={strap.productNumber}>
						<td>{strap.productNumber}</td>
						<td>{strap.width}</td>
						<td>{strap.thickness}</td>
						<td>{strap.breakStrength}</td>
						<td>{strap.length}</td>
						<td>{strap.coreDiameterHeight}</td>
						<td>{strap.color}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default PolyStrapping;
