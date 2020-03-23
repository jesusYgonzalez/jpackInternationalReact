import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polypropyleneBags = [
	{
		productNumber: "BG-PP020301F",
		durability: "1.75 Mil",
		sizeWxL: "2 x 3″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP03F03F01F",
		durability: "1.75 Mil",
		sizeWxL: "3.75 x 3.75″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP03F05F01F",
		durability: "1.75 Mil",
		sizeWxL: "3.75 x 5.5″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP040801F",
		durability: "1.75 Mil",
		sizeWxL: "4 x 8″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP041101F",
		durability: "1.75 Mil",
		sizeWxL: "4 x 11″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP041201F",
		durability: "1.75 Mil",
		sizeWxL: "4 x 12″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP050701F",
		durability: "1.75 Mil",
		sizeWxL: "5 x 7″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP05F1001F",
		durability: "1.75 Mil",
		sizeWxL: "5.25 x 10″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP05F07F01F",
		durability: "1.75 Mil",
		sizeWxL: "5.5 x 7.75″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP052101F",
		durability: "1.75 Mil",
		sizeWxL: "5 x 21″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP060801F",
		durability: "1.75 Mil",
		sizeWxL: "6 x 8″ (Sealable)",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP071001F",
		durability: "1.75 Mil",
		sizeWxL: "7 x 10″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP081201F",
		durability: "1.75 Mil",
		sizeWxL: "8 x 12″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP0912F01F",
		durability: "1.75 Mil",
		sizeWxL: "9 x 12.5″",
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-PP121601F",
		durability: "1.75 Mil",
		sizeWxL: "12 x 16″",
		bagPerCase: "1000"
	}
];

const PolyPropyleneBags = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Durability</th>
					<th>Size</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{polypropyleneBags.map(bags => (
					<tr key={bags.productNumber}>
						<td>{bags.productNumber}</td>
						<td>{bags.durability}</td>
						<td>{bags.sizeWxL}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default PolyPropyleneBags;
