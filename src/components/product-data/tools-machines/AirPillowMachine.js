import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const miniAirSystem = [
  {
    productNumber: "MINIAIR",
    description: "Produces All mini Air Pillows",
    weight: "5 KG",
    speed: "8M / Minute"
  }
];
const miniAirPillows = [
  {
    productNumber: "AF-0810",
    description: "Filler Cushion (1 Cell Wide)",
    cellSize: "200 x 250mm",
    rollSize: "200mm x 700M",
    rollsPerCase: "2 Rolls"
  },
  {
    productNumber: "AF-0808",
    description: "Filler Cushion (1 Cell Wide)",
    cellSize: "200 x 200mm",
    rollSize: "200mm x 700M",
    rollsPerCase: "2 Rolls"
  },
  {
    productNumber: "AF-0806",
    description: "Filler Cushion (1 Cell Wide)",
    cellSize: "200 x 150mm",
    rollSize: "200mm x 700M",
    rollsPerCase: "2 Rolls"
  },
  {
    productNumber: "AF-0804",
    description: "Filler Cushion (1 Cell Wide)",
    cellSize: "200 x 100mm",
    rollSize: "200mm x 700M",
    rollsPerCase: "2 Rolls"
  },
  {
    productNumber: "AW-TUBEL",
    description: "Large Air Wrapper Tube (2 Cells Wide)",
    cellSize: "170 x 150mm",
    rollSize: "400mm x 500M",
    rollsPerCase: "1 Roll"
  },
  {
    productNumber: "AW-TUBES",
    description: "Small Air Wrapper Tube (2 Cells Wide)",
    cellSize: "170 x 76mm",
    rollSize: "400mm x 500M",
    rollsPerCase: "1 Roll"
  },
  {
    productNumber: "AW-TUBEM",
    description: "Multi Air Wrapper Tube (4 Cells Wide)",
    cellSize: "85 x 60mm",
    rollSize: "400mm x 500M",
    rollsPerCase: "1 Roll"
  },
  {
    productNumber: "AW-BUBBLE",
    description: "Bubble (8 Cells Wide)",
    cellSize: "43 x 43mm",
    rollSize: "400mm x 500M",
    rollsPerCase: "1 Roll"
  }
];

const AirPillowMachine = () => {
  return (
    <MDBTable striped>
      {/*MINI AIR SYSTEM*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Weight</th>
          <th>Speed</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {miniAirSystem.map(pillows => (
          <tr key={pillows.productNumber}>
            <td>{pillows.productNumber}</td>
            <td>{pillows.description}</td>
            <td>{pillows.weight}</td>
            <td>{pillows.speed}</td>
          </tr>
        ))}
      </MDBTableBody>

      {/*MINI AIR SYSTEM*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Cell Size</th>
          <th>Rolls/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {miniAirPillows.map(pillows => (
          <tr key={pillows.productNumber}>
            <td>{pillows.productNumber}</td>
            <td>{pillows.description}</td>
            <td>{pillows.cellSize}</td>
            <td>{pillows.rollsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default AirPillowMachine;
