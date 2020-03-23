import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const corrugatedBulk = [
		{
			description: "“EH” F.O.L. Bottom & R.S.C. Top",
			outsideDim: "35 3/8 x 21 x 21″",
			insideDim: "34 3/4 x 20 3/8 x 19 3/8″",
			test: "200# D/W",
			numberPerBundle: 1,
			numberPerPallet: 80
		},
		{
			description: "“EH” R.S.C.",
			outsideDim: "35 3/8 x 21 x 21″",
			insideDim: "34 7/8 x 20 1/4 x 19 7/8″",
			test: "350# D/W",
			numberPerBundle: 1,
			numberPerPallet: 80
		},
		{
			description: "“QD” R.S.C.",
			outsideDim: "39 1/2 x 27 1/2 x 21″",
			insideDim: "38 13/16 x 26 3/4 x 19 3/4″",
			test: "350# D/W",
			numberPerBundle: 1,
			numberPerPallet: 80
		},
		{
			description: "“E” R.S.C",
			outsideDim: "42 x 29 x 25 1/2″",
			insideDim: "41 5/16 x 28 3/16 x 24 1/8″",
			test: "200# D/W",
			numberPerBundle: 1,
			numberPerPallet: 80
		},
		{
			description: "“E” F.O.L.",
			outsideDim: "42 x 29 x 25 1/2″",
			insideDim: "41 5/16 x 28 3/16 x 23 7/8″",
			test: "200# D/W",
			numberPerBundle: 1,
			numberPerPallet: 80
		},
		{
			description: "“E” R.S.C.",
			outsideDim: "42 x 29 x 25 1/2″",
			insideDim: "41 5/16 x 28 3/16 x 24 1/8″",
			test: "425# D/W",
			numberPerBundle: 1,
			numberPerPallet: 50
		},
		{
			description: "“E” R.S.C.",
			outsideDim: "42 x 29 x 25 1/2″",
			insideDim: "41 1/4 x 28 1/2 x 24 1/8″",
			test: "Tri-Wall",
			numberPerBundle: 1,
			numberPerPallet: 50
		},
		{
			description: "“Truck Pack” A.T.A.",
			outsideDim: "48 x 40 x 37 1/2″",
			insideDim: "46 x 37 3/4 x 36 3/4″",
			test: "425# D/W",
			numberPerBundle: 1,
			numberPerPallet: 10
		},
		{
			description: "“Truck Pack” A.T.A. with Wooden Pallet",
			outsideDim: "48 x 40 x 42 1/2″",
			insideDim: "46 x 37 3/4 x 36 3/4″",
			test: "425# D/W",
			numberPerBundle: 1,
			numberPerPallet: 10
		},
		{
			description: "“D” A.T.A.",
			outsideDim: "58 x 41 x 40″",
			insideDim: "55 3/8 x 38 1/2 x 39 1/4″",
			test: "425# D/W",
			numberPerBundle: 1,
			numberPerPallet: 10
		},
		{
			description: "“D” A.T.A. with Wooden Pallet",
			outsideDim: "58 x 41 x 45″",
			insideDim: "56 3/8 x 38 1/2 x 39 1/4″",
			test: "425# D/W",
			numberPerBundle: 1,
			numberPerPallet: 10
		}
	];

const CorrugatedBulk = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Description</th>
					<th>Outside Dim</th>
					<th>Inside Dim</th>
					<th>test</th>
					<th># Per Bundle</th>
					<th># Per Pallet</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{corrugatedBulk.map((box,index) => (
					<tr key={index}>
						<td>{box.description}</td>
						<td>{box.outsideDim}</td>
						<td>{box.insideDim}</td>
						<td>{box.test}</td>
						<td>{box.numberPerBundle}</td>
						<td>{box.numberPerPallet}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default CorrugatedBulk;
