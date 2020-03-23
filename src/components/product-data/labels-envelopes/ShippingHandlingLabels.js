import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const shippingHandlingLabels = [
  {
    productNumber: "AL-SAL204",
    size: "2″ X 2″",
    description: "ANTI-STATIC CAUTION",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR",
    size: "3″ X 5″",
    description: "FRAGILE THIS SIDE UP ARROW",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR-261",
    size: "2″ X 3″",
    description: "FRAGILE HANDLE WITH CARE",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR-401",
    size: "3″ X 5″",
    description: "FRAGILE HANDLE WITH CARE",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR-402",
    size: "3″ X 5″",
    description: "GLASS HANDLE WITH CARE",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR-SKID",
    size: "3″ X 5″",
    description: "DO NOT BREAK DOWN SKID",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-WAR-STACK",
    size: "3″ X 5″",
    description: "DO NOT STACK",
    labelsPerRoll: 500
  },
  {
    productNumber: "LB-AMS-813",
    size: "4″ X 6″",
    description: "FRAGILE W/ INSTRUCTION",
    labelsPerRoll: 500
  }
];

const ShippingHandlingLabels = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Description</th>
          <th>Labels/Roll</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {shippingHandlingLabels.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.size}</td>
            <td>{lbls.description}</td>
            <td>{lbls.labelsPerRoll}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ShippingHandlingLabels;
