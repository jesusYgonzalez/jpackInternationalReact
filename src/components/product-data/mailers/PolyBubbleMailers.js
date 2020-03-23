import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polyBubbleMailers = [
  {
    productNumber: "BUB-PB0407",
    description: "#000",
    size: "4 x 7″",
    numberPerCase: 500
  },
  {
    productNumber: "BUB-PB0509",
    description: "#00",
    size: "5 x 9″",
    numberPerCase: 250
  },
  {
    productNumber: "BUB-PB0609",
    description: "#0",
    size: "6 x 9″",
    numberPerCase: 250
  },
  {
    productNumber: "BUB-PB07F11",
    description: "#1",
    size: "7 1/4 x 11″",
    numberPerCase: 100
  },
  {
    productNumber: "BUB-PB08F11",
    description: "#2",
    size: "8 1/2 x 11″",
    numberPerCase: 100
  },
  {
    productNumber: "BUB-PB08F13F",
    description: "#3",
    size: "8 1/2 x 13 1/2″",
    numberPerCase: 100
  },
  {
    productNumber: "BUB-PB09F13F",
    description: "#4",
    size: "9 1/2 x 13 1/2″",
    numberPerCase: 100
  },
  {
    productNumber: "BUB-PB10F15",
    description: "#5",
    size: "10 1/2 x 15″",
    numberPerCase: 100
  },
  {
    productNumber: "BUB-PB12F18",
    description: "#6",
    size: "12 1/2 x 18″",
    numberPerCase: 50
  },
  {
    productNumber: "BUB-PB14F19",
    description: "#7",
    size: "14 1/4 x 19″",
    numberPerCase: 50
  }
];

const PolyBubbleMailers = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Size</th>
          <th>Number/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {polyBubbleMailers.map(mailers => (
          <tr key={mailers.productNumber}>
            <td>{mailers.productNumber}</td>
            <td>{mailers.description}</td>
            <td>{mailers.size}</td>
            <td>{mailers.numberPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default PolyBubbleMailers;
