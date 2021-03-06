import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const packingListEnvelopes = [
		{
			productNumber: "QE-12BL",
			description: "4.5″ x 5.5″ Packing List Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-C",
			description: "4.5″ x 5.5″ No Print (Blank)",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-13BL",
			description: "4.5″ x 5.5″ Invoice Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM-F-6",
			description: "4.5″ x 6.0″ Packing List Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM16",
			description: "5.5″ x 10.0″ Packing List Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM16NP",
			description: "5.5″ x 10.0″ No Print (Blank)",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM16IE",
			description: "5.5″ x 10.0″ Invoice Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM19",
			description: "7.5″ X 5.5″ Packing List Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM19NP",
			description: "7.5″ X 5.5″ No Print (Blank)",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM19IE",
			description: "7.5″ X 5.5″ Invoice Enclosed",
			numberPerCase: "1000"
		},
		{
			productNumber: "QE-ADM912NP",
			description: "9.5″ x 12.0″ No Print (Blank)",
			numberPerCase: "500"
		}
	];

const PackingListEnvelopes = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Description</th>
					<th>Number/Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{packingListEnvelopes.map(lbls => (
					<tr key={lbls.productNumber}>
						<td>{lbls.productNumber}</td>
						<td>{lbls.description}</td>
						<td>{lbls.numberPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default PackingListEnvelopes;
