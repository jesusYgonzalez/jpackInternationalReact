import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const newsprintWrappingPaper = [
		{
			productNumber: "MA-NSP1520",
			size: "15 x 20\"",
			weightPerBundle: "50 lb."
		},
		{
			productNumber: "MA-NSP1824",
			size: "18 x 24\"",
			weightPerBundle: "50 lb."
		},
		{
			productNumber: "MA-NSP2436",
			size: "24 x 36\"",
			weightPerBundle: "50 lb."
		}
	];

const NewsprintWrappingPaper = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Size</th>
					<th>Weight Per Bundle</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{newsprintWrappingPaper.map(cushion => (
					<tr key={cushion.productNumber}>
						<td>{cushion.productNumber}</td>
						<td>{cushion.size}</td>
						<td>{cushion.weightPerBundle}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default NewsprintWrappingPaper;
