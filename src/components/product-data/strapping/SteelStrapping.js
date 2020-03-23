import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const steelStrapping = [
  {
    productNumber: "ST-12020R",
    width: "1/2″",
    thickness: 0.02,
    breakStrength: "1,200 Lb.",
    approxLbsPerCoil: "100 Lb."
  },
  {
    productNumber: "ST-58020R",
    width: "5/8″",
    thickness: 0.02,
    breakStrength: "1,380 Lb.",
    approxLbsPerCoil: "100 Lb."
  },
  {
    productNumber: "ST-58023R",
    width: "5/8″",
    thickness: 0.023,
    breakStrength: "1725 Lb.",
    approxLbsPerCoil: "100 Lb."
  },
  {
    productNumber: "ST-34020R",
    width: "3/4″",
    thickness: 0.02,
    breakStrength: "1,800 Lb.",
    approxLbsPerCoil: "100 Lb."
  },
  {
    productNumber: "ST-34023R",
    width: "3/4″",
    thickness: 0.023,
    breakStrength: "2,070 Lb.",
    approxLbsPerCoil: "100 Lb."
  }
];

const SteelStrapping = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Durability</th>
          <th>Size</th>
          <th>Weight</th>
          <th>Bags Per Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {steelStrapping.map(steel => (
          <tr key={steel.productNumber}>
            <td>{steel.productNumber}</td>
            <td>{steel.width}</td>
            <td>{steel.thickness}</td>
            <td>{steel.breakStrength}</td>
            <td>{steel.approxLbsPerCoil}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default SteelStrapping;
