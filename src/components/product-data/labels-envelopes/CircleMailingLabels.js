import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const circleMailingLabels = [
		{
			productNumber: "LB-CIR-C075",
			circleDiameter: "3/4″",
			labelsPerRoll: 5000
		},
		{
			productNumber: "LB-CIR-C100",
			circleDiameter: "1″",
			labelsPerRoll: 5000
		},
		{
			productNumber: "LB-CIR-C150",
			circleDiameter: "1 1/2″",
			labelsPerRoll: 1000
		},
		{
			productNumber: "LB-CIR-C200",
			circleDiameter: "2″",
			labelsPerRoll: 1000
		},
		{
			productNumber: "LB-CIR-C250",
			circleDiameter: "2 1/2″",
			labelsPerRoll: 1000
		},
		{
			productNumber: "LB-CIR-C300",
			circleDiameter: "3″",
			labelsPerRoll: 1000
		},
		{
			productNumber: "LB-CIR-C400",
			circleDiameter: "4″",
			labelsPerRoll: 500
		}];

const CircleMailingLabels = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Circle Diameter</th>
					<th>Labels Per Roll</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{circleMailingLabels.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.circleDiameter}</td>
						<td>{lbls.labelsPerRoll}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default CircleMailingLabels;
