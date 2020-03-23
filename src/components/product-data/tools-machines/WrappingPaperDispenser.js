import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const wrappingPaperDispenser = [
  {
    productNumber: "DIS-WRAP-18",
    armWidth: "18″",
    description: "Horizontal Wrapping Paper Dispenser & Cutter"
  },
  {
    productNumber: "DIS-WRAP-24",
    armWidth: "24″",
    description: "Horizontal Wrapping Paper Dispenser & Cutter"
  },
  {
    productNumber: "DIS-WRAP-36",
    armWidth: "36″",
    description: "Horizontal Wrapping Paper Dispenser & Cutter"
  }
];

const WrappingPaperDispenser = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Arm Width</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {wrappingPaperDispenser.map(paper => (
          <tr key={paper.productNumber}>
            <td>{paper.productNumber}</td>
            <td>{paper.armWidth}</td>
            <td>{paper.description}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default WrappingPaperDispenser;
