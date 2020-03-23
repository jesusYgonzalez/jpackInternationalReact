import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const opaqueStretchWrap = [
  {
    productNumber: "WP-MS1880B",
    color: "black",
    width: '18" x 80 Gauge',
    rollsPerCase: "4",
    casePerPallet: "48"
  }
];

const OpaqueStretchWrap = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Color</th>
          <th>Width</th>
          <th>Rolls/Case</th>
          <th>Case/Pallet</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {opaqueStretchWrap.map(wrap => (
          <tr key={wrap.productNumber}>
            <td>{wrap.productNumber}</td>
            <td>{wrap.color}</td>
            <td>{wrap.width}</td>
            <td>{wrap.rollsPerCase}</td>
            <td>{wrap.casePerPallet}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default OpaqueStretchWrap;
