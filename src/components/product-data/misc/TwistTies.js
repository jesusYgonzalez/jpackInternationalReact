import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const plasticTwistTies = [
  {
    productNumber: "PT-04B",
    length: "4″",
    material: "Plastic",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04BU",
    length: "4″",
    material: "Plastic",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04G",
    length: "4″",
    material: "Plastic",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04R",
    length: "4″",
    material: "Plastic",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04W",
    length: "4″",
    material: "Plastic",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04Y",
    length: "4″",
    material: "Plastic",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06B",
    length: "6″",
    material: "Plastic",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06BU",
    length: "6″",
    material: "Plastic",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06G",
    length: "6″",
    material: "Plastic",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06R",
    length: "6″",
    material: "Plastic",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06W",
    length: "6″",
    material: "Plastic",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06Y",
    length: "6″",
    material: "Plastic",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08B",
    length: "8″",
    material: "Plastic",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08BU",
    length: "8″",
    material: "Plastic",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08G",
    length: "8″",
    material: "Plastic",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08R",
    length: "8″",
    material: "Plastic",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08W",
    length: "8″",
    material: "Plastic",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08Y",
    length: "8″",
    material: "Plastic",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10B",
    length: "10″",
    material: "Plastic",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10BU",
    length: "10″",
    material: "Plastic",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10G",
    length: "10″",
    material: "Plastic",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10R",
    length: "10″",
    material: "Plastic",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10W",
    length: "10″",
    material: "Plastic",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10Y",
    length: "10″",
    material: "Plastic",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12B",
    length: "12″",
    material: "Plastic",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12BU",
    length: "12″",
    material: "Plastic",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12G",
    length: "12″",
    material: "Plastic",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12R",
    length: "12″",
    material: "Plastic",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12W",
    length: "12″",
    material: "Plastic",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12Y",
    length: "12″",
    material: "Plastic",
    color: "Yellow",
    numberPerBox: "2,000"
  }
];
const paperTwistTies = [
  {
    productNumber: "PT-04BP",
    length: "4″",
    material: "Paper",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04BUP",
    length: "4″",
    material: "Paper",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04GP",
    length: "4″",
    material: "Paper",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04RP",
    length: "4″",
    material: "Paper",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04WP",
    length: "4″",
    material: "Paper",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04YP",
    length: "4″",
    material: "Paper",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-04RWP",
    length: "4″",
    material: "Paper",
    color: "Red/White Stripe",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06BP",
    length: "6″",
    material: "Paper",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06BUP",
    length: "6″",
    material: "Paper",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06GP",
    length: "6″",
    material: "Paper",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06RP",
    length: "6″",
    material: "Paper",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06WP",
    length: "6″",
    material: "Paper",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06YP",
    length: "6″",
    material: "Paper",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-06RWP",
    length: "6″",
    material: "Paper",
    color: "Red/White Stripe",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08BP",
    length: "8″",
    material: "Paper",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08BUP",
    length: "8″",
    material: "Paper",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08GP",
    length: "8″",
    material: "Paper",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08RP",
    length: "8″",
    material: "Paper",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08WP",
    length: "8″",
    material: "Paper",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08YP",
    length: "8″",
    material: "Paper",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-08RWP",
    length: "8″",
    material: "Paper",
    color: "Red/White Stripe",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10BP",
    length: "10″",
    material: "Paper",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10BUP",
    length: "10″",
    material: "Paper",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10GP",
    length: "10″",
    material: "Paper",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10RP",
    length: "10″",
    material: "Paper",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10WP",
    length: "10″",
    material: "Paper",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10YP",
    length: "10″",
    material: "Paper",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-10RWP",
    length: "10″",
    material: "Paper",
    color: "Red/White Stripe",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12BP",
    length: "12″",
    material: "Paper",
    color: "Black",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12BUP",
    length: "12″",
    material: "Paper",
    color: "Blue",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12GP",
    length: "12″",
    material: "Paper",
    color: "Green",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12RP",
    length: "12″",
    material: "Paper",
    color: "Red",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12WP",
    length: "12″",
    material: "Paper",
    color: "White",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12YP",
    length: "12″",
    material: "Paper",
    color: "Yellow",
    numberPerBox: "2,000"
  },
  {
    productNumber: "PT-12RWP",
    length: "12″",
    material: "Paper",
    color: "Red/White Stripe",
    numberPerBox: "2,000"
  }
];

const TwistTies = () => {
  return (
    <MDBTable striped>
      {/*PLASTIC TWIST TIES*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Length</th>
          <th>Material</th>
          <th>Color</th>
          <th>Number/Box</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {plasticTwistTies.map(ties => (
          <tr key={ties.productNumber}>
            <td>{ties.productNumber}</td>
            <td>{ties.length}</td>
            <td>{ties.material}</td>
            <td>{ties.color}</td>
            <td>{ties.numberPerBox}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*PAPER TWIST TIES*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Length</th>
          <th>Material</th>
          <th>Color</th>
          <th>Number/Box</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {paperTwistTies.map(ties => (
          <tr key={ties.productNumber}>
            <td>{ties.productNumber}</td>
            <td>{ties.length}</td>
            <td>{ties.material}</td>
            <td>{ties.color}</td>
            <td>{ties.numberPerBox}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TwistTies;
