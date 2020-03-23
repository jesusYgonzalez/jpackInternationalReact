import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const coloredTape = [
  {
    productNumber: "TP-TC2110B",
    color: "Blue",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110BK",
    color: "Black",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110G",
    color: "Green",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110O",
    color: "Orange",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110W",
    color: "White",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110Y",
    color: "Yellow",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-TC2110R",
    color: "Red",
    durability: "2 Mil.",
    size: "2″ x 110 Yds.",
    rollsPerCase: 36
  }
];

const ColoredTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Color</th>
          <th>Durability</th>
          <th>Size</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {coloredTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.color}</td>
            <td>{tape.durability}</td>
            <td>{tape.size}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ColoredTape;
