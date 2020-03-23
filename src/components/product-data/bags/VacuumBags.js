
import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const vacuumBags = [
	{
		productNumber: "BG-V060803",
		outsideDims: "6 x 8″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V061003",
		outsideDims: "6 x10″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V061203",
		outsideDims: "6 x12″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V081003",
		outsideDims: "8 x 10″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V081203",
		outsideDims: "8 x 12″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V081503",
		outsideDims: "8 x 15″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V082203",
		outsideDims: "8 x 22″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V101203",
		outsideDims: "10 x 12″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V101503",
		outsideDims: "10 x 15″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V121403",
		outsideDims: "12 x 14″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V121503",
		outsideDims: "12 x 15″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-V121803",
		outsideDims: "12 x 18″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V122003",
		outsideDims: "12 x 20″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V122203",
		outsideDims: "12 x 22″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V142003",
		outsideDims: "14 x 20″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V142403",
		outsideDims: "14 x 24″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V162003",
		outsideDims: "16 x 20″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V162403",
		outsideDims: "16 x 24″",
		strength: "3 Mil",
		bagPerCase: "500"
	},
	{
		productNumber: "BG-V162603",
		outsideDims: "16 x 26″",
		strength: "3 Mil",
		bagPerCase: "250"
	},
	{
		productNumber: "BG-V182803",
		outsideDims: "18 x 28″",
		strength: "3 Mil",
		bagPerCase: "250"
	}
];
const reclosableVacuumBags = [
	{
		productNumber: "BG-RV050803",
		outsideDims: "5 x 8″",
		insideDims: "4-1/4 x 6-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV060903",
		outsideDims: "6 x 9″",
		insideDims: "5-1/4 x 7-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV070903",
		outsideDims: "7 x 9″",
		insideDims: "6-1/4 x 7-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV071003",
		outsideDims: "7 x 10″",
		insideDims: "6-1/4 x 8-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV071203",
		outsideDims: "7 x 12″",
		insideDims: "6-1/4 x 10-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV081203",
		outsideDims: "8 x 12″",
		insideDims: "7-1/4 x 10-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV081303",
		outsideDims: "8 x 13″",
		insideDims: "7-1/4 x 11-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-RV091303",
		outsideDims: "9 x 13″",
		insideDims: "8-1/4 x 11-1/2″",
		strength: "3 Mil",
		bagPerCase: "1000"
	}
];

const VacuumBags = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Outside Dimensions</th>
					<th>Strength</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{vacuumBags.map(bags => (
					<tr key={bags.productNumber}>
						<td>{bags.productNumber}</td>
						<td>{bags.outsideDims}</td>
						<td>{bags.strength}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>

			{/* FIGURE OUT SPACING HERE */}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Outside Dimensions</th>
					<th>inside Dimensions</th>
					<th>Strength</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{reclosableVacuumBags.map(bags => (
					<tr key={bags.productNumber}>
						<td>{bags.productNumber}</td>
						<td>{bags.outsideDims}</td>
						<td>{bags.insideDims}</td>
						<td>{bags.strength}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default VacuumBags;
