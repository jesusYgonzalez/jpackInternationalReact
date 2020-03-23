import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const glueGun = [
  {
    productNumber: "GLU-GUN-HC5",
    description: "40 Watts Glue Guns"
  },
  {
    productNumber: "GLU-GUN",
    description: "80 Watts Glue Guns"
  },
  {
    productNumber: "GLU-PRO",
    description: "250 Watts Glue Guns"
  }
];
const glueStick = [
  {
    productNumber: "GLU-1210C",
    description: "1/2″ x 10″ Clear",
    weight: "25LBS"
  },
  {
    productNumber: "GLU-1210T",
    description: "1/2″ x 10″ Tan",
    weight: "25LBS"
  }
];

const GlueGun = () => {
  return (
    <MDBTable striped>
      {/*GLUE GUN*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {glueGun.map(glue => (
          <tr key={glue.productNumber}>
            <td>{glue.productNumber}</td>
            <td>{glue.description}</td>
          </tr>
        ))}
      </MDBTableBody>

      {/*GLUE STICK*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Weight</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {glueStick.map(glue => (
          <tr key={glue.productNumber}>
            <td>{glue.productNumber}</td>
            <td>{glue.description}</td>
            <td>{glue.weight}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GlueGun;
