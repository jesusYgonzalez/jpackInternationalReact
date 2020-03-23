import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const waterActivatedGummedTape = [
  {
    productNumber: "TP-AL2450K",
    size: "2″ x 450′",
    description: "Kraft",
    rollsPerCase: 14
  },
  {
    productNumber: "TP-AL2F450K",
    size: "2 1/2″ x 450′",
    description: "Kraft",
    rollsPerCase: 12
  },
  {
    productNumber: "TP-AL3375K",
    size: "3″ x 375′",
    description: "Kraft",
    rollsPerCase: 8
  },
  {
    productNumber: "TP-AL3375W",
    size: "3″ x 375′",
    description: "White",
    rollsPerCase: 8
  },
  {
    productNumber: "TP-AL3450K",
    size: "3″ x 450′",
    description: "Kraft",
    rollsPerCase: 10
  },
  {
    productNumber: "TP-AL3450W",
    size: "3″ x 450′",
    description: "White",
    rollsPerCase: 10
  },
  {
    productNumber: "TP-AL3450FHW",
    size: "3″ x 450′",
    description: "FRAGILE HANDLE WITH CARE (Red Ink)",
    rollsPerCase: 10
  },
  {
    productNumber: "TP-AL3450WPP",
    size: "3″ x 450′",
    description: "WARNING PILFER PROOF (Red Ink)",
    rollsPerCase: 10
  }
];

const WaterActivatedGummedTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Description</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {waterActivatedGummedTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.size}</td>
            <td>{tape.description}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default WaterActivatedGummedTape;
