import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const corrugatedBoxesCode = [
	{
		code: "#3W",
		description: "White Exterior Box"
	},
	{
		code: "350#",
		description: "350 Lb. Test"
	},
	{
		code: "275#",
		description: "275 Lb. Test"
	},
	{
		code: "175#",
		description: "Lightweight: 175 Lb. Test"
	},
	{
		code: "D/W",
		description: "Double Wall"
	},
	{
		code: "S/W",
		description: "Single Wall"
	}
];
const corrugatedBoxes = [
	{
		description: "3 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "3 X 3 X 4",
		numberPerBundle: 25,
		numberPerPallet: 2000
	},
	{
		description: "3 X 3 X 7",
		numberPerBundle: 25,
		numberPerPallet: 2000
	},
	{
		description: "4 X 4 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "4 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "4 X 4 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "4 X 4 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "4 X 4 X 8",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "4 X 4 X 9",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "4 X 4 X 12",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "4 X 4 X 18",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "4 X 4 X 20",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "4 X 4 X 24",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "4 X 4 X 28",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "4 X 4 X 32",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "4 X 4 X 36",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "4 X 4 X 40",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "4 X 4 X 48",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "4 1/2 X 4 1/2 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "5 X 3 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "5 X 5 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "5 X 5 X 4",
		numberPerBundle: 25,
		numberPerPallet: 2000
	},
	{
		description: "5 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "5 X 5 X 5 #3W",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "5 X 5 X 10",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "5 1/2 X 5 1/2 X 5 1/2",
		numberPerBundle: 25,
		numberPerPallet: 2000
	},
	{
		description: "6 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 4 X 2",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "6 X 4 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 4 X 3 1/2",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 4 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "6 X 4 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 5 X 4",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 5 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "6 X 6 X 2",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 6 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "6 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "6 X 6 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "6 X 6 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "6 X 6 X 5 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "6 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "6 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "6 X 6 X 10",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "6 X 6 X 36",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "6 X 6 X 40",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "6 X 6 X 48",
		numberPerBundle: 20,
		numberPerPallet: 500
	},
	{
		description: "6 5/8 X 4 1/8 X 10",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "6 5/8 X 6 5/8 X 12",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "6 3/4 X 6 3/4 X7 3/4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "7 X 5 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "7 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "7 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "7 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "7 X 7 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "7 X 7 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "7 X 7 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "7 X 7 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "7 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "7 X 7 X 7 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "7 X 7 X 8",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "7 X 7 X 10",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "7 X 7 X 12",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "8 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "8 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1875
	},
	{
		description: "8 X 4 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1875
	},
	{
		description: "8 X 5 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 5 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 5 X 5 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 6 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 6 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 6 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 8 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "8 X 8 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 8 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "8 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "8 X 8 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "8 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "8 X 8 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "8 X 8 X 8 250#",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "8 X 8 X 13 1/4",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "8 X 8 X 17",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "8 1/2 X 8 1/2 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "8 1/2 X 8 1/2 X 24",
		numberPerBundle: 25,
		numberPerPallet: 480
	},
	{
		description: "8 3/4 X 8 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "8 3/4 X 8 3/4 X 9 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 4 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "9 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "9 X 5 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "9 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "9 X 6 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "9 X 6 X 5 1/2",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "9 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "9 X 7 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "9 X 7 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "9 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 7 X 7 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "9 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "9 X 9 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "9 X 9 X 5",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 9 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 9 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "9 X 9 X 25",
		numberPerBundle: 15,
		numberPerPallet: 480
	},
	{
		description: "9 1/2 X 9 1/2 X 14 1/4",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "10 X 5 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 6 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "10 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 6 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "10 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "10 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1575
	},
	{
		description: "10 X 7 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 7 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "10 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 1575
	},
	{
		description: "10 X 8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "10 X 8 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "10 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "10 X 8 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1125
	},
	{
		description: "10 X 8 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 X 8 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 9 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "10 X 9 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 9 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 3",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 5",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 X 10 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 X 10 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 X 10 X 10 275#",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "10 X 10 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "10 X 10 X 15",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 1/2 X 7 3/4 X 6 7/16",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 1/2 X 10 1/2 X 5 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 1/2 X 10 1/2 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 1/2 X 10 1/2 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 1/2 X 10 1/2 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "10 1/2 X 10 1/2 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "10 1/2 X 10 1/2 X 27",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "11 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "11 X 6 X 5 1/2",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "11 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 X 8 1/2 X 5",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 X 11 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11X 11 X 11",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11 1/16 X 10 3/4 X 11 7/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11 1/4 X 8 5/8 X 4 1/8",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "11 1/4 X 8 3/4 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "11 1/4 X 8 3/4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 3 3/4",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "11 1/4 X 8 3/4 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 10",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 12",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 12 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 1/4 X 8 3/4 X 14 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11 1/4 X 10 1/8 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11 9/16 X 11 9/16 X 12 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "11 5/8 X 7 X 6 5/16",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "11 5/8 X 9 1/8 X 5 1/4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "11 3/4 X 8 1/2 X 9 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 3000
	},
	{
		description: "12 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 2500
	},
	{
		description: "12 X 4 X4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 2500
	},
	{
		description: "12 X 4 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 2400
	},
	{
		description: "12 X 5 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "12 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "12 X 6 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "12 X 6 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 7 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 7 X 5 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "12 X 8 X4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1350
	},
	{
		description: "12 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 8 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 X 8 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 X 8 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 8 3/4 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 8 3/4 X 10 1/4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "12 X 9 X 3 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "12 X 9 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "12 X 9 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 7",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 X 9 X 7 #3W",
		numberPerBundle: 25,
		numberPerPallet: 800
	},
	{
		description: "12 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 9 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 9 1/2 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 1/2 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 1/2 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 1/2 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 9 12/ X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 9 1/2 X 16",
		numberPerBundle: 25,
		numberPerPallet: 765
	},
	{
		description: "12 X 10 X 3",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 10 X 3 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 10 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 10 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 X 10 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 X 10 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 10 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 10 X 9 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 X 10 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 11 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 11 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "12 X 12 X 2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 12 X 2 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "12 X 12 X 3",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 12 X 3 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "12 X 12 X 4",
		numberPerBundle: 25,
		numberPerPallet: 625
	},
	{
		description: "12 X 12 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 625
	},
	{
		description: "12 X 12 X 5",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 5 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 12 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 X 12 X 7",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 7 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 9 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 11",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 11 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 12 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 12 275#",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 12 #3W 275#",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "12 X 12 X 15",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "1 2 X 12 X 17 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 X 12 X 20",
		numberPerBundle: 15,
		numberPerPallet: 540
	},
	{
		description: "12 X 12 X 24",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "12 X 12 X 25",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "12 X 12 X 27",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "12 X 12 X 30",
		numberPerBundle: 15,
		numberPerPallet: 405
	},
	{
		description: "12 X 12 X 36",
		numberPerBundle: 15,
		numberPerPallet: 405
	},
	{
		description: "12 X 12 X 40",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "12 X 12 X 48 W/ ARROW",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "12 X 12 X 56",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "12 1/4 X 9 1/8 X 5 7/8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 1/4 X 9 1/4 X 6 1/4",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "12 1/4 X 9 1/4 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 1/4 X 9 1/4 X 12 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 1/4 X 9 1/4 X 15",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 1/4 X 10 1/2 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 3/8 X 12 3/8 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 3/8 X 12 3/8 X 6 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 1/2 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 1/2 X 12 1/2 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "12 1/2 X 12 1/2 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 1/2 X 12 1/2 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 1/2 X 12 1/2 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 1/2 X 12 1/2 X 12 1/2 175#",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 3/4 X 6 3/8 X 13 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 3/4 X 9 5/16 X 8 11/ 16",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "12 3/4 X 12 3/4 X 13 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "12 7/8 X 8 9/16 X 5",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 8 5/8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 X 8 5/8 X 9 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 9 3/4 X 6 7/8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 9 X 3 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 9 X 4 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 9 X 5 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 9 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 9 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 9 X 11",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 10 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 10 1/4 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 11 X 5",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 11 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 X 13 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "13 X 13 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 13 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 13 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 13 X 13",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 X 13 X 13 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 3/8 X 13 3/8 X 7 9/16",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 3/8 X 13 3/8 X 12",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 1/2 X 7 1/2 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 1/2 X 8 1/2 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 1/2 X 9 1/4 X 5 7/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 1/2 X 12 1/2 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 1/2 X 13 1/2 X 9 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 5/8 X 6 3/4 X 7 3/4",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		description: "13 11/16 X 10 1/4 X 9 1/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 3/4 X 10 5/16 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "13 3/4 X 12 9/16 X10 3/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 7/8 X 11 1/4 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "13 15/16 X 9/16 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 3 X 3",
		numberPerBundle: 25,
		numberPerPallet: 1800
	},
	{
		description: "14 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "14 X 6 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "14 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "14 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "14 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 10 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "14 X 10 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "14 X 10 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X10 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 11 X 3",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 12 X 4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 12 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 12 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 12 X 9 1/8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "14 X 12 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 14 X 5",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 14 X 7",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 14 X 12 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 X 14 X 14",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 14 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 X 14 X 14 275#",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 14 275# D/W",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 18",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 20",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 24",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "14 X 14 X 30",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 36",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "14 X 14 X 40",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "14 1/8 X 8 5/8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "14 1/8 X 8 5/8 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 1/8 X 8 5/8 X 12",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 1/8 X 11 3/4 X 6 5/16",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "14 1/2 X 9 1/2 X 12",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 1/2 X 10 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "14 1/2 X 13 X 4 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "15 X 7 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "15 X 8 X 7",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "15 X 9 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 9 1/4 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "15 X 9 3/4 X 6 1/4",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "15 X 10 X 5 150#",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "15 X 10 X 14",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 11 X 7",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 11 X 11",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 12 X 4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "15 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 12 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 12 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 13 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 15 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 X 15 X 5",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "15 X 15 X 6",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "15 X 15 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "15 X 15 X 12",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "15 X 15 X 12 #3W",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "15 X 15 X 15",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "15 X 15 X 20",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "15 X 15 X 30",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "15 X 15 X 36",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "15 X 15 X 40",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "15 X 15 X 42",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "15 X 15 X56",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "15 1/8 X 8 3/4 X10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 1/8 X 11 1/4 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 1/2 X 14 1/2 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 3/4 X 10 3/4 X 6 3/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 3/4 X 10 3/4 X 9 1/2 175#",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "15 3/4 X 10 3/4 X 12 5/8 175#",
		numberPerBundle: 20,
		numberPerPallet: 560
	},
	{
		description: "15 3/4 X 10 3/4 X 15 5/8 175#",
		numberPerBundle: 20,
		numberPerPallet: 400
	},
	{
		description: "16 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "16 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "16 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "16 X 8 X 4",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "16 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "16 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "16 X 9 X 3",
		numberPerBundle: 15,
		numberPerPallet: 1200
	},
	{
		description: "16 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "16 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 10 X 10 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 11 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 11 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 12 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 12 X 4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 12 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "16 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 12 X 12",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 14 X 4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 14 X 5",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 14 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 14 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 14 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 14 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 16 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 X 16 X 6",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 16 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 X 16 X 8",
		numberPerBundle: 20,
		numberPerPallet: 560
	},
	{
		description: "16 X 16 X 8 #3W",
		numberPerBundle: 20,
		numberPerPallet: 560
	},
	{
		description: "16 X 16 X 9",
		numberPerBundle: 20,
		numberPerPallet: 560
	},
	{
		description: "16 X 16 X 10",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "16 X 16 X 10 #3W",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "16 X 16 X 11",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "16 X 16 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "16 X 16 X 12 #3W",
		numberPerBundle: 20,
		numberPerPallet: 400
	},
	{
		description: "16 X 16 X 16",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "16 X 16 X 16 #3W",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "16 X 16 X 16 275#",
		numberPerBundle: 10,
		numberPerPallet: 200
	},
	{
		description: "16 X 16 X 16 275# D/W",
		numberPerBundle: 10,
		numberPerPallet: 160
	},
	{
		description: "16 X 16 X 19",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "16 X 16 X 26",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "16 X 16 X 30",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "16 X 16 X 34",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "16 X 16 X 36",
		numberPerBundle: 10,
		numberPerPallet: 130
	},
	{
		description: "16 1/8 X 12 1/8 X 9 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 1/4 X 12 1/8 X 11 3/16",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 1/2 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "16 1/2 X 10 7/8 X 7 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "16 5/8 X 14 1/4 X 12 1/8",
		numberPerBundle: 20,
		numberPerPallet: 560
	},
	{
		description: "16 5/8 X 14 1/4 X 24",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "16 3/4 X 12 3/4 X 12 1/2",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "16 3/4 X 16 3/4 X 17 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "17 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "17 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "17 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "17 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "17 X 10 X 7",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 X 11 X 2 5/8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "17 X 13 X 13",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 X 14 X 5",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 X 14 X 9",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "17 X 15 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "17 X 15 X 11",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "17 X 17 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 X 17 X 17",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "17 X 17 X 21",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "17 1/8 X 11 7/8 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/8 X 8 3/4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 1/4 X 11 1/8 X 10 175#",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 1/4 X 11 1/8 X 11 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/8 X 11 1/4 #3W",
		numberPerBundle: 15,
		numberPerPallet: 500
	},
	{
		description: "17 1/4 X 11 1/4 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/4 X 9 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/4 X 14 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 11 1/2 X 11",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 1/4 X 13 X 4 7/8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/4 X 14 1/4 X 10 3/4",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "17 1/4 X 14 1/4 X 12 1/2",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "17 1/4 X 17 1/4 X 8",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "17 1/4 X 17 1/4 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "17 1/4 X 17 1/4 X 11",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "17 1/4 X 17 1/4 X 14 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "17 1/2 X 11 1/4 X 10 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/2 X 11 1/2 X 8 3/4 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "17 1/2 X 11 1/2 X 11 1/2 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/2 X 11 3/4 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/2 X 11 3/4 X 10 3/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/2 X 12 13/16 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 1/2 X 14 3/4 X 12 1/2",
		numberPerBundle: 25,
		numberPerPallet: 350
	},
	{
		description: "17 3/4 X11 1/2 X 12 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "17 3/4 X 14 1/2 X 8",
		numberPerBundle: 20,
		numberPerPallet: 320
	},
	{
		description: "18 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "18 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 625
	},
	{
		description: "18 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "18 X 12 X 5",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "18 X 12 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 12 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 750
	},
	{
		description: "18 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 450
	},
	{
		description: "18 X 12 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "18 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 12 X 12",
		numberPerBundle: 25,
		numberPerPallet: 560
	},
	{
		description: "18 X 12 X 12 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 12 X 12 275#",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "18 X 13 X 11",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		description: "18 X 13 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "18 X 14 X 4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "18 X 14 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 14 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 14 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 14 X 12",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 14 X 12 275#",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 16 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 16 X 6",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "18 X 16 X 8",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "18 X 16 X 10",
		numberPerBundle: 20,
		numberPerPallet: 320
	},
	{
		description: "18 X 16 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "18 X 18 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 18 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 X 18 X 8",
		numberPerBundle: 20,
		numberPerPallet: 320
	},
	{
		description: "18 X 18 X 8 #3W",
		numberPerBundle: 20,
		numberPerPallet: 320
	},
	{
		description: "18 X 18 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "18 X 18 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 12 #3W",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 15",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 16",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "18 X 18 X 18",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 18 #3W",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 18 275# S/W",
		numberPerBundle: 10,
		numberPerPallet: 200
	},
	{
		description: "18 X 18 X 18 275# D/W #3W",
		numberPerBundle: 10,
		numberPerPallet: 160
	},
	{
		description: "18 X 18 X 18 275# D/W",
		numberPerBundle: 10,
		numberPerPallet: 80
	},
	{
		description: "18 X 18 X 24",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 X 18 X 25",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 1/4 X 12 1/4 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 5/16 X 12 1/4 X 9 5/16",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "18 1/2 X 18 1/2 X 10 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 1/2 X 18 1/2 X 16 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 1/2 X 18 1/2 X 20 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 1/2 X 18 1/2 X 24",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "18 1/2 X 18 1/2 X 30 1/2",
		numberPerBundle: 10,
		numberPerPallet: 280
	},
	{
		description: "18 1/2 X 18 1/2 X 36",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "18 1/2 X 18 1/2 X 40",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "18 1/2 X 18 1/2 X 44",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "18 1/2 X 18 1/2 X 52",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "18 5/8 X 12 1/2 X 7 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "18 3/4 X 10 3/4 X 9 1/2",
		numberPerBundle: 25,
		numberPerPallet: 400
	},
	{
		description: "18 3/4 X 12 1/4 X 7",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "19 X 6 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "19 X 7 X 7",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "19 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "19 X 12 X 3 175#",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "19 X 12 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "19 X 12 1/2 X 13 3/4",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "19 X 14 1/4 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "19 X 14 1/4 X 23 7/8",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "19 X 15 X 6",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "19 X 16 X 19",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "19 1/2 X 14 11/16 X 7",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "19 3/4 X 14 3/4 X 10 1/8",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "19 3/4 X 15 X 13",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "19 3/4 X 15 X 18 250#",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1500
	},
	{
		description: "20 X 5 X 5",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "20 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "20 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "20 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 900
	},
	{
		description: "20 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "20 X 10 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 X 12 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "20 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "20 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "20 X 12 X 12",
		numberPerBundle: 20,
		numberPerPallet: 600
	},
	{
		description: "20 X 13 X 10",
		numberPerBundle: 15,
		numberPerPallet: 600
	},
	{
		description: "20 X 14 X 6",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 X 14 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 X 14 X 12",
		numberPerBundle: 20,
		numberPerPallet: 400
	},
	{
		description: "20 X 14 X 14",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 15 X 8 1/2",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "20 X 15 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 X 15 X 15",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 16 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 X 16 X 12",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "20 X 16 X 14 175#",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "20 X 16 X 16",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 16 X 22",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "20 X 18 X 22",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 4",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 6",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 7",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 10",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 11",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "20 X 20 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "20 X 20 X 13",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "20 X 20 X 14",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "20 X 20 X 15",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "20 X 20 X 16",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 18",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 20 275# S/W",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 20 275# D/W",
		numberPerBundle: 10,
		numberPerPallet: 100
	},
	{
		description: "20 X 20 X 24",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "20 X 20 X 25",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 28",
		numberPerBundle: 10,
		numberPerPallet: 160
	},
	{
		description: "20 X 20 X 31",
		numberPerBundle: 1,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 36",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 40",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "20 X 20 X 42",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 X 20 X 48",
		numberPerBundle: 10,
		numberPerPallet: 130
	},
	{
		description: "20 3/16 X 13 7/16 X 7 3/4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "20 1/2 X 13 1/2 X 10 250#",
		numberPerBundle: 15,
		numberPerPallet: 600
	},
	{
		description: "20 1/2 X 20 1/2 X 10 1/4",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "20 1/2 X 20 1/2 X 20 1/2",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "20 3/4 X 10 3/8 X 12 3/4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "21 X 11 X 11",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "21 X 12 X 12",
		numberPerBundle: 20,
		numberPerPallet: 320
	},
	{
		description: "21 X 13 X 13",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "21 X 14 X 14",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "21 X 15 X 16 250#",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "21 X 18 X 8 1/2",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "21 X 21 X 22",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "21 X 21 X 22 275#",
		numberPerBundle: 10,
		numberPerPallet: 120
	},
	{
		description: "21 3/8 X 15 5/8 X 6 3/8",
		numberPerBundle: 15,
		numberPerPallet: 540
	},
	{
		description: "21 3/8 X 15 5/8 X 9 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "21 3/8 X 15 5/8 X 12 5/8",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "21 3/8 X 15 5/8 X 15 3/4",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "21 3/8 X 15 5/8 X 18 5/8",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "21 3/8 X 15 5/8 X 24 3/8",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "21 3/8 X 15 5/8 X 30 5/8",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "21 3/8 X 16 5/8 X 12 1/8",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "21 3/8 X 16 5/8 X 24",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "22 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "22 X 10 X 4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "22 X 10 X 9",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "22 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "22 X 13 1/2 X 10 3/4",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "22 X 14 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "22 X 14 X 14",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "22 X 15 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "22 X 17 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "22 X 18 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "22 X 18 X 16",
		numberPerBundle: 10,
		numberPerPallet: 260
	},
	{
		description: "22 X 20 X 18 1/2",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "22 X 22 X 6",
		numberPerBundle: 10,
		numberPerPallet: 240
	},
	{
		description: "22 X 22 X 7",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "22 X 22 X 8",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "22 X 22 X 10",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "22 X 22 X12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "22 X 22 X 16",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "22 X 22 X 18",
		numberPerBundle: 15,
		numberPerPallet: 135
	},
	{
		description: "22 X 22 X 22",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "22 X 22 X 22 350#",
		numberPerBundle: 5,
		numberPerPallet: 75
	},
	{
		description: "22 X 22 X 24",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "22 X 22 X 30",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "22 X 22 X 36",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "22 X 22 X 52",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "22 1/4 X 12 1/2 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "22 1/4 X 19 5/8 X 12 1/4",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "22 1/2 X 22 1/2 X 13 175#",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "23 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "23 X 12 X 3 1/2 175#",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "23 X 13 X 3",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "23 X 14 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "23 X 16 X 19",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "23 1/2 X 14 X 4",
		numberPerBundle: 25,
		numberPerPallet: 450
	},
	{
		description: "23 1/2 X 14 X 6",
		numberPerBundle: 25,
		numberPerPallet: 450
	},
	{
		description: "23 1/2 X 16 X 14",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 4 X 4",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "24 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 1000
	},
	{
		description: "24 X 6 X 6 #3W",
		numberPerBundle: 25,
		numberPerPallet: 1200
	},
	{
		description: "24 X 8 X 6",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "24 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "24 X 8 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "24 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "24 X 10 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "24 X 10 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "24 X 10 X 8 #3W",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "24 X 10 X 10 175#",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 10 X 15",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "24 X 12 X 10",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 11",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 12 #3W",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 12 X 12 275#",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "24 X 13 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 13 X 13 275#",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 13 1/8 X 12 3/4",
		numberPerBundle: 15,
		numberPerPallet: 450
	},
	{
		description: "24 X 14 X 4",
		numberPerBundle: 25,
		numberPerPallet: 500
	},
	{
		description: "24 X 14 X 8",
		numberPerBundle: 20,
		numberPerPallet: 500
	},
	{
		description: "24 X 14 X 10",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "24 X 14 X 12",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 14 X 14 3/8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 14 X 18",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 14 X 20",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 15 1/2 X 10",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 2 5/8",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 4  175#",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 13",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 16 X 24",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 17 X12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 17 X 15",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 18 X 10",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "24 X 18 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 18 X 12 275#",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 18 X 18",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 20 X 9 1/4",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 20 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 24 X 6",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 24 X 7",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "24 X 24 X 12",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 16",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 18 1/2",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 24",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "24 X 24 X 24  350# D/W",
		numberPerBundle: 1,
		numberPerPallet: 80
	},
	{
		description: "24 X 24 X 30",
		numberPerBundle: 1,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 36",
		numberPerBundle: 1,
		numberPerPallet: 120
	},
	{
		description: "24 X 24 X 36 275#",
		numberPerBundle: 5,
		numberPerPallet: 80
	},
	{
		description: "24 X 24 X 48",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "24 X 24 X 48 350# D/W",
		numberPerBundle: 5,
		numberPerPallet: 50
	},
	{
		description: "24 1/2 X 24 1/2 X 42",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "25 X 12 X 10",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		description: "25 X 14 X 8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "25 X 14 X 16",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "25 X 15 X 12",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "25 X 17 X 15",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "25 X 19 X 10 1/2",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "25 X 25 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "25 1/8 X 8 3/8 X 17 1/2",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "25 1/2 X 13 X 13",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "25 1/2 X 14 X 8 1/8",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "25 1/2 X 25 1/2 X 25 1/2 350# D/W",
		numberPerBundle: 1,
		numberPerPallet: 80
	},
	{
		description: "25 5/8 X 25 1/2 X 25 1/4",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "26 X 10 X 10",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 12 X 12",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "26 X 13 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 13 3/4 X 13 3/4",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "26 X 15 X 3",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 15 X 5",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 15 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 15 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 16 X 10",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 16 X 14",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 16 X 19",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "26 X 17 X 5",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "26 X 18 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 19 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 21 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "26 X 26 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "27 X 14 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "27 X 15 X 6 1/2",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "27 X 16 X 2 5/8",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "27 X 19 X 9",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "27 X 23 X 8 1/2",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "27 X 27 X 27",
		numberPerBundle: 10,
		numberPerPallet: 120
	},
	{
		description: "27 X 27 X 27 275#",
		numberPerBundle: 1,
		numberPerPallet: 50
	},
	{
		description: "27 X 27 X 36",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "27 X 27 X 36 350# D/W",
		numberPerBundle: 5,
		numberPerPallet: 50
	},
	{
		description: "28 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "28 X 12 X 8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "28 X 14 X 28",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "28 X 16 X 5",
		numberPerBundle: 15,
		numberPerPallet: 405
	},
	{
		description: "28 X 16 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "28 X 16 X 9",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "28 X 16 X 12",
		numberPerBundle: 10,
		numberPerPallet: 260
	},
	{
		description: "28 X 16 X 14",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "28 X 17 X 4",
		numberPerBundle: 15,
		numberPerPallet: 405
	},
	{
		description: "28 X 21 X 20 350# D/W",
		numberPerBundle: 1,
		numberPerPallet: 100
	},
	{
		description: "28 X 28 X 6",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "28 X 28 X 12",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "28 X 28 X 20",
		numberPerBundle: 10,
		numberPerPallet: 120
	},
	{
		description: "28 X 28 X 28",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "28 X 28 X 28 350# D/W",
		numberPerBundle: 5,
		numberPerPallet: 90
	},
	{
		description: "28 X 28 X 40",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "29 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "29 X 10 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "29 X 13 X 13 275#",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "29 X 15 X 4",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "29 X 17 X 3",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "29 X 17 X 5",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "29 X 17 X 7",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "29 X 17 X 9",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "29 X 17 X 12",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "29 X 17 X 15",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "29 X 17 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "29 1/2 X 14 1/2 X 22 1/2",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "30 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "30 X 13 X 13",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "30 X 14 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "30 X 15 X 15",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "30 X 15 X 15 275#",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "30 X 20 X 9",
		numberPerBundle: 10,
		numberPerPallet: 280
	},
	{
		description: "30 X 24 X 10",
		numberPerBundle: 10,
		numberPerPallet: 130
	},
	{
		description: "30 X 24 X 12",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "30 X 24 X 24",
		numberPerBundle: 5,
		numberPerPallet: 125
	},
	{
		description: "30 X 30 X 30",
		numberPerBundle: 1,
		numberPerPallet: 130
	},
	{
		description: "30 X 30 X 30 350# D/W",
		numberPerBundle: 1,
		numberPerPallet: 50
	},
	{
		description: "30 1/2 X 10 1/4 X 10 1/4",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "30 1/2 X 18 1/2 X 18 1/2",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "31 X 16 X 9",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "31 X 16 X 14",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "31 X 17 X 8 1/2",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "31 X 24 X 8 1/2",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "31 X 24 X 19",
		numberPerBundle: 10,
		numberPerPallet: 100
	},
	{
		description: "31 3/8 X 21 3/8 X 12 5/8",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "31 3/8 X 21 3/8 X 21 3/4",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "32 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "32 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 375
	},
	{
		description: "32 X 10 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "32 X 13 X 6",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		description: "32 X 14 X5",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		description: "32 X 15 5/8 X 12 5/8",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "32 X 15 5/8 X 24 5/8",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "32 X 15 5/8 X 30 5/8",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "32 X 17 X 16",
		numberPerBundle: 10,
		numberPerPallet: 140
	},
	{
		description: "33 X 14 X 14",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "33 X 18 X 10",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "33 X 19 X 4 1/2",
		numberPerBundle: 20,
		numberPerPallet: 200
	},
	{
		description: "35 3/4 X 19 X 3",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "35 3/4 X 19 X 5",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "35 3/4 X 19 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "35 3/4 X 19 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 6 X 6",
		numberPerBundle: 25,
		numberPerPallet: 600
	},
	{
		description: "36 X 8 X 8",
		numberPerBundle: 25,
		numberPerPallet: 250
	},
	{
		description: "36 X 10 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 12 X 4",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "36 X 12 X 10",
		numberPerBundle: 15,
		numberPerPallet: 270
	},
	{
		description: "36 X 12 X 16",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "36 X 12 X 18",
		numberPerBundle: 10,
		numberPerPallet: 280
	},
	{
		description: "36 X 16 X 5",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 16 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 16 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 20 X 5",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 20 X 7",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 20 X 9",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "36 X 20 X 12",
		numberPerBundle: 10,
		numberPerPallet: 300
	},
	{
		description: "36 X 20 X 15",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "36 X 21 X 12",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "36 X 21 X 20",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "36 X 21 X 20 275#",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "36 X 24 X 24",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "36 X 36 X 36 275#",
		numberPerBundle: 5,
		numberPerPallet: 50
	},
	{
		description: "37 X 9 X 9",
		numberPerBundle: 25,
		numberPerPallet: 300
	},
	{
		description: "37 X 14 X 21",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "37 X 17 X 21",
		numberPerBundle: 10,
		numberPerPallet: 150
	},
	{
		description: "39 X 20 X 36",
		numberPerBundle: 5,
		numberPerPallet: 150
	},
	{
		description: "39 X 20 X 36 350 D/W",
		numberPerBundle: 5,
		numberPerPallet: 50
	},
	{
		description: "40 X 8 X 8",
		numberPerBundle: 20,
		numberPerPallet: 280
	},
	{
		description: "42 X 11 X 6",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "42 X 11 X 10",
		numberPerBundle: 15,
		numberPerPallet: 150
	},
	{
		description: "44 X 12 X 12",
		numberPerBundle: 15,
		numberPerPallet: 300
	},
	{
		description: "46 X 20 X 12",
		numberPerBundle: 10,
		numberPerPallet: 150
	}
];

const CorrugatedBoxes = () => {
	return (
		<MDBTable striped>

			{/*CORRUGATED BOX CODE*/}
			<MDBTableHead>
				<tr>
					<th>Code</th>
					<th>Description</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{corrugatedBoxesCode.map(box => (
					<tr key={box.code}>
						<td>{box.code}</td>
						<td>{box.description}</td>
					</tr>
				))}
			</MDBTableBody>
			{/*CORRUGATED BOXES*/}
			<MDBTableHead>
				<tr>
					<th>Description</th>
					<th>Number Per Bundle</th>
					<th>Number Per Pallet</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{corrugatedBoxes.map(box => (
					<tr key={box.description}>
						<td>{box.description}</td>
						<td>{box.numberPerBundle}</td>
						<td>{box.numberPerPallet}</td>
					</tr>
				))}
			</MDBTableBody>

		</MDBTable>
	);
};

export default CorrugatedBoxes;
