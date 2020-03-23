import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const thermalTransferLabels = [
	{
		productNumber: "LB-TH01F01",
		size: "1 1/2 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 8,
		labelsPerCase: "44,000"
	},
	{
		productNumber: "LB-TH0201",
		size: "2 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 8,
		labelsPerCase: "44,000"
	},
	{
		productNumber: "LB-TH0201-2",
		size: "2 x 1″ – Two Rolls",
		labelsPerRoll: "11,000",
		rollsPerCase: 4,
		labelsPerCase: "44,000"
	},
	{
		productNumber: "LB-TH0201F",
		size: "2 x 1 1/2″",
		labelsPerRoll: "3,800",
		rollsPerCase: 8,
		labelsPerCase: "30,400"
	},
	{
		productNumber: "LB-TH0201F-2",
		size: "2 x 1 1/2″ – Two Rolls",
		labelsPerRoll: "7,000",
		rollsPerCase: 4,
		labelsPerCase: "28,000"
	},
	{
		productNumber: "LB-TH0202",
		size: "2 x 2″",
		labelsPerRoll: "3,000",
		rollsPerCase: 8,
		labelsPerCase: "24,000"
	},
	{
		productNumber: "LB-TH0301",
		size: "3 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 6,
		labelsPerCase: "33,000"
	},
	{
		productNumber: "LB-TH0302",
		size: "3 x 2″",
		labelsPerRoll: "3,000",
		rollsPerCase: 6,
		labelsPerCase: "18,000"
	},
	{
		productNumber: "LB-TH0303",
		size: "3 x 3″",
		labelsPerRoll: "1,900",
		rollsPerCase: 6,
		labelsPerCase: "11,400"
	},
	{
		productNumber: "LB-TH0304",
		size: "3 x 4″",
		labelsPerRoll: "1,250",
		rollsPerCase: 8,
		labelsPerCase: "12,000"
	},
	{
		productNumber: "LB-TH0305",
		size: "3 x 5″",
		labelsPerRoll: "1,250",
		rollsPerCase: 6,
		labelsPerCase: "7,500"
	},
	{
		productNumber: "LB-TH03F01",
		size: "3 1/2 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 6,
		labelsPerCase: "33,000"
	},
	{
		productNumber: "LB-TH03F08",
		size: "3 1/2 x 8″",
		labelsPerRoll: "750",
		rollsPerCase: 6,
		labelsPerCase: "4,500"
	},
	{
		productNumber: "LB-TH0401",
		size: "4 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 4,
		labelsPerCase: "22,000"
	},
	{
		productNumber: "LB-TH0401F",
		size: "4 x 1 1/2″",
		labelsPerRoll: "3,600",
		rollsPerCase: 4,
		labelsPerCase: "14,400"
	},
	{
		productNumber: "LB-TH0402",
		size: "4 x 2″",
		labelsPerRoll: "3,000",
		rollsPerCase: 4,
		labelsPerCase: "12,000"
	},
	{
		productNumber: "LB-TH0402F",
		size: "4 x 2 1/2″",
		labelsPerRoll: "2,500",
		rollsPerCase: 4,
		labelsPerCase: "10,000"
	},
	{
		productNumber: "LB-TH0403",
		size: "4 x 3″",
		labelsPerRoll: "1,900",
		rollsPerCase: 4,
		labelsPerCase: "7,600"
	},
	{
		productNumber: "LB-TH0404",
		size: "4 x 4″",
		labelsPerRoll: "6,000",
		rollsPerCase: 4,
		labelsPerCase: "24,000"
	},
	{
		productNumber: "LB-TH0405",
		size: "4 x 5″",
		labelsPerRoll: "1,250",
		rollsPerCase: 4,
		labelsPerCase: "5,000"
	},
	{
		productNumber: "LB-TH0406",
		size: "4 x 6″",
		labelsPerRoll: "1,000",
		rollsPerCase: 4,
		labelsPerCase: "4,000"
	},
	{
		productNumber: "LB-TH0406F",
		size: "4 x 6 1/2″",
		labelsPerRoll: "900",
		rollsPerCase: 4,
		labelsPerCase: "3,600"
	},
	{
		productNumber: "LB-TH0408",
		size: "4 x 8″",
		labelsPerRoll: "750",
		rollsPerCase: 4,
		labelsPerCase: "3,000"
	},
	{
		productNumber: "LB-TH0410",
		size: "4 x 10″",
		labelsPerRoll: "600",
		rollsPerCase: 4,
		labelsPerCase: "2,400"
	},
	{
		productNumber: "LB-TH0413",
		size: "4 x 13″",
		labelsPerRoll: "475",
		rollsPerCase: 4,
		labelsPerCase: "1,900"
	},
	{
		productNumber: "LB-TH0503",
		size: "5 x 3″",
		labelsPerRoll: "1,900",
		rollsPerCase: 4,
		labelsPerCase: "7,600"
	},
	{
		productNumber: "LB-TH0504",
		size: "5 x 4″",
		labelsPerRoll: "1,500",
		rollsPerCase: 4,
		labelsPerCase: "6,000"
	},
	{
		productNumber: "LB-TH0604",
		size: "6 x 4″",
		labelsPerRoll: "1,500",
		rollsPerCase: 4,
		labelsPerCase: "6,000"
	}
];
const fanfoldedThermalLabels = [
	{
		productNumber: "LB-TH0305-F",
		size: "3 x 5″",
		labelsPerRoll: "1,250",
		stacksPerBox: 2,
		labelsPerBox: "2,500"
	},
	{
		productNumber: "LB-TH03F08-F",
		size: "3 1/2 x 8″",
		labelsPerRoll: "970",
		stacksPerBox: 3,
		labelsPerBox: "2,910"
	},
	{
		productNumber: "LB-TH0401-F",
		size: "4 x 1″",
		labelsPerRoll: "10,500",
		stacksPerBox: 2,
		labelsPerBox: "21,000"
	},
	{
		productNumber: "LB-TH0402-F",
		size: "4 x 2″",
		labelsPerRoll: "6,000",
		stacksPerBox: 2,
		labelsPerBox: "12,000"
	},
	{
		productNumber: "LB-TH0403-F",
		size: "4 x 3″",
		labelsPerRoll: "4,000",
		stacksPerBox: 2,
		labelsPerBox: "8,000"
	},
	{
		productNumber: "LB-TH0404-F",
		size: "4 x 4″",
		labelsPerRoll: "2,000",
		stacksPerBox: 3,
		labelsPerBox: "6,000"
	},
	{
		productNumber: "LB-TH0405-F",
		size: "4 x 5″",
		labelsPerRoll: "2,500",
		stacksPerBox: 2,
		labelsPerBox: "5,000"
	},
	{
		productNumber: "LB-TH0406-F",
		size: "4 x 6″",
		labelsPerRoll: "2,000",
		stacksPerBox: 2,
		labelsPerBox: "4,000"
	},
	{
		productNumber: "LB-TH0406F-F",
		size: "4 x 6 1/2″",
		labelsPerRoll: "2,000",
		stacksPerBox: 2,
		labelsPerBox: "4,000"
	},
	{
		productNumber: "LB-TH0408-F",
		size: "4 x 8″",
		labelsPerRoll: "1,250",
		stacksPerBox: 2,
		labelsPerBox: "2,500"
	}
];
const directThermalThreeInchCoreLbl = [
	{
		productNumber: "LB-DT0201",
		size: "2 x 1″",
		labelsPerRoll: "5,500",
		rollsPerCase: 8,
		labelsPerCase: "44,000"
	},
	{
		productNumber: "LB-DT0302",
		size: "3 x 2″",
		labelsPerRoll: "2,900",
		rollsPerCase: 8,
		labelsPerCase: "23,200"
	},
	{
		productNumber: "LB-DT0305",
		size: "3 x 5″",
		labelsPerRoll: "1,250",
		rollsPerCase: 4,
		labelsPerCase: "5,000"
	},
	{
		productNumber: "LB-DT0402",
		size: "4 x 2″",
		labelsPerRoll: "3,000",
		rollsPerCase: 4,
		labelsPerCase: "12,000"
	},
	{
		productNumber: "LB-DT0403",
		size: "4 x 3″",
		labelsPerRoll: "1,900",
		rollsPerCase: 4,
		labelsPerCase: "7,600"
	},
	{
		productNumber: "LB-DT0404",
		size: "4 x 4″",
		labelsPerRoll: "1,500",
		rollsPerCase: 4,
		labelsPerCase: "6,000"
	},
	{
		productNumber: "LB-DT0406",
		size: "4 x 6″",
		labelsPerRoll: "1,000",
		rollsPerCase: 4,
		labelsPerCase: "4,000"
	},
	{
		productNumber: "LB-DT0406F",
		size: "4 x 6 1/2″",
		labelsPerRoll: "900",
		rollsPerCase: 4,
		labelsPerCase: "3,600"
	},
	{
		productNumber: "LB-DT0408",
		size: "4 x 8″",
		labelsPerRoll: "750",
		rollsPerCase: 4,
		labelsPerCase: "3,000"
	}
];
const fanfoldedDirectTransferLbl = [
	{
		productNumber: "LB-DT0402-F",
		size: "4 x 2″",
		labelsPerRoll: "6,000",
		rollsPerCase: 2,
		labelsPerCase: "12,000"
	},
	{
		productNumber: "LB-DT0404-F",
		size: "4 x 4″",
		labelsPerRoll: "3,000",
		rollsPerCase: 2,
		labelsPerCase: "6,000"
	},
	{
		productNumber: "LB-DT0406-F",
		size: "4 x 6″",
		labelsPerRoll: "2,000",
		rollsPerCase: 2,
		labelsPerCase: "4,000"
	},
	{
		productNumber: "LB-DT0406F-F",
		size: "4 x 6 1/2″",
		labelsPerRoll: "2,000",
		rollsPerCase: 2,
		labelsPerCase: "4,000"
	}
];
const directThermalTransLbl = [
	{
		productNumber: "LB-TH04061C",
		size: "4 X 6",
		labelsPerRoll: "250",
		rollsPerCase: "12",
		labelsPerCase: "3, 000"
	}
];

