import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const tissueWrappingPaper = [
		{
			productNumber: "MA-1214-TISSUE",
			size: "12 X 14″",
			numberPerCase: "9600"
		},
		{
			productNumber: "MA-1520-TISSUE",
			size: "15 X 20″",
			numberPerCase: "9600"
		},
		{
			productNumber: "MA-2030-TISSUE",
			size: "20 X 30″",
			numberPerCase: "4800"
		},
		{
			productNumber: "MA-2436-TISSUE",
			size: "24 X 36″",
			numberPerCase: "5000"
		}
	];

const TissueWrappingPaper = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th># Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{tissueWrappingPaper.map(cushion => (
					<tr key={cushion.productNumber}>
						<td>{cushion.productNumber}</td>
						<td>{cushion.size}</td>
						<td>{cushion.numberPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default TissueWrappingPaper;
