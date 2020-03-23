import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const corrugatedPads = [
	{
		dimensions: "7 1/16 x 5 1/16",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 12000
	},
	{
		dimensions: "8 x 8″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 6250
	},
	{
		dimensions: "8 x 8″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 6250
	},
	{
		dimensions: "8 1/2 x 11″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 6000
	},
	{
		dimensions: "8 1/2 x 11″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 6000
	},
	{
		dimensions: "8 1/2 x 14 7/8″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "9 x 6″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 7500
	},
	{
		dimensions: "9 x 9″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 6250
	},
	{
		dimensions: "10 x 8″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 5000
	},
	{
		dimensions: "10 x 10″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 5000
	},
	{
		dimensions: "10 x 10″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 5000
	},
	{
		dimensions: "12 x 9″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 5000
	},
	{
		dimensions: "12 x 10″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 4000
	},
	{
		dimensions: "12 x 10″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 4000
	},
	{
		dimensions: "12 x 12″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 4000
	},
	{
		dimensions: "12 x 12″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 4000
	},
	{
		dimensions: "12 1/2 x 12 1/2″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "14 x 11″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "14 x 12″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "14 x 14″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 2250
	},
	{
		dimensions: "14 x 14″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 2250
	},
	{
		dimensions: "14 7/8 x 11″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "16 x 12″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "16 x 12″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 3000
	},
	{
		dimensions: "16 x 16″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 2250
	},
	{
		dimensions: "16 x 16″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 2250
	},
	{
		dimensions: "17 x 11″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 2000
	},
	{
		dimensions: "17 x 11″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 2000
	},
	{
		dimensions: "18 x 18″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "18 x 18″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "18 x 72″",
		style: "RP",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		dimensions: "20 x 14″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "20 x 14″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "20 x 16″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "20 x 16″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 1500
	},
	{
		dimensions: "22 x 28″",
		style: "RP",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		dimensions: "22 x 28″",
		style: "TP",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		dimensions: "24 x 18″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 1000
	},
	{
		dimensions: "24 x 18″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 1000
	},
	{
		dimensions: "24 x 20″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 1000
	},
	{
		dimensions: "24 x 20″",
		style: "TP",
		numberPerBundle: 50,
		numberPerPallet: 1000
	},
	{
		dimensions: "24 x 36″",
		style: "RP",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		dimensions: "24 x 36″",
		style: "TP",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		dimensions: "24 x 48″",
		style: "RP",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		dimensions: "24 x 48″",
		style: "TP",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		dimensions: "24 x 72″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 540
	},
	{
		dimensions: "30 x 24″",
		style: "RP",
		numberPerBundle: 50,
		numberPerPallet: 500
	},
	{
		dimensions: "30 x 72″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "32 x 48″",
		style: "RP",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		dimensions: "32 x 48″",
		style: "TP",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		dimensions: "36 x 48″",
		style: "RP",
		numberPerBundle: 20,
		numberPerPallet: 260
	},
	{
		dimensions: "36 x 48″",
		style: "TP",
		numberPerBundle: 20,
		numberPerPallet: 260
	},
	{
		dimensions: "36 x 72″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "36 x 72″",
		style: "TP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "40 x 48″",
		style: "RP",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		dimensions: "40 x 48″",
		style: "TP 275# D/W",
		numberPerBundle: 10,
		numberPerPallet: 160
	},
	{
		dimensions: "48 x 48″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "48 x 72″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "48 x 72″",
		style: "TP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "48 x 96″",
		style: "RP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "48 x 96″",
		style: "TP",
		numberPerBundle: 10,
		numberPerPallet: 270
	},
	{
		dimensions: "48 x 96″",
		style: "TP 275# D/W",
		numberPerBundle: 5,
		numberPerPallet: 160
	},
	{
		dimensions: "48 x 96″",
		style: "RP 51 ECT D/W",
		numberPerBundle: 5,
		numberPerPallet: 160
	}
];

const CorrugatedPads = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Dimension</th>
					<th>Style</th>
					<th># Per Bundle</th>
					<th># Per Pallet</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{corrugatedPads.map((box,i) => (
					<tr key={i}>
						<td>{box.dimensions}</td>
						<td>{box.style}</td>
						<td>{box.numberPerBundle}</td>
						<td>{box.numberPerPallet}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default CorrugatedPads;
