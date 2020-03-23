import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const easyFoldBox = [
		{
			insideDim: "5 5/8 x 5 x 7/16 – 1 3/4″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 3150
		},
		{
			insideDim: "5 11/16 x 5 3/8 x 1/2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 5600
		},
		{
			insideDim: "5 11/16 x 5 3/8 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 3150
		},
		{
			insideDim: "6 1/2 x 6 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "7 1/2 x 5 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 3150
		},
		{
			insideDim: "8 1/2 x 6 x 1/2 – 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "8 1/2 x 6 x 1 – 1/2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "8 1/2 x 6 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "8 1/2 X 8 1/16 x 1/2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "8 1/2 x 8 1/16 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "8 1/2 x 8 1/16 x 1″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "9 1/8 x 9 1/8 x 1 1/2 – 4″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "9 1/2 x 6 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "9 1/2 x 6 1/2 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 3150
		},
		{
			insideDim: "10 x 7 x 2″",
			style: "Self-Locking Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "10 1/4 x 8 1/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "10 1/4 x 10 1/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 1/4 x 8 3/4 x 1/2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "11 1/4 x 8 3/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 1/4 x 8 3/4 x 1″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 2100
		},
		{
			insideDim: "11 1/4 x 8 3/4 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 1/2 x 9 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 1/2 x 10 1/2 x 2 1/4″",
			style: "Self-Locking Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 1/2 x 11 x 3″",
			style: "Self-Locking Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "11 3/4 x 10 1/2 x 1 3/4″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "12 x 10 1/2 X 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "12 x 11 1/2 x 1/2 – 3″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1050
		},
		{
			insideDim: "12 x 11 1/2 x 3″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1050
		},
		{
			insideDim: "12 1/4 x 9 1/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 1/4 – 1″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1050
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 1″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 1050
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 3″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "12 1/2 x 12 1/2 x 4″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "14 x 14 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "15 x 9 1/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "15 x 11 1/2 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "15 x 15 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "15 x 15 x 2″",
			style: "Self-Locking Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "16 x 12 1/4 x 1/2 – 2″",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "16 x 16 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "17 x 17 x 2″",
			style: "Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		},
		{
			insideDim: "17 3/4 x 11 1/2 x 1/2 – 2",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 1400
		},
		{
			insideDim: "17 3/4 x 14 1/2 x 1/2 – 2",
			style: "Vari-Depth Folder",
			numberPerBundle: 50,
			numberPerPallet: 700
		}
	];

const EasyFoldBox = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Inside Dim</th>
					<th>Style</th>
					<th># Per Bundle</th>
					<th># Per Pallet</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{easyFoldBox.map((box,i) => (
					<tr key={i}>
						<td>{box.insideDim}</td>
						<td>{box.style}</td>
						<td>{box.numberPerBundle}</td>
						<td>{box.numberPerPallet}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default EasyFoldBox;
