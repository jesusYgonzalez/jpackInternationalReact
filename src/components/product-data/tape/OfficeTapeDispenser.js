import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const stationaryTape = [
  {
    productNumber: "TP-OFFICE-1/2",
    size: "1/2″ x 72 Yds.",
    core: "3″",
    rollsPerCase: 144
  },
  {
    productNumber: "TP-OFFICE-3/4",
    size: "3/4″ x 72 Yds.",
    core: "3″",
    rollsPerCase: 96
  },
  {
    productNumber: "TP-OFFICE-1",
    size: "1″ x 72 Yds.",
    core: "3″",
    rollsPerCase: 72
  }
];
const stationaryTapeDispenser = [
  {
    productNumber: "DIS-SL7316",
    description:
      "Place Up to 2 Different Tapes (Together Within the Width Limit)",
    width: "1″"
  },
  {
    productNumber: "DIS-SL7326",
    description:
      "Place Up to 3 Different Tapes (Together Within the Width Limit)",
    width: "2″"
  },
  {
    productNumber: "DIS-SL7336",
    description:
      "Place Up to 3 Different Tapes (Together Within the Width Limit)",
    width: "3″"
  }
];

const OfficeTapeDispenser = () => {
  return (
    <MDBTable striped>
      {/*STATIONARY TAPE*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Core</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {stationaryTape.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.size}</td>
            <td>{tape.core}</td>
            <td>{tape.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*STATIONARY TAPE DISPENSER*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Width</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {stationaryTapeDispenser.map(tape => (
          <tr key={tape.productNumber}>
            <td>{tape.productNumber}</td>
            <td>{tape.description}</td>
            <td>{tape.width}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default OfficeTapeDispenser;
