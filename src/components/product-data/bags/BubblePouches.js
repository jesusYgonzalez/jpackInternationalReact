import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
import image from "../../../assets/img/bubble-pouches.jpg";

const bubblePouches = [
  {
    productNumberRegular: "BUB-P0405FC",
    productNumberAntiStatic: "BUB-P0405FP",
    sizeWxL: "4 x 5 1/2″",
    bagPerCase: "1500"
  },
  {
    productNumberRegular: "BUB-P0407FC",
    productNumberAntiStatic: "BUB-P0407FP",
    sizeWxL: "4 x 7 1/2″",
    bagPerCase: "1100"
  },
  {
    productNumberRegular: "BUB-P0608FC",
    productNumberAntiStatic: "BUB-P0608FP",
    sizeWxL: "6 x 8 1/2″",
    bagPerCase: "650"
  },
  {
    productNumberRegular: "BUB-P0711FC",
    productNumberAntiStatic: "BUB-P0711FP",
    sizeWxL: "7 x 8 1/2″",
    bagPerCase: "550"
  },
  {
    productNumberRegular: "BUB-P0811FC",
    productNumberAntiStatic: "BUB-P0811FP",
    sizeWxL: "8 x 11 1/2″",
    bagPerCase: "400"
  },
  {
    productNumberRegular: "BUB-P0815FC",
    productNumberAntiStatic: "BUB-P0815FP",
    sizeWxL: "8 x 15 1/2″",
    bagPerCase: "350"
  },
  {
    productNumberRegular: "BUB-P0817FC",
    productNumberAntiStatic: "BUB-P0817FP",
    sizeWxL: "8 x 17 1/2″",
    bagPerCase: "250"
  },
  {
    productNumberRegular: "BUB-P1015FC",
    productNumberAntiStatic: "BUB-P1015FP",
    sizeWxL: "10 x 15 1/2″",
    bagPerCase: "250"
  },
  {
    productNumberRegular: "BUB-P1211FC",
    productNumberAntiStatic: "BUB-P1211FP",
    sizeWxL: "12 x 11 1/2″",
    bagPerCase: "250"
  },
  {
    productNumberRegular: "BUB-P1215FC",
    productNumberAntiStatic: "BUB-P1215FP",
    sizeWxL: "12 x 15 1/2″",
    bagPerCase: "200"
  },
  {
    productNumberRegular: "BUB-P1223FC",
    productNumberAntiStatic: "BUB-P1223FP",
    sizeWxL: "12 x 23 1/2″",
    bagPerCase: "150"
  },
  {
    productNumberRegular: "BUB-P1517FC",
    productNumberAntiStatic: "BUB-P1517FP",
    sizeWxL: "15 x 17 1/2″",
    bagPerCase: "150"
  },
  {
    productNumberRegular: "BUB-P1823FC",
    productNumberAntiStatic: "BUB-P1823FP",
    sizeWxL: "18 x 23 1/2″",
    bagPerCase: "100"
  }
];

const BubblePouches = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12 lg-6" className="mb-3" style={{ marginLeft: -15 }}>
            <MDBCard>
              <MDBCardImage
                className="img-fluid mx-auto"
                src={image}
                alt={"Anti Static Bag"}
                waves
              />
            </MDBCard>
          </MDBCol>

          <MDBCol size="12 lg-6" className="mb-4" style={{ marginLeft: -15 }}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#1976d2" }}>
                  BUBBLE POUCHES
                </MDBCardTitle>
                <h4 className="lead">
                  Provide cushion and protection for fragile items with this bag
                  created with 3/16” bubble wrap.
                </h4>
                <p className="card-text lead">
                  <strong>No glue or tape needed:</strong> Includes a peel-off
                  sealing feature, which encloses the bubble pouch firmly
                  without tape or glue. It will definitely save you a lot of
                  shipping time.
                </p>
                <p className="card-text lead">
                  <strong>Anti-Static Available.</strong>
                </p>
                <p className="card-text lead">
                  <strong>Sizes:</strong> All of the product sizes are width x
                  length in <strong>inches.</strong>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBTable striped>
        <MDBTableHead>
          <tr
            color="primary"
            style={{
              backgroundColor: "#1976d2",
              color: "white"
            }}
          >
            <th>Product Number (Regular)</th>
            <th>Product Number (Anti Static)</th>
            <th>Bags Per Case</th>
            <th>Bag/Case</th>
            <th>Cart</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {bubblePouches.map(bags => (
            <tr key={bags.productNumberRegular}>
              <td>{bags.productNumberRegular}</td>
              <td>{bags.productNumberAntiStatic}</td>
              <td>{bags.sizeWxL}</td>
              <td>{bags.bagPerCase}</td>
              <td>
                <MDBBtn color="blue">Add</MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default BubblePouches;
