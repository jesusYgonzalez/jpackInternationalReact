import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const vinylTape = [
  {
    productNumber: "TP-TCV236B",
    size: "2″ x 36 Yds.",
    color: "Blue",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236BK",
    size: "2″ x 36 Yds.",
    color: "Black",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236G",
    size: "2″ x 36 Yds.",
    color: "Green",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236R",
    size: "2″ x 36 Yds.",
    color: "Red",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236W",
    size: "2″ x 36 Yds.",
    color: "White",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236Y",
    size: "2″ x 36 Yds.",
    color: "Yellow",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV236YB",
    size: "2″ x 36 Yds.",
    color: "Yellow/Black",
    durability: "6 Mil.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-TCV336B",
    size: "3″ x 36 Yds.",
    color: "Blue",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336BK",
    size: "3″ x 36 Yds.",
    color: "Black",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336G",
    size: "3″ x 36 Yds.",
    color: "Green",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336R",
    size: "3″ x 36 Yds.",
    color: "Red",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336W",
    size: "3″ x 36 Yds.",
    color: "White",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336Y",
    size: "3″ x 36 Yds.",
    color: "Yellow",
    durability: "6 Mil.",
    rollsPerCase: 16
  },
  {
    productNumber: "TP-TCV336YB",
    size: "3″ x 36 Yds.",
    color: "Yellow/Black",
    durability: "6 Mil.",
    rollsPerCase: 16
  }
];

const VinylTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Color</th>
          <th>Durability</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {vinylTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.size}</td>
            <td>{tape.color}</td>
            <td>{tape.durability}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default VinylTape;
