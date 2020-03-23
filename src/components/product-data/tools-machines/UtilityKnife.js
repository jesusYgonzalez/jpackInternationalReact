import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const utilityKnife = [
  {
    productNumber: "KN-SL501",
    description: "Heavy Duty Utility Knives *2 Extra Blades Included*",
    color: "Orange"
  },
  {
    productNumber: "KN-SL502",
    description: "Economic Utility Knives",
    color: "Orange"
  },
  {
    productNumber: "KN-SL503",
    description: "“Slimline” Utility Knives *2 Extra Blades Included*",
    color: "White"
  },
  {
    productNumber: "KN-SL504",
    description: "Carton Cutter (12 Knives/Case)",
    color: "Steel"
  },
  {
    productNumber: "KN-SL505",
    description:
      "Heavy Duty Utility Knives Color Silver *4 Extra Blades Included*",
    color: "Silver"
  }
];
const utilityBlades = [
  {
    productNumber: "KN-SL3K",
    description: "SL-503 Utility Knife Replacement Blade",
    numberPerCase: 100
  },
  {
    productNumber: "KN-SL4K",
    description: "SL-505 Utility Knife Replacement Blade",
    numberPerCase: 100
  },
  {
    productNumber: "KN-SL5K",
    description: "SL501, SL502 Snap-Off Replacement Blade",
    numberPerCase: 10
  },
  {
    productNumber: "KN-SL6K",
    description: "SL-504 Utility Knife Replacement Blade",
    numberPerCase: 100
  }
];

const UtilityKnife = () => {
  return (
    <MDBTable striped>
      {/*UTILITY KNIFE*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Color</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {utilityKnife.map(knife => (
          <tr key={knife.productNumber}>
            <td>{knife.productNumber}</td>
            <td>{knife.description}</td>
            <td>{knife.color}</td>
          </tr>
        ))}
      </MDBTableBody>

      {/*UTILITY KNIFE*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Number/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {utilityBlades.map(knife => (
          <tr key={knife.productNumber}>
            <td>{knife.productNumber}</td>
            <td>{knife.description}</td>
            <td>{knife.numberPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default UtilityKnife;
