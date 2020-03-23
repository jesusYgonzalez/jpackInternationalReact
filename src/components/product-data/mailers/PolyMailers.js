import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polyMailers = [
		{
			productNumber: "BUB-FPM0609",
			description: "#1",
			insideSize: "6 x 9″",
			numberPerCase: 1000
		},
		{
			productNumber: "BUB-FPM07F10F",
			description: "#2",
			insideSize: "7 1/2 x 10 1/2″",
			numberPerCase: 1000
		},
		{
			productNumber: "BUB-FPM0912",
			description: "#3",
			insideSize: "9 x 12″",
			numberPerCase: 1000
		},
		{
			productNumber: "BUB-FPM1013",
			description: "#4",
			insideSize: "10 x 13″",
			numberPerCase: 1000
		},
		{
			productNumber: "BUB-FPM1215F",
			description: "#5",
			insideSize: "12 x 15 1/2″",
			numberPerCase: 500
		},
		{
			productNumber: "BUB-FPM14F19",
			description: "#6",
			insideSize: "14 1/2 x 19″",
			numberPerCase: 500
		},
		{
			productNumber: "BUB-FPM1924",
			description: "#7",
			insideSize: "19 x 24″",
			numberPerCase: 300
		},
		{
			productNumber: "BUB-FPM2424",
			description: "#8",
			insideSize: "24 x 24″",
			numberPerCase: 300
		}
	];

const PolyMailers = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Description</th>
					<th>Inside Size</th>
					<th>Number/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{polyMailers.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.description}</td>
						<td>{lbls.insideSize}</td>
						<td>{lbls.numberPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default PolyMailers;
