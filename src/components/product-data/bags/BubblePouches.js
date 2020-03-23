import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const bubblePouches = [
	{
		productNumberRegular: "BUB-P0405FC",
		productNumberAntiStatic: "BUB-P0405FP",
		sizeWxL: "4 x 5 1/2″",
		bagPerCase: "1500"
	},
	{
		productNumberRegular: "BUB-P0407FC",
		productNumberAntiStatic: "BUB-P0407FP",
		sizeWxL: "4 x 7 1/2″",
		bagPerCase: "1100"
	},
	{
		productNumberRegular: "BUB-P0608FC",
		productNumberAntiStatic: "BUB-P0608FP",
		sizeWxL: "6 x 8 1/2″",
		bagPerCase: "650"
	},
	{
		productNumberRegular: "BUB-P0711FC",
		productNumberAntiStatic: "BUB-P0711FP",
		sizeWxL: "7 x 8 1/2″",
		bagPerCase: "550"
	},
	{
		productNumberRegular: "BUB-P0811FC",
		productNumberAntiStatic: "BUB-P0811FP",
		sizeWxL: "8 x 11 1/2″",
		bagPerCase: "400"
	},
	{
		productNumberRegular: "BUB-P0815FC",
		productNumberAntiStatic: "BUB-P0815FP",
		sizeWxL: "8 x 15 1/2″",
		bagPerCase: "350"
	},
	{
		productNumberRegular: "BUB-P0817FC",
		productNumberAntiStatic: "BUB-P0817FP",
		sizeWxL: "8 x 17 1/2″",
		bagPerCase: "250"
	},
	{
		productNumberRegular: "BUB-P1015FC",
		productNumberAntiStatic: "BUB-P1015FP",
		sizeWxL: "10 x 15 1/2″",
		bagPerCase: "250"
	},
	{
		productNumberRegular: "BUB-P1211FC",
		productNumberAntiStatic: "BUB-P1211FP",
		sizeWxL: "12 x 11 1/2″",
		bagPerCase: "250"
	},
	{
		productNumberRegular: "BUB-P1215FC",
		productNumberAntiStatic: "BUB-P1215FP",
		sizeWxL: "12 x 15 1/2″",
		bagPerCase: "200"
	},
	{
		productNumberRegular: "BUB-P1223FC",
		productNumberAntiStatic: "BUB-P1223FP",
		sizeWxL: "12 x 23 1/2″",
		bagPerCase: "150"
	},
	{
		productNumberRegular: "BUB-P1517FC",
		productNumberAntiStatic: "BUB-P1517FP",
		sizeWxL: "15 x 17 1/2″",
		bagPerCase: "150"
	},
	{
		productNumberRegular: "BUB-P1823FC",
		productNumberAntiStatic: "BUB-P1823FP",
		sizeWxL: "18 x 23 1/2″",
		bagPerCase: "100"
	}];

const BubblePouches = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number (Regular)</th>
					<th>Product Number (Anti Static)</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{bubblePouches.map(bags => (
					<tr key={bags.productNumberRegular}>
						<td>{bags.productNumberAntiStatic}</td>
						<td>{bags.sizeWxL}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default BubblePouches;
