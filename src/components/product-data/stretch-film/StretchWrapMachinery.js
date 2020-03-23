import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const stretchWrapMachinery = [
  {
    productNumber: "MCH-WP1524",
    description:
      "Make an appointment to experience our machine's state-of-the-art functions"
  }
];

const StretchWrapMachinery = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {stretchWrapMachinery.map(wrap => (
          <tr key={wrap.productNumber}>
            <td>{wrap.productNumber}</td>
            <td>{wrap.description}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default StretchWrapMachinery;
