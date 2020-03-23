import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const machineStretchWrap = [
  {
    productNumber: "WP-MS2080",
    size: '20" x 5000',
    durability: "80 Gauge",
    rollsPerCase: "1",
    casePerPallet: "48"
  }
];

const MachineStretchWrap = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Durability</th>
          <th>Rolls/Case</th>
          <th>Case/Pallet</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {machineStretchWrap.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.size}</td>
            <td>{lbls.durability}</td>
            <td>{lbls.rollsPerCase}</td>
            <td>{lbls.casePerPallet}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default MachineStretchWrap;
