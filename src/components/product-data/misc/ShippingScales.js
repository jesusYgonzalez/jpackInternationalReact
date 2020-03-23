import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const shippingScale = [
  {
    productNumber: "SCALE-W4820",
    capacity: "68KG/150LB.",
    sensitivity: "0.05KG/0.1 LB.",
    platformSize: "11.8″ x 11.25″"
  },
  {
    productNumber: "SCALE-W4830",
    capacity: "150KG/330LB.",
    sensitivity: "0.05KG/0.1 LB.",
    platformSize: "11.8″ x 11.25″"
  },
  {
    productNumber: "SCALE-WUB840",
    capacity: "200KG/440LB.",
    sensitivity: "0.05KG/0.1 LB.",
    platformSize: "11.8″ x 11.25″"
  },
  {
    productNumber: "SCALE-SL5000",
    capacity: "5000 LB.",
    sensitivity: "2 LB.",
    platformSize: "PALLET"
  },
  {
    productNumber: "SCALE-SL10000",
    capacity: "10000 LB.",
    sensitivity: "2 LB.",
    platformSize: "PALLET"
  }
];

const ShippingScales = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Capacity</th>
          <th>Sensitivity</th>
          <th>Platform Size</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {shippingScale.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.capacity}</td>
            <td>{lbls.sensitivity}</td>
            <td>{lbls.platformSize}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ShippingScales;
