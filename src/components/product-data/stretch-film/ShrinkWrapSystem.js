import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const shrinkWrapSystem = [
  {
    productNumber: "SEAL-AE2013",
    size: "13″",
    voltage: "250 Watts",
    description: "Bar Sealer, Timer, Heat Gun, Parts Kit"
  },
  {
    productNumber: "SEAL-AE2018",
    size: "18″",
    voltage: "350 Watts",
    description: "Bar Sealer, Timer, Heat Gun, Parts Kit"
  },
  {
    productNumber: "SEAL-AE2024",
    size: "24″",
    voltage: "450 Watts",
    description: "Bar Sealer, Timer, Heat Gun, Parts Kit"
  },
  {
    productNumber: "SEAL-AE2032",
    size: "32″",
    voltage: "500 Watts",
    description: "Bar Sealer, Timer, Heat Gun, Parts Kit"
  },
  {
    productNumber: "SEAL-AE2040",
    size: "40″",
    voltage: "700 Watts",
    description: "Bar Sealer, Timer, Heat Gun, Parts Kit"
  },
  {
    productNumber: "SEAL-AE1313L",
    size: "13″ x 13″",
    voltage: "600 Watts",
    description: "L Bar Sealer, Built in Timer, Heat Gun"
  },
  {
    productNumber: "SEAL-AE1818L",
    size: "18″ x 18″",
    voltage: "1000 Watts",
    description: "L Bar Sealer, Built in Timer, Heat Gun"
  },
  {
    productNumber: "SEAL-AE2432L",
    size: "24″ x 32″",
    voltage: "1000 Watts",
    description: "L Bar Sealer, Built in Timer, Heat Gun"
  }
];

const ShrinkWrapSystem = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Size</th>
          <th>Voltage</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {shrinkWrapSystem.map(sys => (
          <tr key={sys.productNumber}>
            <td>{sys.productNumber}</td>
            <td>{sys.size}</td>
            <td>{sys.voltage}</td>
            <td>{sys.description}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ShrinkWrapSystem;
