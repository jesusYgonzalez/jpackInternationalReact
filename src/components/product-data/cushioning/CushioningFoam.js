import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const cushioningFoam = [
  {
    productRegular: "BUB-PF1324C",
    productNumberAntiStatic: "BUB-PF1324P",
    thickness: "1/32″",
    rollSize: "12″ x 1350′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1324C-72",
    productNumberAntiStatic: "BUB-PF1324P-72",
    thickness: "1/32″",
    rollSize: "18″ x 1350′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1322C",
    productNumberAntiStatic: "BUB-PF1322P",
    thickness: "1/32″",
    rollSize: "24″ x 1350′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1322C-72",
    productNumberAntiStatic: "BUB-PF1322P-72",
    thickness: "1/32″",
    rollSize: "36″ x 1350′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1321C",
    productNumberAntiStatic: "BUB-PF1321P",
    thickness: "1/32″",
    rollSize: "48″ x 1350′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF1321C-72",
    productNumberAntiStatic: "BUB-PF1321P-72",
    thickness: "1/32″",
    rollSize: "72″ x 1350′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF1164C",
    productNumberAntiStatic: "BUB-PF1164P",
    thickness: "1/16″",
    rollSize: "12″ x 900′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1164C-72",
    productNumberAntiStatic: "BUB-PF1164P-72",
    thickness: "1/16″",
    rollSize: "18″ x 900′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1162C",
    productNumberAntiStatic: "BUB-PF1162P",
    thickness: "1/16″",
    rollSize: "24″ x 900′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1162C-72",
    productNumberAntiStatic: "BUB-PF1162P-72",
    thickness: "1/16″",
    rollSize: "36″ x 900′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1161C",
    productNumberAntiStatic: "BUB-PF1161P",
    thickness: "1/16″",
    rollSize: "48″ x 900′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF1161C-72",
    productNumberAntiStatic: "BUB-PF1161P-72",
    thickness: "1/16″",
    rollSize: "72″ x 900′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF3324C",
    productNumberAntiStatic: "BUB-PF3324P",
    thickness: "3/32″",
    rollSize: "12″ x 600′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF3324C-72",
    productNumberAntiStatic: "BUB-PF3324P-72",
    thickness: "3/32″",
    rollSize: "18″ x 600′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF3322C",
    productNumberAntiStatic: "BUB-PF3322P",
    thickness: "3/32″",
    rollSize: "24″ x 600′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF3322C-72",
    productNumberAntiStatic: "BUB-PF3322P-72",
    thickness: "3/32″",
    rollSize: "36″ x 600′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF3321C",
    productNumberAntiStatic: "BUB-PF3321P",
    thickness: "3/32″",
    rollSize: "48″ x 600′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF3321C-72",
    productNumberAntiStatic: "BUB-PF3321P-72",
    thickness: "3/32″",
    rollSize: "72″ x 600′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF1084C",
    productNumberAntiStatic: "BUB-PF1084P",
    thickness: "1/8″",
    rollSize: "12″ x 450′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1084C-72",
    productNumberAntiStatic: "BUB-PF1084P-72",
    thickness: "1/8″",
    rollSize: "18″ x 450′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1082C",
    productNumberAntiStatic: "BUB-PF1082P",
    thickness: "1/8″",
    rollSize: "24″ x 450′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1082C-72",
    productNumberAntiStatic: "BUB-PF1082P-72",
    thickness: "1/8″",
    rollSize: "36″ x 450′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1081C",
    productNumberAntiStatic: "BUB-PF1081P",
    thickness: "1/8″",
    rollSize: "48″ x 450′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF1081C-72",
    productNumberAntiStatic: "BUB-PF1081P-72",
    thickness: "1/8″",
    rollSize: "72″ x 450′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF3164C",
    productNumberAntiStatic: "BUB-PF3164P",
    thickness: "3/16″",
    rollSize: "12″ x 300′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF3164C-72",
    productNumberAntiStatic: "BUB-PF3164P-72",
    thickness: "3/16″",
    rollSize: "18″ x 300′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF3162C",
    productNumberAntiStatic: "BUB-PF3162P",
    thickness: "3/16″",
    rollSize: "24″ x 300′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF3162C-72",
    productNumberAntiStatic: "BUB-PF3162P-72",
    thickness: "3/16″",
    rollSize: "36″ x 300′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF3161C",
    productNumberAntiStatic: "BUB-PF3161P",
    thickness: "3/16″",
    rollSize: "48″ x 300′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF3161C-72",
    productNumberAntiStatic: "BUB-PF3161P-72",
    thickness: "3/16″",
    rollSize: "72″ x 300′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF1044C",
    productNumberAntiStatic: "BUB-PF1044P",
    thickness: "1/4″",
    rollSize: "12″ x 225′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1044C-72",
    productNumberAntiStatic: "BUB-PF1044P-72",
    thickness: "1/4″",
    rollSize: "18″ x 225′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1042C",
    productNumberAntiStatic: "BUB-PF1042P",
    thickness: "1/4″",
    rollSize: "24″ x 225′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1042C-72",
    productNumberAntiStatic: "BUB-PF1042P-72",
    thickness: "1/4″",
    rollSize: "36″ x 225′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1041C",
    productNumberAntiStatic: "BUB-PF1041P",
    thickness: "1/4″",
    rollSize: "48″ x 225′",
    rollPerBundle: 1
  },
  {
    productRegular: "BUB-PF1041C-72",
    productNumberAntiStatic: "BUB-PF1041P-72",
    thickness: "1/4″",
    rollSize: "72″ x 225′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF3084C",
    productNumberAntiStatic: "BUB-PF3084P",
    thickness: "3/8″",
    rollSize: "12″ x 125′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF3082C",
    productNumberAntiStatic: "BUB-PF3082P",
    thickness: "3/8″",
    rollSize: "24″ x 125′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF3081C",
    productNumberAntiStatic: "BUB-PF3081P",
    thickness: "3/8″",
    rollSize: "48″ x 125′",
    rollPerBundle: 1
  },
  {
    productRegular: "",
    productNumberAntiStatic: "",
    thickness: "",
    rollSize: "",
    rollPerBundle: null
  },
  {
    productRegular: "BUB-PF1024C",
    productNumberAntiStatic: "BUB-PF1024P",
    thickness: "1/2″",
    rollSize: "12″ x 125′",
    rollPerBundle: 4
  },
  {
    productRegular: "BUB-PF1022C",
    productNumberAntiStatic: "BUB-PF1022P",
    thickness: "1/2″",
    rollSize: "24″ x 125′",
    rollPerBundle: 2
  },
  {
    productRegular: "BUB-PF1021C",
    productNumberAntiStatic: "BUB-PF1021P",
    thickness: "1/2″",
    rollSize: "48″ x 125′",
    rollPerBundle: 1
  }
];

const CushioningFoam = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Product Number</th>
          <th>Product Number Anti Static</th>
          <th>Thickness</th>
          <th>Roll Size</th>
          <th>Roll Per Bundle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {cushioningFoam.map((foam, i) => (
          <tr key={i}>
            <td>{foam.productRegular}</td>
            <td>{foam.productNumberAntiStatic}</td>
            <td>{foam.thickness}</td>
            <td>{foam.rollSize}</td>
            <td>{foam.rollPerBundle}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default CushioningFoam;
