import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const tapeDispenser = [
		{
			productNumber: "DIS-SL213",
			width: "2″",
			description: "Standard Gun"
		},
		{
			productNumber: "DIS-SL209",
			width: "2″",
			description: "Deluxe Gun"
		},
		{
			productNumber: "DIS-SL239",
			width: "2″",
			description: "Heavy Duty “Work Horse”"
		},
		{
			productNumber: "DIS-SL2398",
			width: "2″",
			description: "Seal-Safe Retractable Blade"
		},
		{
			productNumber: "DIS-SL215",
			width: "2″",
			description: "Mouse Trap – Spring Loaded"
		},
		{
			productNumber: "DIS-SL303",
			width: "3″",
			description: "Standard Gun"
		},
		{
			productNumber: "DIS-SL326",
			width: "3″",
			description: "Deluxe Gun"
		},
		{
			productNumber: "DIS-SL339",
			width: "3″",
			description: "Heavy Duty “Work Horse”"
		},
		{
			productNumber: "DIS-SL3398",
			width: "3″",
			description: "Seal-Safe Retractable Blade"
		}
	];

const TapeDispenser = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Width</th>
					<th>Description</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{tapeDispenser.map(tape => (
					<tr key={tape.productNumber}>
						<td>{tape.productNumber}</td>
						<td>{tape.width}</td>
						<td>{tape.description}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default TapeDispenser;
