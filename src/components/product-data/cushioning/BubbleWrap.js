import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const bubbleWrap = [
		{
			productNumberReg: "BUB-2504C",
			antiStatic: "BUB-2504P",
			bubbleSize: "1/2″",
			rollSize: "12″ x 250′",
			rollPerBundle: 4
		},
		{
			productNumberReg: "BUB-2502C",
			antiStatic: "BUB-2502P",
			bubbleSize: "1/2″",
			rollSize: "24″ x 250′",
			rollPerBundle: 2
		},
		{
			productNumberReg: "BUB-2501C",
			antiStatic: "BUB-2501P",
			bubbleSize: "1/2″",
			rollSize: "48″ x 250′",
			rollPerBundle: 1
		},
		{
			productNumberReg: "BUB-3754C",
			antiStatic: "BUB-3754P",
			bubbleSize: "5/16″",
			rollSize: "12″ x 375′",
			rollPerBundle: 4
		},
		{
			productNumberReg: "BUB-3752C",
			antiStatic: "BUB-3752P",
			bubbleSize: "5/16″",
			rollSize: "24″ x 375′",
			rollPerBundle: 2
		},
		{
			productNumberReg: "BUB-3751C",
			antiStatic: "BUB-3751P",
			bubbleSize: "5/16″",
			rollSize: "48″ x 375′",
			rollPerBundle: 1
		},
		{
			productNumberReg: "BUB-3164C",
			antiStatic: "BUB-3164P",
			bubbleSize: "3/16″",
			rollSize: "12″ x 750′",
			rollPerBundle: 4
		},
		{
			productNumberReg: "BUB-3162C",
			antiStatic: "BUB-3162P",
			bubbleSize: "3/16″",
			rollSize: "24″ x 750′",
			rollPerBundle: 2
		},
		{
			productNumberReg: "BUB-3161C",
			antiStatic: "BUB-3161P",
			bubbleSize: "3/16″",
			rollSize: "48″ x 750′",
			rollPerBundle: 1
		},
		{
			productNumberReg: "BUB-7504C",
			antiStatic: "BUB-7504P",
			bubbleSize: "1/8″",
			rollSize: "12″ x 750′",
			rollPerBundle: 4
		},
		{
			productNumberReg: "BUB-7502C",
			antiStatic: "BUB-7502P",
			bubbleSize: "1/8″",
			rollSize: "24″ x 750′",
			rollPerBundle: 2
		},
		{
			productNumberReg: "BUB-7501C",
			antiStatic: "BUB-7501P",
			bubbleSize: "1/8″",
			rollSize: "48″ x 750′",
			rollPerBundle: 1
		}
	];

const BubbleWrap = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Product Number Anti Static</th>
					<th>Bubble Size</th>
					<th>Roll Size</th>
					<th>Roll Per Bundle</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{bubbleWrap.map(box => (
					<tr key={box.productNumberReg}>
						<td>{box.productNumberReg}</td>
						<td>{box.antiStatic}</td>
						<td>{box.bubbleSize}</td>
						<td>{box.rollSize}</td>
						<td>{box.rollPerBundle}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default BubbleWrap;
