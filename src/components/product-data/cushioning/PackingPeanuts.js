import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const packingPeanuts = [
  {
    productNumber: "PEANUT",
    description: "S-Shaped PELASPAN PAC",
    color: "White",
    size: "14 Cu. Ft."
  },
  {
    productNumber: "PEANUT-BIO",
    description: "Biodegradable S- Shaped PELASPAN PAC",
    color: "Beige",
    size: "14 Cu. Ft."
  },
  {
    productNumber: "PEANUT-PINK",
    description: "Anti-Static S-Shaped PELASPAN PAC",
    color: "Pink",
    size: "14 Cu. Ft."
  }
];

const PackingPeanuts = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Color</th>
          <th>Size</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {packingPeanuts.map(cushion => (
          <tr key={cushion.productNumber}>
            <td>{cushion.productNumber}</td>
            <td>{cushion.description}</td>
            <td>{cushion.color}</td>
            <td>{cushion.size}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default PackingPeanuts;
