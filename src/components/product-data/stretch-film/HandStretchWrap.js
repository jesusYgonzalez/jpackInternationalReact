import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const handStretchWrap = [
		{
			productNumber: "WP-MS0380",
			color: "Clear",
			width: "3″ x 80 Gauge",
			rollsPerCase: 18,
			casePerPallet: "–"
		},
		{
			productNumber: "WP-MS0580",
			color: "Clear",
			width: "5″ x 80 Gauge",
			rollsPerCase: 12,
			casePerPallet: "–"
		},
		{
			productNumber: "WP-MS1580C",
			color: "Clear",
			width: "15″ x 80 Gauge",
			rollsPerCase: 4,
			casePerPallet: "48"
		},
		{
			productNumber: "WP-MS1616C",
			color: "Clear",
			width: "16″ x 16 Micron",
			rollsPerCase: 4,
			casePerPallet: "48"
		},
		{
			productNumber: "WP-MS1870C",
			color: "Clear",
			width: "18″ x 70 Gauge",
			rollsPerCase: 4,
			casePerPallet: "48"
		},
		{
			productNumber: "WP-MS1880C",
			color: "Clear",
			width: "18″ x 80 Gauge",
			rollsPerCase: 4,
			casePerPallet: "48"
		},
		{
			productNumber: "WP-MS2080-1",
			color: "Clear",
			width: "20″ x 80 Gauge",
			rollsPerCase: 4,
			casePerPallet: "40"
		}
	];

const HandStretchWrap = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Color</th>
					<th>Width</th>
					<th>Rolls/Case</th>
					<th>Case/Pallet</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{handStretchWrap.map(wrap => (
					<tr key={wrap.productNumber}>
						<td>{wrap.productNumber}</td>
						<td>{wrap.color}</td>
						<td>{wrap.width}</td>
						<td>{wrap.rollsPerCase}</td>
						<td>{wrap.casePerPallet}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default HandStretchWrap;
