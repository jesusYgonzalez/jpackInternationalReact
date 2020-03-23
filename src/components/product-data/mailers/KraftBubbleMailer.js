import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const kraftBubbleMailer = [
  {
    productNumber: "BUB-BM0408",
    description: "#000",
    insideLength: "4 1/4 X 8″",
    numberPerCase: "500"
  },
  {
    productNumber: "BUB-BM0510",
    description: "#00",
    insideLength: "5 X 10″",
    numberPerCase: "250"
  },
  {
    productNumber: "BUB-BM06F10",
    description: "#0",
    insideLength: "6 1/2 X 10″",
    numberPerCase: "250"
  },
  {
    productNumber: "BUB-BM07F12",
    description: "#1",
    insideLength: "7 1/4 X 12″",
    numberPerCase: "100"
  },
  {
    productNumber: "BUB-BM08F12",
    description: "#2",
    insideLength: "8 1/2 X 12″",
    numberPerCase: "100"
  },
  {
    productNumber: "BUB-BM08F14F",
    description: "#3",
    insideLength: "8 1/2 X 14 1/2″",
    numberPerCase: "100"
  },
  {
    productNumber: "BUB-BM09F14F",
    description: "#4",
    insideLength: "9 1/2 X 14 1/2″",
    numberPerCase: "100"
  },
  {
    productNumber: "BUB-BM10F16",
    description: "#5",
    insideLength: "10 1/2 X 16″",
    numberPerCase: "100"
  },
  {
    productNumber: "BUB-M12F18",
    description: "#6",
    insideLength: "12 1/2 X 18″",
    numberPerCase: "50"
  },
  {
    productNumber: "BUB-M14F19",
    description: "#7",
    insideLength: "14 1/2 X 19″",
    numberPerCase: "50"
  }
];

const KraftBubbleMailer = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Inside Length</th>
          <th>Number/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {kraftBubbleMailer.map(mailer => (
          <tr key={mailer.productNumber}>
            <td>{mailer.productNumber}</td>
            <td>{mailer.description}</td>
            <td>{mailer.insideLength}</td>
            <td>{mailer.numberPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default KraftBubbleMailer;
