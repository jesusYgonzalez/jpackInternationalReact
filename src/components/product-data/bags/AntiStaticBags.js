import React from "react";
import {
  MDBCard,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBTable,
  MDBTableHead
} from "mdbreact";
import { MDBContainer } from "mdbreact";
import image from "../../../assets/img/anti-static-bag.jpg";
import classes from "../style.css";

export const antiStaticBags = [
  {
    productNumber: "----------",
    durability: "-----------",
    sizeWxL: "2 MIL",
    weight: "-----------",
    bagPerCase: "-----------"
  },
  {
    productNumber: "BG-P030502",
    durability: "2 Mil",
    sizeWxL: "3 x 5",
    weight: 2,
    bagPerCase: "5000"
  },
  {
    productNumber: "BG-P040602",
    durability: "2 Mil",
    sizeWxL: "4 x 6",
    weight: 3.2,
    bagPerCase: "5000"
  },
  {
    productNumber: "BG - P050702",
    durability: "2 Mil",
    sizeWxL: "5 x 7",
    weight: 4.6,
    bagPerCase: "2000"
  },
  {
    productNumber: "BG - P060802",
    durability: "2 Mil",
    sizeWxL: "6 x 8",
    weight: 6.4,
    bagPerCase: "2000"
  },
  {
    productNumber: "BG - P061002",
    durability: "2 Mil",
    sizeWxL: "6 x 10",
    weight: 8,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P081002",
    durability: "2 Mil",
    sizeWxL: "8 x 10",
    weight: 10.6,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P091202",
    durability: "2 Mil",
    sizeWxL: "9 x 12",
    weight: 14.4,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P101602",
    durability: "2 Mil",
    sizeWxL: "10 x 16",
    weight: 21.3,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P121502",
    durability: "2 Mil",
    sizeWxL: "12 x 15",
    weight: 24,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P121802",
    durability: "2 Mil",
    sizeWxL: "12 x 18",
    weight: 28.8,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P182402",
    durability: "2 Mil",
    sizeWxL: "18 x 24",
    weight: 57.6,
    bagPerCase: "500"
  },
  {
    productNumber: "BG - P243602",
    durability: "2 Mil",
    sizeWxL: "24 x 36",
    weight: 115.2,
    bagPerCase: "250"
  },
  {
    productNumber: "-----------",
    durability: "-----------",
    sizeWxL: "4 MIL",
    weight: "-----------",
    bagPerCase: "-----------"
  },
  {
    productNumber: "BG - P020304",
    durability: "4 Mil",
    sizeWxL: "2 x 3",
    weight: 1.6,
    bagPerCase: "5000"
  },
  {
    productNumber: "BG - P030504",
    durability: "4 Mil",
    sizeWxL: "3 x 5",
    weight: 4,
    bagPerCase: "2000"
  },
  {
    productNumber: "BG - P040504",
    durability: "4 Mil",
    sizeWxL: "4 x 5",
    weight: 5.3,
    bagPerCase: "2000"
  },
  {
    productNumber: "BG - P040604",
    durability: "4 Mil",
    sizeWxL: "4 x 6",
    weight: 6.4,
    bagPerCase: "2000"
  },
  {
    productNumber: "BG - P040804",
    durability: "4 Mil",
    sizeWxL: "4 x 8",
    weight: 8.5,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P050704",
    durability: "4 Mil",
    sizeWxL: "5 x 7",
    weight: 9.3,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P050804",
    durability: "4 Mil",
    sizeWxL: "5 x 8",
    weight: 10.7,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P060804",
    durability: "4 Mil",
    sizeWxL: "6 x 8",
    weight: 12.8,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P061204",
    durability: "4 Mil",
    sizeWxL: "6 x 12",
    weight: 19.2,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P081004",
    durability: "4 Mil",
    sizeWxL: "8 x 10",
    weight: 21.3,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P081204",
    durability: "4 Mil",
    sizeWxL: "8 x 12",
    weight: 25.6,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P091204",
    durability: "4 Mil",
    sizeWxL: "9 x 12",
    weight: 28.8,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P101204",
    durability: "4 Mil",
    sizeWxL: "10 x 12",
    weight: 32,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P101604",
    durability: "4 Mil",
    sizeWxL: "10 x 16",
    weight: 42.7,
    bagPerCase: "1000"
  },
  {
    productNumber: "BG - P121804",
    durability: "4 Mil",
    sizeWxL: "12 x 18",
    weight: 57.6,
    bagPerCase: "500"
  },
  {
    productNumber: "BG - P151804",
    durability: "4 Mil",
    sizeWxL: "15 x 18",
    weight: 72,
    bagPerCase: "500"
  },
  {
    productNumber: "BG - P161804",
    durability: "4 Mil",
    sizeWxL: "16 x 18",
    weight: 76.8,
    bagPerCase: "500"
  },
  {
    productNumber: "BG - P162404",
    durability: "4 Mil",
    sizeWxL: "16 x 24",
    weight: 102.4,
    bagPerCase: "250"
  },
  {
    productNumber: "BG - P182404",
    durability: "4 Mil",
    sizeWxL: "18 x 24",
    weight: 115.2,
    bagPerCase: "250"
  },
  {
    productNumber: "BG - P243604",
    durability: "4 Mil",
    sizeWxL: "24 x 36",
    weight: 230.4,
    bagPerCase: "200"
  }
];

