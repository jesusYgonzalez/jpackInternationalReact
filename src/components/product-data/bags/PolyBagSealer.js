import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polyBagSealer = [
		{
			productNumber: "SEAL-TC1008",
			description: "Hand Impulse Sealer",
			sealing: "8″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1012",
			description: "Hand Impulse Sealer",
			sealing: "12″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1016",
			description: "Hand Impulse Sealer",
			sealing: "16″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1020",
			description: "Hand Impulse Sealer",
			sealing: "20″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1008C",
			description: "Hand Impulse Sealer & Cutter",
			sealing: "8″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1012C",
			description: "Hand Impulse Sealer & Cutter",
			sealing: "12″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1016C",
			description: "Hand Impulse Sealer & Cutter",
			sealing: "16″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1020C",
			description: "Hand Impulse Sealer & Cutter",
			sealing: "20″ Arm & 2mm Seal"
		},
		{
			productNumber: "SEAL-TC1024",
			description: "Long Handle Impulse Sealer",
			sealing: "24″ Arm & 5mm Seal"
		},
		{
			productNumber: "SEAL-TC1032",
			description: "Long Handle Impulse Sealer",
			sealing: "32″ Arm & 5mm Seal"
		},
		{
			productNumber: "SEAL-TC1040",
			description: "Long Handle Impulse Sealer",
			sealing: "40″ Arm & 5mm Seal"
		},
		{
			productNumber: "SEAL-TC1024C",
			description: "Long Handle Impulse Sealer & Cutter",
			sealing: "24″ Arm & 5mm Seal"
		},
		{
			productNumber: "SEAL-TC1032C",
			description: "Long Handle Impulse Sealer & Cutter",
			sealing: "36″ Arm & 5mm Seal"
		},
		{
			productNumber: "SEAL-TC1040C",
			description: "Long Handle Impulse Sealer & Cutter",
			sealing: "40″ Arm & 5mm Seal"
		}
	];

const PolyBagSealer = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Description</th>
					<th>Sealing</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{polyBagSealer.map(bags => (
					<tr key={bags.productNumber}>
						<td>{bags.productNumber}</td>
						<td>{bags.description}</td>
						<td>{bags.sealing}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default PolyBagSealer;
