import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const shrinkWrapRoll = [
  {
    productNumber: "SF-1075-P",
    durability: "75 Gauge",
    width: "10″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1275-P",
    durability: "75 Gauge",
    width: "12″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1375-P",
    durability: "75 Gauge",
    width: "13″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1475-P",
    durability: "75 Gauge",
    width: "14″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1575-P",
    durability: "75 Gauge",
    width: "15″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1675-P",
    durability: "75 Gauge",
    width: "16″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-1875-P",
    durability: "75 Gauge",
    width: "18″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-2075-P",
    durability: "75 Gauge",
    width: "20″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-2275-P",
    durability: "75 Gauge",
    width: "22″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-2475-P",
    durability: "75 Gauge",
    width: "24″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-2675-P",
    durability: "75 Gauge",
    width: "26″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-2875-P",
    durability: "75 Gauge",
    width: "28″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  },
  {
    productNumber: "SF-3075-P",
    durability: "75 Gauge",
    width: "30″",
    description: "Polyolefin",
    lengthPerRoll: "3500′"
  }
];
const pvcBag = [
  {
    productNumber: "SF-0606",
    durability: "80 Gauge",
    size: "6 x 6″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-0607",
    durability: "80 Gauge",
    size: "6 x 7″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-0611",
    durability: "80 Gauge",
    size: "6 x 11″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-0812",
    durability: "80 Gauge",
    size: "8 x 12″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-0914",
    durability: "80 Gauge",
    size: "9 x 14″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-1216",
    durability: "80 Gauge",
    size: "12 x 16″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-1218",
    durability: "80 Gauge",
    size: "12 x 18″",
    description: "PVC Bag",
    numberPerCase: 500
  },
  {
    productNumber: "SF-1420",
    durability: "80 Gauge",
    size: "14 x 20″",
    description: "PVC Bag",
    numberPerCase: 500
  }
];

const ShrinkWrapRoll = () => {
  return (
    <MDBTable striped>
      {/*SHRINK WRAP ROLL*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Durability</th>
          <th>Width</th>
          <th>Description</th>
          <th>Length/Roll</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {shrinkWrapRoll.map(roll => (
          <tr key={roll.productNumber}>
            <td>{roll.productNumber}</td>
            <td>{roll.durability}</td>
            <td>{roll.width}</td>
            <td>{roll.description}</td>
            <td>{roll.lengthPerRoll}</td>
          </tr>
        ))}
      </MDBTableBody>
      {/*PVC BAG*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Durability</th>
          <th>Size</th>
          <th>Description</th>
          <th>Number/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {pvcBag.map(roll => (
          <tr key={roll.productNumber}>
            <td>{roll.productNumber}</td>
            <td>{roll.durability}</td>
            <td>{roll.size}</td>
            <td>{roll.description}</td>
            <td>{roll.numberPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ShrinkWrapRoll;