const AntiStaticBags = () => {
  return (
  	<MDBContainer className={classes.container}>
			<MDBRow className="ml-lg-5">
					{/*IMAGE*/}
          <MDBCol size="lg-12 ml-lg-5">
            <MDBCard>
              <MDBCardImage
                className="img-fluid mx-auto"
                src={image}
                alt={"Anti Static Bag"}
                waves
              />
            </MDBCard>
          </MDBCol>
					{/*PRODUCT INFO*/}
          <MDBCol size="lg-12 ml-lg-5 my-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#1976d2" }}>
                  ANTI STATIC BAGS
                </MDBCardTitle>
                <h4 className="lead">
                  Anti-static bags are used for protecting electronics from
                  static electricity. Works by dissipating ions from their
                  surfaces.
                </h4>
                <p className="card-text ">
                  <strong>Reliable:</strong> All of our anti-static bags meet or
                  exceed industrial standards.
                </p>
                <p className="card-text ">
                  <strong>Sizes:</strong> All of the product sizes are width x
                  length in inches.
                </p>
                <p className="card-text ">
                  <strong>Weight:</strong> All of the product weight are in
                  pounds per 1000 bags.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/*TABLE*/}
          <MDBCol size="lg-12 ml-lg-5 mb-4">
            <MDBTable striped>
              <MDBTableHead>
                <tr
                  color="primary"
                  style={{
                    backgroundColor: "#1976d2",
                    color: "white"
                  }}
                >
                  {/*<th className="text-center item">Product Number</th>*/}
                  <th className="text-center item">Durability</th>
                  <th className="text-center item">Size</th>
                  <th className="text-center item">Weight</th>
                  <th className="text-center item">Bags Per Case</th>
                  {/*<th className="text-center">Add To Cart</th>*/}
                </tr>
              </MDBTableHead>
              <tbody>
                {antiStaticBags.map(bags => (
                  <tr key={bags.productNumber}>
                    {/*<td className="text-center item">{bags.productNumber}</td>*/}
                    <td className="text-center item">{bags.durability}</td>
                    <td className="text-center item">{bags.sizeWxL}</td>
                    <td className="text-center item">{bags.weight}</td>
                    <td className="text-center item">{bags.bagPerCase}</td>
                    {/*<td>*/}
                    {/*  <MDBBtn className="text-center" color="blue">Add</MDBBtn>*/}
                    {/*</td>*/}
                  </tr>
                ))}
              </tbody>
            </MDBTable>
          </MDBCol>
			</MDBRow>
		</MDBContainer>
  );
};

export default AntiStaticBags;