const ThermalTransfer = () => {
	return (
		<MDBTable striped>

			{/*THERMAL TRANSFER LABELS*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Labels/Roll</th>
					<th>Rolls/Case</th>
					<th>Labels/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{thermalTransferLabels.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.labelsPerRoll}</td>
						<td>{lbls.rollsPerCase}</td>
						<td>{lbls.labelsPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
			{/*FAN FOLDED THERMAL LABELS*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Labels/Roll</th>
					<th>Stacks/Box</th>
					<th>Labels/Box</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{fanfoldedThermalLabels.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.labelsPerRoll}</td>
						<td>{lbls.stacksPerBox}</td>
						<td>{lbls.labelsPerBox}</td>
					</tr>
				))}
			</MDBTableBody>
			{/*DIRECT THERMAL THREE INCH LABELS*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Labels/Roll</th>
					<th>Rolls/Case</th>
					<th>Labels/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{directThermalThreeInchCoreLbl.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.labelsPerRoll}</td>
						<td>{lbls.rollsPerCase}</td>
						<td>{lbls.labelsPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
			{/*FAN FOLDED DIRECT TRANSFER LABELS*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Labels/Roll</th>
					<th>Rolls/Case</th>
					<th>Labels/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{fanfoldedDirectTransferLbl.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.labelsPerRoll}</td>
						<td>{lbls.rollsPerCase}</td>
						<td>{lbls.labelsPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
			{/*FAN FOLDED DIRECT TRANSFER LABELS*/}
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Labels/Roll</th>
					<th>Rolls/Case</th>
					<th>Labels/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{directThermalTransLbl.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.size}</td>
						<td>{lbls.labelsPerRoll}</td>
						<td>{lbls.rollsPerCase}</td>
						<td>{lbls.labelsPerCase}</td>
					</tr>
				))}
			</MDBTableBody>

		</MDBTable>
	);
};

export default ThermalTransfer;
