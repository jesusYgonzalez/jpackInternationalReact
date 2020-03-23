const corrugatedMailers = [
	{
		insideDim: "3 x 2 x 1″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 5250
	},
	{
		insideDim: "3 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 8750
	},
	{
		insideDim: "3 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "3 x 3 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "3 1/4 x 3 1/4 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 7000
	},
	{
		insideDim: "3 5/8 x 2 11/16 x 2 1/16″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 5600
	},
	{
		insideDim: "3 3/4 x 3 1/2 x 2 5/8″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "4 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 7000
	},
	{
		insideDim: "4 x 3 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 7000
	},
	{
		insideDim: "4 x 3 x 2″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "4 x 3 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "4 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "4 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "4 1/2 x 3 3/8 x 1 1/16″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 7000
	},
	{
		insideDim: "5 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 7000
	},
	{
		insideDim: "5 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "5 x 3 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "5 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "5 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "5 x 5 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "5 5/16 x 3 5/8 x 2 1/16″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "5 1/2 x 3 x 2 1/2″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "5 1/2 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "6 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 5250
	},
	{
		insideDim: "6 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "6 x 3 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "6 x 4 x 2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "6 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "6 x 4 1/2 x 2 1/4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "6 x 6 x 1″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "6 x 6 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "6 1/4 x 4 1/4 x 1 1/2″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "6 1/2 x 4 1/2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "6 1/2 x 4 1/2 x 4″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "6 5/8 x 4 1/8 x 3 5/8″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "7 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "7 x 3 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "7 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "7 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "7 x 4 x 4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1750
	},
	{
		insideDim: "7 x 6 1/2 x 1 7/8″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "7 1/2 x 3 1/4 x 2 1/4″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "7 1/2 x 3 3/4 x 3 1/4″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "7 1/2 x 4 1/4 x 1 1/16″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 4200
	},
	{
		insideDim: "7 1/2 x 5 1/2 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "7 1/2 x 7 1/2 x 2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "7 1/2 x 7 1/2 x 3 1/4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "8 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2800
	},
	{
		insideDim: "8 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2800
	},
	{
		insideDim: "8 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "8 x 4 x 4 “",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "8 x 5 x 1 1/4″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "8 x 5 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "8 x 6 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "8 1/8 x 4 3/4 x 1 3/16″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "8 1/4 x 8 1/4 x 1 3/4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "9 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 3500
	},
	{
		insideDim: "9 x 3 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "9 x 4 x 4″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "9 x 5 1/2 x 1 1/4″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "9 x 6 x 1″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 3150
	},
	{
		insideDim: "9 x 6 x 3 1/2″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "9 3/8 x 5 1/4 x 2 1/2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "9 3/8 x 7 1/4 x 2 1/2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "9 1/2 x 8 x 2 1/4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "10 x 2 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2800
	},
	{
		insideDim: "10 x 3 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2800
	},
	{
		insideDim: "10 x 3 x 3″",
		style: "ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "10 x 4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "10 x 4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "10 x 4 x 4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "10 X 10 X 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "10 5/8 x 3 5/8 x 2 1/16″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "11 x 6 1/2 x 2 3/4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "11 1/8 x 4 1/2 x 2 5/8″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "11 1/4 x 8 3/4 x 2 1/8″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "11 1/4 x 8 3/4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "11 1/4 x 8 3/4 x 4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "11 1/2 x 9 x 2 1/8″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "12 x 3 x 3″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "12 x 6 x 4″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "12 x 8 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "12 x 12 x 1 1/2″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "12 1/4 x 6 1/2 x 4 1/8″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "12 1/4 x 9 1/4 x 2 “",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "12 1/4 x 9 1/4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "12 1/4 x 9 1/4 x 4″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "12 1/2 x 5 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "13 x 10 x 2″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "13 1/2 x 13 1/2 x 2″",
		style: "ECCO/DF",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "14 x 3 x 3″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "14 1/4 x 8 3/4 x 2″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "15 x 11 x 2″",
		style: "RETT/DF",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "15 1/8 x 8 3/4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "15 1/8 x 8 3/4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "15 1/8 x 11 1/4 x 2″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 1400
	},
	{
		insideDim: "15 1/8 x 11 1/4 x 3″",
		style: "RETT",
		numberPerBundle: 50,
		numberPerPallet: 700
	},
	{
		insideDim: "15 7/8 x 3 3/4 x 2 5/8″",
		style: "ECCO/ST",
		numberPerBundle: 50,
		numberPerPallet: 2100
	},
	{
		insideDim: "16 x 12 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 25,
		numberPerPallet: 1400
	},
	{
		insideDim: "17 x 11 x 2 1/2″",
		style: "RETT/DF",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "18 x 12 x 1 1/2″",
		style: "ECCO/DF",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "19 x 12 x 2 1/2″",
		style: "RETT",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "19 x 12 x 3″",
		style: "RETT/DF",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "20 x 10 x 2 1/4″",
		style: "ECCO/DF",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "20 5/8 x 6 5/8 x 4 1/8″",
		style: "RETT/DF",
		numberPerBundle: 25,
		numberPerPallet: 700
	},
	{
		insideDim: "23 x 13 x 2 1/2″",
		style: "RETT/DF",
		numberPerBundle: 25,
		numberPerPallet: 350
	},
	{
		insideDim: "23 x 13 x 3 1/2″",
		style: "RETT/DF",
		numberPerBundle: 25,
		numberPerPallet: 350
	}
];

export default corrugatedMailers;
