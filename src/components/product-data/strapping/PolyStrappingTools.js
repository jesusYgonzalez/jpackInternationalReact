import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const strappingCart = [
  {
    productNumber: "DIS-DS100",
    description: "For Poly Strapping",
    core: "8 x 8″; 16″ X 6″; 16″ X 3″"
  },
  {
    productNumber: "DIS-SD15",
    description: "For Steel Strapping",
    core: "16″ X 6″; 16″ X 3″"
  }
];
const tensioner = [
  {
    productNumber: "DIS-TC110",
    description: "For 1/2″, 5/8″, & 3/4″ Poly Strapping"
  },
  {
    productNumber: "DIS-TCS290",
    description: "For 1/2″, 5/8″, & 3/4″” Steel Strapping"
  }
];
const sealers = [
  {
    productNumber: "DIS-TCP302",
    description: "1/2″, 5/8″, & 3/4″ Polypropylene Sealer"
  },
  {
    productNumber: "DIS-TCS802",
    description: "1/2″, 5/8″, & 3/4″ Steel Sealer"
  }
];
const metalSeals = [
  {
    productNumber: "OM-PC12LD",
    description: "1/2″ Metal Seals",
    numberPerCarton: 1000
  },
  {
    productNumber: "OM-58LD",
    description: "5/8″ Metal Seals",
    numberPerCarton: 1000
  },
  {
    productNumber: "OM-OMS34",
    description: "3/4″ Metal Seals",
    numberPerCarton: 1000
  }
];
const steelBuckles = [
  {
    productNumber: "BUCKLES-12",
    description: "1/2″ Steel Buckles",
    numberPerCarton: 1000
  },
  {
    productNumber: "BUCKLES-58",
    description: "5/8″ Steel Buckles",
    numberPerCarton: 1000
  }
];

const PolyStrappingTools = () => {
  return (
    <MDBTable striped>

      {/*STRAPPING CART*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Core</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {strappingCart.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
            <td>{lbls.core}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*TENSIONER*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tensioner.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*SEALERS*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {sealers.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*METAL SEALS*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Number/Carton</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {metalSeals.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
            <td>{lbls.numberPerCarton}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*STEEL BUCKLES*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Number/Carton</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {steelBuckles.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
            <td>{lbls.numberPerCarton}</td>
          </tr>
        ))}
      </MDBTableBody>

    </MDBTable>
  );
};

export default PolyStrappingTools;
