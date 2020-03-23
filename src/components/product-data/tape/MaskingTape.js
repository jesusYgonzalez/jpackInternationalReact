import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const maskingTape = [
  {
    productNumber: "TP-TC0F60MASK-1/2",
    color: "Neutral",
    size: "1/2″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 72
  },
  {
    productNumber: "TP-TC0F60MASK",
    color: "Neutral",
    size: "3/4″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 48
  },
  {
    productNumber: "TP-TC0160MASK",
    color: "Neutral",
    size: "1″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC01F60MASK",
    color: "Neutral",
    size: "1 1/2″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TC0260MASK",
    color: "Neutral",
    size: "2″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TC0360MASK",
    color: "Neutral",
    size: "3″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TC0F60MASK-B",
    color: "Blue",
    size: "3/4″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 48
  },
  {
    productNumber: "TP-TC0160MASK-B",
    color: "Blue",
    size: "1″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC01F60MASK-B",
    color: "Blue",
    size: "1 1/2″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TC0260MASK-B",
    color: "Blue",
    size: "2″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TC0360MASK-B",
    color: "Blue",
    size: "3″ x 60 Yds.",
    durability: "5.2 Mil.",
    rollsPerCase: 16
  }
];

const MaskingTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Color</th>
          <th>Size</th>
          <th>Durability</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {maskingTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.color}</td>
            <td>{tape.size}</td>
            <td>{tape.durability}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default MaskingTape;
