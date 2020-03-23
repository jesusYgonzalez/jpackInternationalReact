import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const laserLabels = [
		{
			productNumber: "LB-LS08F11",
			size: "8 1/2 x 11″",
			type: "BUTTCUTT",
			labelsPerSheet: 1,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS08F05F",
			size: "8 1/2 x 5 1/2″",
			type: "BUTTCUTT",
			labelsPerSheet: 2,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0803F",
			size: "8 x 3 1/2″",
			type: "DIE CUT",
			labelsPerSheet: 3,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS04F05F",
			size: "4 1/4 x 5 1/2″",
			type: "BUTTCUTT",
			labelsPerSheet: 4,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0405",
			size: "4 x 5″",
			type: "DIE CUT",
			labelsPerSheet: 4,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0403F",
			size: "4 x 3 1/3″",
			type: "DIE CUT",
			labelsPerSheet: 6,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS04F02F",
			size: "4 1/4 x 2 3/4″",
			type: "BUTTCUTT",
			labelsPerSheet: 8,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS04F02",
			size: "4 1/4 x 2″",
			type: "DIE CUT",
			labelsPerSheet: 10,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0402",
			size: "4 x 2″",
			type: "DIE CUT",
			labelsPerSheet: 10,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0401F",
			size: "4 x 1 1/2″",
			type: "DIE CUT",
			labelsPerSheet: 14,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS0401",
			size: "4 x 1″",
			type: "DIE CUT",
			labelsPerSheet: 20,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS02F01F",
			size: "2 5/6 x 1 3/8″",
			type: "BUTTCUTT",
			labelsPerSheet: 24,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS02F01",
			size: "2 5/8 x 1″",
			type: "DIE CUT",
			labelsPerSheet: 30,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS02F01B",
			size: "2 5/6 x 1″",
			type: "BUTTCUTT",
			labelsPerSheet: 33,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS01F00F",
			size: "1 3/4 x 1/2″",
			type: "DIE CUT",
			labelsPerSheet: 80,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS04F01F",
			size: "4 1/2″ Outer Circle – 1 5/8″ Inner Circle",
			type: "CIRCLE CUTOUT",
			labelsPerSheet: 2,
			sheetsPerPack: 250,
			packPerCase: 4
		},
		{
			productNumber: "LB-LS02F",
			size: "2 1/2″",
			type: "CIRCLES DIE CUT",
			labelsPerSheet: 12,
			sheetsPerPack: 250,
			packPerCase: 4
		}
	];

const LaserLabels = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Type</th>
					<th>Label/Sheet</th>
					<th>Sheet/Pack</th>
					<th>Pack/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{laserLabels.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.type}</td>
						<td>{lbls.labelsPerSheet}</td>
						<td>{lbls.sheetsPerPack}</td>
						<td>{lbls.packPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default LaserLabels;
