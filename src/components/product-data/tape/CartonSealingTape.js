import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const cartonSealingTape = [
  {
    productNumber: "TP-MT218C",
    size: "2″ x 110 Yds.",
    durability: "1.8 Mil.",
    color: "Clear",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-MT218T",
    size: "2″ x 110 Yds.",
    durability: "1.8 Mil.",
    color: "Tan",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-MT220C",
    size: "2″ x 110 Yds.",
    durability: "2 Mil.",
    color: "Clear",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-MT220T",
    size: "2″ x 110 Yds.",
    durability: "2 Mil.",
    color: "Tan",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-MT2020C",
    size: "2″ x 1000 Yds. (Machine)",
    durability: "2 Mil.",
    color: "Clear",
    rollsPerCase: 4
  },
  {
    productNumber: "TP-MT318C",
    size: "3″ x 110 Yds.",
    durability: "1.8 Mil.",
    color: "Clear",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-MT318T",
    size: "3″ x 110 Yds.",
    durability: "1.8 Mil.",
    color: "Tan",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-MT320C",
    size: "3″ x 110 Yds.",
    durability: "2 Mil.",
    color: "Clear",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-MT320T",
    size: "3″ x 110 Yds.",
    durability: "2 Mil.",
    color: "Tan",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-MT3020C",
    size: "3″ x 1000 Yds. (Machine)",
    durability: "2 Mil.",
    color: "Clear",
    rollsPerCase: 4
  }
];

const CartonSealingTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Durability</th>
          <th>Color</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {cartonSealingTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.size}</td>
            <td>{tape.durability}</td>
            <td>{tape.color}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default CartonSealingTape;
