import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const filamentTape = [
  {
    productNumber: "TP-FMF60",
    durability: "4 Mil. 100 Lbs. Tensile Strength",
    size: "1/2″ x 60 Yds.",
    rollsPerCase: 72
  },
  {
    productNumber: "TP-FMF60-34",
    durability: "4 Mil. 100 Lbs. Tensile Strength",
    size: "3/4″ x 60 Yds.",
    rollsPerCase: 48
  },
  {
    productNumber: "TP-FM0160",
    durability: "4 Mil. 100 Lbs. Tensile Strength",
    size: "1″ x 60 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-FM01F60",
    durability: "4 Mil. 100 Lbs. Tensile Strength",
    size: "1 1/2″ x 60 Yds.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-FM0260",
    durability: "4 Mil. 100 Lbs. Tensile Strength",
    size: "2″ x 60 Yds.",
    rollsPerCase: 24
  },
  {
    productNumber: "TP-FMF60HD",
    durability: "4.4 Mil. 156 Lbs. Tensile Strength",
    size: "1/2″ x 60 Yds.",
    rollsPerCase: 72
  },
  {
    productNumber: "TP-FMF60HD-34",
    durability: "4.4 Mil. 156 Lbs. Tensile Strength",
    size: "3/4″ x 60 Yds.",
    rollsPerCase: 48
  },
  {
    productNumber: "TP-FM0160HD",
    durability: "4.4 Mil. 156 Lbs. Tensile Strength",
    size: "1″ x 60 Yds.",
    rollsPerCase: 36
  },
  {
    productNumber: "TP-FM0260HD",
    durability: "4.4 Mil. 156 Lbs. Tensile Strength",
    size: "2″ x 60 Yds.",
    rollsPerCase: 24
  }
];

const FilamentTape = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Durability</th>
          <th>Size</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filamentTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.durability}</td>
            <td>{tape.size}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default FilamentTape;
