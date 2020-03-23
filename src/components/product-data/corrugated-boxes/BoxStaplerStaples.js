import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const boxStapler = [
	{
		productNumber: "STP-M11458",
		staplerTypeUsage: "Manual & Regular",
		staplerCrown: "1 1/4″",
		stapleLeg: "5/8″ & 3/4″",
		staplesCapacity: "120"
	},
	{
		productNumber: "STP-M13858",
		staplerTypeUsage: "Manual & Regular",
		staplerCrown: "1 3/8″",
		stapleLeg: "5/8″ & 3/4″",
		staplesCapacity: "100"
	},
	{
		productNumber: "STP-P11458",
		staplerTypeUsage: "Auto Pneumatic & Regular",
		staplerCrown: "1 1/4″",
		stapleLeg: "5/8″ & 3/4″",
		staplesCapacity: "120"
	},
	{
		productNumber: "STP-P13858",
		staplerTypeUsage: "Auto Pneumatic & Regular",
		staplerCrown: "1 3/8″",
		stapleLeg: "5/8″ & 3/4″",
		staplesCapacity: "100"
	},
	{
		productNumber: "STP-IRAIB",
		staplerTypeUsage: "Auto Pneumatic & Coil Staples",
		staplerCrown: "1 1/4″",
		stapleLeg: "5/8″ & 3/4″",
		staplesCapacity: "1000"
	}
];
const staples = [
	{
		productNumber: "STP-114-58",
		description: "Regular",
		sizeCrownLeg: "1 1/4 x 5/8″",
		numberPerCase: "20,000"
	},
	{
		productNumber: "STP-114-34",
		description: "Regular",
		sizeCrownLeg: "1 1/4 x 3/4″",
		numberPerCase: "20,000"
	},
	{
		productNumber: "STP-138-58",
		description: "Regular",
		sizeCrownLeg: "1 3/8 x 5/8″",
		numberPerCase: "20,000"
	},
	{
		productNumber: "STP-138-34",
		description: "Regular",
		sizeCrownLeg: "1 3/8 x 3/4″",
		numberPerCase: "20,000"
	},
	{
		productNumber: "STP-RR1-58",
		description: "Coil Staples",
		sizeCrownLeg: "1 1/4 x 5/8″",
		numberPerCase: "20,000"
	},
	{
		productNumber: "STP-RR1-34",
		description: "Coil Staples",
		sizeCrownLeg: "1 1/4 x 3/4″",
		numberPerCase: "20,000"
	}
];
const stapleRemover = [
	{
		productNumber: "STP-230BULK",
		description: "Removes All Carton Staples"
	}
];

const BoxStaplerStaples = () => {
	return (
		<MDBTable striped>

			{/*BOX STAPLER*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Stapler Type</th>
					<th>Stapler Crown</th>
					<th>Staple Leg</th>
					<th>Staple Capacity</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{boxStapler.map(staple => (
					<tr key={staple.productNumber}>
						<td>{staple.productNumber}</td>
						<td>{staple.staplerTypeUsage}</td>
						<td>{staple.staplerCrown}</td>
						<td>{staple.stapleLeg}</td>
						<td>{staple.staplesCapacity}</td>
					</tr>
				))}
			</MDBTableBody>

			{/*STAPLES*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Description</th>
					<th>Size Crown Leg</th>
					<th>Number Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{staples.map(staple => (
					<tr key={staple.productNumber}>
						<td>{staple.productNumber}</td>
						<td>{staple.description}</td>
						<td>{staple.sizeCrownLeg}</td>
						<td>{staple.numberPerCase}</td>
					</tr>
				))}
			</MDBTableBody>

			{/*STAPLE REMOVER*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Description</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{stapleRemover.map(box => (
					<tr key={box.productNumber}>
						<td>{box.productNumber}</td>
						<td>{box.description}</td>
					</tr>
				))}
			</MDBTableBody>

		</MDBTable>
	);
};

export default BoxStaplerStaples;
