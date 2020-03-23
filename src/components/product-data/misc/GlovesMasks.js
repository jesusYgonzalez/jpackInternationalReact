import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const gloves = [
  {
    productNumber: "GLOVE-COTTON",
    description: "White Cotton, Elastic Knitt Wrist, Reversible",
    sizing: "Medium, Large",
    pairsPerPack: "12",
    pairsPerCase: 300
  },
  {
    productNumber: "GLOVE-4717",
    description:
      "White Cotton, Elastic Knitt Wrist, One-Side Dotted PVC for Grip",
    sizing: "Men, Lady",
    pairsPerPack: "–",
    pairsPerCase: 300
  },
  {
    productNumber: "GLOVE-INSP",
    description: "Light Weight White Cotton, Unhemmed Cuff, Reversible",
    sizing: "Men, Lady",
    pairsPerPack: "–",
    pairsPerCase: 1200
  },
  {
    productNumber: "GLOVE-LEATHER",
    description:
      "Standard Leather, Durable Patch Palm & Knuckle, Rubberized Safety Cuff",
    sizing: "Medium, Large",
    pairsPerPack: "1",
    pairsPerCase: 72
  },
  {
    productNumber: "GLOVE-2010WC",
    description: "Powder-Free Disposable Blue Nitrile Industrial Gloves",
    sizing: "S-XL",
    pairsPerPack: "50",
    pairsPerCase: 500
  },
  {
    productNumber: "GLOVE-2810W",
    description: "Powder-Free Disposable Neutral-Colored Grade Latex Gloves",
    sizing: "S-XL",
    pairsPerPack: "50",
    pairsPerCase: 500
  }
];
const masks = [
  {
    productNumber: "MASK",
    description:
      "Safe lining, Fluid Repelling, Non-irritating, Fiberglass Free",
    name: "3 Ply Earloop Mask",
    numberPerPack: 50,
    packPerCase: 20
  },
  {
    productNumber: "MASK-1895NV",
    description:
      "Adjustable Aluminum Nose Piece, Fabric Wrapped Elastic Head Strap",
    name: "Nuisance Dust Mask",
    numberPerPack: 50,
    packPerCase: 20
  },
  {
    productNumber: "MASK-40578",
    description:
      "Meets CDC guidelines, Noish 95 Approved, Latex-free Double Head Strap",
    name: "Particulate Respirators",
    numberPerPack: 20,
    packPerCase: 12
  }
];

const GlovesMasks = () => {
  return (
    <MDBTable striped>

      {/*GLOVES*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Size</th>
          <th>Pairs/Pack</th>
          <th>Pairs/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {gloves.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
            <td>{lbls.sizing}</td>
            <td>{lbls.pairsPerPack}</td>
            <td>{lbls.pairsPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>

      {/*MASKS*/}
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Description</th>
          <th>Name</th>
          <th>Number/Pack</th>
          <th>Pack/Case</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {masks.map(lbls => (
          <tr key={lbls.productNumber}>
            <td>{lbls.productNumber}</td>
            <td>{lbls.description}</td>
            <td>{lbls.name}</td>
            <td>{lbls.numberPerPack}</td>
            <td>{lbls.packPerCase}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GlovesMasks;
