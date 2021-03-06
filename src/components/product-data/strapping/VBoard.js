import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const vBoard = [
  {
    productNumber: "V-BOARD2F-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "2 1/2″",
    numberPerPallet: "48,000"
  },
  {
    productNumber: "V-BOARD36-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "36″",
    numberPerPallet: "2,808"
  },
  {
    productNumber: "V-BOARD40-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "40″",
    numberPerPallet: "2,808"
  },
  {
    productNumber: "V-BOARD48-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "48″",
    numberPerPallet: "2,808"
  },
  {
    productNumber: "V-BOARD60-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "60″",
    numberPerPallet: "2,808"
  },
  {
    productNumber: "V-BOARD72-2-12",
    description: "Light Duty",
    thickness: "0.12″",
    size: "2 x 2″",
    length: "72″",
    numberPerPallet: "2,808"
  },
  {
    productNumber: "V-BOARD2F-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "2 1/2″",
    numberPerPallet: "36,450"
  },
  {
    productNumber: "V-BOARD36-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "36″",
    numberPerPallet: "2,106"
  },
  {
    productNumber: "V-BOARD40-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "40″",
    numberPerPallet: "2,106"
  },
  {
    productNumber: "V-BOARD48-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "48″",
    numberPerPallet: "2,106"
  },
  {
    productNumber: "V-BOARD36-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "60″",
    numberPerPallet: "2,106"
  },
  {
    productNumber: "V-B0ARD72-2-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 x 2″",
    length: "72″",
    numberPerPallet: "2,106"
  },
  {
    productNumber: "V-BOARD36-2F-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 1/2 x 2 1/2″",
    length: "36",
    numberPerPallet: "1,782"
  },
  {
    productNumber: "V-BOARD40-2F-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 1/2 x 2 1/2″",
    length: "40",
    numberPerPallet: "1,782"
  },
  {
    productNumber: "V-BOARD48-2F-16",
    description: "Medium Duty",
    thickness: "0.16″",
    size: "2 1/2 x 2 1/2″",
    length: "48",
    numberPerPallet: "1,782"
  },
  {
    productNumber: "V-BOARD36-2-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 x 2″",
    length: "36″",
    numberPerPallet: "1560"
  },
  {
    productNumber: "V-BOARD40-2-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 x 2″",
    length: "40″",
    numberPerPallet: "1560"
  },
  {
    productNumber: "V-BOARD48-2-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 x 2″",
    length: "48″",
    numberPerPallet: "1560"
  },
  {
    productNumber: "V-BOARD60-2-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 x 2″",
    length: "60″",
    numberPerPallet: "1560"
  },
  {
    productNumber: "V-BOARD72-2-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 x 2″",
    length: "72″",
    numberPerPallet: "1560"
  },
  {
    productNumber: "V-BOARD36-2F-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 1/2 x 2 1/2″",
    length: "36″",
    numberPerPallet: "1320"
  },
  {
    productNumber: "V-BOARD42-2F-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 1/2 x 2 1/2″",
    length: "42″",
    numberPerPallet: "1320"
  },
  {
    productNumber: "V-BOARD48-2F-225",
    description: "Heavy Duty",
    thickness: "0.225″",
    size: "2 1/2 x 2 1/2″",
    length: "48″",
    numberPerPallet: "1320"
  }
];

const VBoard = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Thickness</th>
          <th>Size</th>
          <th>Length</th>
          <th>Number/Pallet</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {vBoard.map((boards,i) => (
          <tr key={i}>
            <td>{boards.productNumber}</td>
            <td>{boards.description}</td>
            <td>{boards.thickness}</td>
            <td>{boards.size}</td>
            <td>{boards.length}</td>
            <td>{boards.numberPerPallet}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default VBoard;
