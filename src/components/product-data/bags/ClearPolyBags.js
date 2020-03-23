import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const clearPolyBags = [
	{
		productNumber: "----------",
		durability: "-----------",
		sizeWxL: "1 MIL",
		weight: "-----------",
		bagPerCase: "-----------"
	},
	{
		productNumber: "BG-C101601",
		durability: "1 Mil",
		sizeWxL: "10 x 16",
		weight: 10.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C131701",
		durability: "1 Mil",
		sizeWxL: "13 x 17",
		weight: 14.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C151801",
		durability: "1 Mil",
		sizeWxL: "15 x 18",
		weight: 18,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C172101",
		durability: "1 Mil",
		sizeWxL: "17 x 21",
		weight: 23.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C212401",
		durability: "1 Mil",
		sizeWxL: "21 x 24",
		weight: 33.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "-----------",
		durability: "-----------",
		sizeWxL: "1.5 MIL",
		weight: "-----------",
		bagPerCase: "-----------"
	},
	{
		productNumber: "BG-C020201F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 2",
		weight: 0.4,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020301F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 3",
		weight: 0.6,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020401F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 4",
		weight: 0.8,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020501F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 5",
		weight: 1,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020601F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 6",
		weight: 1.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020801F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 8",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C021001F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 10",
		weight: 2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C021201F",
		durability: "1.5 Mil",
		sizeWxL: "2 x 12",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030301F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 3",
		weight: 0.9,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C030401F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 4",
		weight: 1.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030501F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 5",
		weight: 1.5,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030601F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 6",
		weight: 1.8,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030801F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 8",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C031001F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 10",
		weight: 3,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C031201F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 12",
		weight: 3.6,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C031501F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 15",
		weight: 4.5,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C031801F",
		durability: "1.5 Mil",
		sizeWxL: "3 x 18",
		weight: 5.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C040401F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 4",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040501F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 5",
		weight: 2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040601F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 6",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040801F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 8",
		weight: 3.2,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C041001F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 10",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041201F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 12",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041501F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 15",
		weight: 6,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041801F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 18",
		weight: 7.2,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C042401F",
		durability: "1.5 Mil",
		sizeWxL: "4 x 24",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050501F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 5",
		weight: 2.5,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C050601F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 6",
		weight: 3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C050701F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 7",
		weight: 3.5,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C050801F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 8",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C051001F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 10",
		weight: 5,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C051201F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 12",
		weight: 6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051501F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 15",
		weight: 7.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052001F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 20",
		weight: 10,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052401F",
		durability: "1.5 Mil",
		sizeWxL: "5 x 24",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060601F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 6",
		weight: 3.6,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C060801F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 8",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C060901F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 9",
		weight: 5.4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C061001F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 10",
		weight: 6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061201F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 12",
		weight: 7.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061501F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 15",
		weight: 9,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061801F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 18",
		weight: 10.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C062001F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 20",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C062401F",
		durability: "1.5 Mil",
		sizeWxL: "6 x 24",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C070901F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 9",
		weight: 6.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071001F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 10",
		weight: 7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071201F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 12",
		weight: 8.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071501F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 15",
		weight: 10.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071801F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 18",
		weight: 12.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C072401F",
		durability: "1.5 Mil",
		sizeWxL: "7 x 24",
		weight: 16.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C080801F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 8",
		weight: 6.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081001F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 10",
		weight: 8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081201F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 12",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081501F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 15",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081801F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 18",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C082001F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 20",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C082401F",
		durability: "1.5 Mil",
		sizeWxL: "8 x 24",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091201F",
		durability: "1.5 Mil",
		sizeWxL: "9 x 12",
		weight: 10.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091501F",
		durability: "1.5 Mil",
		sizeWxL: "9 x 15",
		weight: 13.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091801F",
		durability: "1.5 Mil",
		sizeWxL: "9 x 18",
		weight: 16.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C092001F",
		durability: "1.5 Mil",
		sizeWxL: "9 x 20",
		weight: 18,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C092401F",
		durability: "1.5 Mil",
		sizeWxL: "9 x 24",
		weight: 21.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101001F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 10",
		weight: 10,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101201F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 12",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101501F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 15",
		weight: 15,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101601F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 16",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101801F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 18",
		weight: 18,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C102001F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 20",
		weight: 20,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C102401F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 24",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C103001F",
		durability: "1.5 Mil",
		sizeWxL: "10 x 30",
		weight: 30,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C111501F",
		durability: "1.5 Mil",
		sizeWxL: "11 x 15",
		weight: 16.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C111801F",
		durability: "1.5 Mil",
		sizeWxL: "11 x 18",
		weight: 19.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121201F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 12",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121301F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 13",
		weight: 15.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121401F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 14",
		weight: 16.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121601F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 16",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121801F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 18",
		weight: 21.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122001F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 20",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122101F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 21",
		weight: 25.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122401F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 24",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C123001F",
		durability: "1.5 Mil",
		sizeWxL: "12 x 30",
		weight: 36,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C131701F",
		durability: "1.5 Mil",
		sizeWxL: "13 x 17",
		weight: 22.1,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C132401F",
		durability: "1.5 Mil",
		sizeWxL: "13 x 24",
		weight: 31.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C141601F",
		durability: "1.5 Mil",
		sizeWxL: "14 x 16",
		weight: 22.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C142001F",
		durability: "1.5 Mil",
		sizeWxL: "14 x 20",
		weight: 28,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C142401F",
		durability: "1.5 Mil",
		sizeWxL: "14 x 24",
		weight: 33.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C143001F",
		durability: "1.5 Mil",
		sizeWxL: "14 x 30",
		weight: 42,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C143601F",
		durability: "1.5 Mil",
		sizeWxL: "14 x 36",
		weight: 50.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C151801F",
		durability: "1.5 Mil",
		sizeWxL: "15 x 18",
		weight: 27,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C152401F",
		durability: "1.5 Mil",
		sizeWxL: "15 x 24",
		weight: 36,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C153001F",
		durability: "1.5 Mil",
		sizeWxL: "15 x 30",
		weight: 45,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C153601F",
		durability: "1.5 Mil",
		sizeWxL: "15 x 36",
		weight: 54,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C161801F",
		durability: "1.5 Mil",
		sizeWxL: "16 x 18",
		weight: 28.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162001F",
		durability: "1.5 Mil",
		sizeWxL: "16 x 20",
		weight: 32,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162401F",
		durability: "1.5 Mil",
		sizeWxL: "16 x 24",
		weight: 38.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C163001F",
		durability: "1.5 Mil",
		sizeWxL: "16 x 30",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C163601F",
		durability: "1.5 Mil",
		sizeWxL: "16 x 36",
		weight: 57.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C172101F",
		durability: "1.5 Mil",
		sizeWxL: "17 x 21",
		weight: 35.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C182001F",
		durability: "1.5 Mil",
		sizeWxL: "18 x 20",
		weight: 36,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C182401F",
		durability: "1.5 Mil",
		sizeWxL: "18 x 24",
		weight: 43.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C183001F",
		durability: "1.5 Mil",
		sizeWxL: "18 x 30",
		weight: 54,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C183601F",
		durability: "1.5 Mil",
		sizeWxL: "18 x 36",
		weight: 64.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C202001F",
		durability: "1.5 Mil",
		sizeWxL: "20 x 20",
		weight: 40,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C202401F",
		durability: "1.5 Mil",
		sizeWxL: "20 x 24",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C203001F",
		durability: "1.5 Mil",
		sizeWxL: "20 x 30",
		weight: 60,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C203601F",
		durability: "1.5 Mil",
		sizeWxL: "20 x 36",
		weight: 72,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C204001F",
		durability: "1.5 Mil",
		sizeWxL: "20 x 40",
		weight: 80,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C223601F",
		durability: "1.5 Mil",
		sizeWxL: "22 x 36",
		weight: 79.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C242401F",
		durability: "1.5 Mil",
		sizeWxL: "24 x 24",
		weight: 57.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C242601F",
		durability: "1.5 Mil",
		sizeWxL: "24 x 26",
		weight: 62.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C243001F",
		durability: "1.5 Mil",
		sizeWxL: "24 x 30",
		weight: 72,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C243801F",
		durability: "1.5 Mil",
		sizeWxL: "24 x 38",
		weight: 91.3,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C244201F",
		durability: "1.5 Mil",
		sizeWxL: "24 x 42",
		weight: 101,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C285001F",
		durability: "1.5 Mil",
		sizeWxL: "28 x 50",
		weight: 140.2,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C303001F",
		durability: "1.5 Mil",
		sizeWxL: "30 x 30",
		weight: 90.1,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C303601F",
		durability: "1.5 Mil",
		sizeWxL: "30 x 36",
		weight: 108.2,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C304801F",
		durability: "1.5 Mil",
		sizeWxL: "30 x 48",
		weight: 144.2,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C323201F",
		durability: "1.5 Mil",
		sizeWxL: "32 x 32",
		weight: 102.4,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C325001F",
		durability: "1.5 Mil",
		sizeWxL: "32 x 50",
		weight: 160.3,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C364801F",
		durability: "1.5 Mil",
		sizeWxL: "36 x 48",
		weight: 173.1,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C366001F",
		durability: "1.5 Mil",
		sizeWxL: "36 x 60",
		weight: 216.4,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C385401F",
		durability: "1.5 Mil",
		sizeWxL: "38 x 54",
		weight: 205.6,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C386401F",
		durability: "1.5 Mil",
		sizeWxL: "38 x 64",
		weight: 243.2,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C404801F",
		durability: "1.5 Mil",
		sizeWxL: "40 x 48",
		weight: 192.3,
		bagPerCase: "200"
	},
	{
		productNumber: "------------",
		durability: "-----------",
		sizeWxL: "2 MIL",
		weight: "-----------",
		bagPerCase: "-----------"
	},
	{
		productNumber: "BG-C010202",
		durability: "2 Mil",
		sizeWxL: "1 x 2",
		weight: 0.3,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020202",
		durability: "2 Mil",
		sizeWxL: "2 x 2",
		weight: 0.5,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020302",
		durability: "2 Mil",
		sizeWxL: "2 x 3",
		weight: 0.8,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020402",
		durability: "2 Mil",
		sizeWxL: "2 x 4",
		weight: 1.1,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020502",
		durability: "2 Mil",
		sizeWxL: "2 x 5",
		weight: 1.3,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020602",
		durability: "2 Mil",
		sizeWxL: "2 x 6",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020802",
		durability: "2 Mil",
		sizeWxL: "2 x 8",
		weight: 2.1,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C021002",
		durability: "2 Mil",
		sizeWxL: "2 x 10",
		weight: 2.7,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C021202",
		durability: "2 Mil",
		sizeWxL: "2 x 12",
		weight: 3.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030302",
		durability: "2 Mil",
		sizeWxL: "3 x 3",
		weight: 1.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030402",
		durability: "2 Mil",
		sizeWxL: "3 x 4",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030502",
		durability: "2 Mil",
		sizeWxL: "3 x 5",
		weight: 2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030602",
		durability: "2 Mil",
		sizeWxL: "3 x 6",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030802",
		durability: "2 Mil",
		sizeWxL: "3 x 8",
		weight: 3.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C031002",
		durability: "2 Mil",
		sizeWxL: "3 x 10",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C031202",
		durability: "2 Mil",
		sizeWxL: "3 x 12",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C031802",
		durability: "2 Mil",
		sizeWxL: "3 x 18",
		weight: 7.2,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040402",
		durability: "2 Mil",
		sizeWxL: "4 x 4",
		weight: 2.1,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040502",
		durability: "2 Mil",
		sizeWxL: "4 x 5",
		weight: 2.7,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040602",
		durability: "2 Mil",
		sizeWxL: "4 x 6",
		weight: 3.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C040802",
		durability: "2 Mil",
		sizeWxL: "4 x 8",
		weight: 4.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041002",
		durability: "2 Mil",
		sizeWxL: "4 x 10",
		weight: 5.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041202",
		durability: "2 Mil",
		sizeWxL: "4 x 12",
		weight: 6.4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041602",
		durability: "2 Mil",
		sizeWxL: "4 x 16",
		weight: 8.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C041802",
		durability: "2 Mil",
		sizeWxL: "4 x 18",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C042402",
		durability: "2 Mil",
		sizeWxL: "4 x 24",
		weight: 12.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050502",
		durability: "2 Mil",
		sizeWxL: "5 x 5",
		weight: 3.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C050602",
		durability: "2 Mil",
		sizeWxL: "5 x 6",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C050702",
		durability: "2 Mil",
		sizeWxL: "5 x 7",
		weight: 4.7,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C050802",
		durability: "2 Mil",
		sizeWxL: "5 x 8",
		weight: 5.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C051002",
		durability: "2 Mil",
		sizeWxL: "5 x 10",
		weight: 6.7,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C051202",
		durability: "2 Mil",
		sizeWxL: "5 x 12",
		weight: 8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051502",
		durability: "2 Mil",
		sizeWxL: "5 x 15",
		weight: 10,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052002",
		durability: "2 Mil",
		sizeWxL: "5 x 20",
		weight: 13.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052402",
		durability: "2 Mil",
		sizeWxL: "5 x 24",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060602",
		durability: "2 Mil",
		sizeWxL: "6 x 6",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C060802",
		durability: "2 Mil",
		sizeWxL: "6 x 8",
		weight: 6.4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C060902",
		durability: "2 Mil",
		sizeWxL: "6 x 9",
		weight: 7.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061002",
		durability: "2 Mil",
		sizeWxL: "6 x 10",
		weight: 8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061202",
		durability: "2 Mil",
		sizeWxL: "6 x 12",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061502",
		durability: "2 Mil",
		sizeWxL: "6 x 15",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061802",
		durability: "2 Mil",
		sizeWxL: "6 x 18",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C062002",
		durability: "2 Mil",
		sizeWxL: "6 x 20",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C062402",
		durability: "2 Mil",
		sizeWxL: "6 x 24",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C070902",
		durability: "2 Mil",
		sizeWxL: "7 x 9",
		weight: 8.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071002",
		durability: "2 Mil",
		sizeWxL: "7 x 10",
		weight: 9.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071202",
		durability: "2 Mil",
		sizeWxL: "7 x 12",
		weight: 11.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071502",
		durability: "2 Mil",
		sizeWxL: "7 x 15",
		weight: 14,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071802",
		durability: "2 Mil",
		sizeWxL: "7 x 18",
		weight: 16.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C072402",
		durability: "2 Mil",
		sizeWxL: "7 x 24",
		weight: 22.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C080802",
		durability: "2 Mil",
		sizeWxL: "8 x 8",
		weight: 8.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081002",
		durability: "2 Mil",
		sizeWxL: "8 x 10",
		weight: 10.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081202",
		durability: "2 Mil",
		sizeWxL: "8 x 12",
		weight: 12.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081502",
		durability: "2 Mil",
		sizeWxL: "8 x 15",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081802F",
		durability: "2 Mil",
		sizeWxL: "8 x 18",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C082402",
		durability: "2 Mil",
		sizeWxL: "8 x 24",
		weight: 25.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091202",
		durability: "2 Mil",
		sizeWxL: "9 x 12",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091502",
		durability: "2 Mil",
		sizeWxL: "9 x 15",
		weight: 18,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091802",
		durability: "2 Mil",
		sizeWxL: "9 x 18",
		weight: 21.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C092402",
		durability: "2 Mil",
		sizeWxL: "9 x 24",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101002",
		durability: "2 Mil",
		sizeWxL: "10 x 10",
		weight: 13.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101202",
		durability: "2 Mil",
		sizeWxL: "10 x 12",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101502",
		durability: "2 Mil",
		sizeWxL: "10 x 15",
		weight: 20,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101602",
		durability: "2 Mil",
		sizeWxL: "10 x 16",
		weight: 21.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101802",
		durability: "2 Mil",
		sizeWxL: "10 x 18",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C102002",
		durability: "2 Mil",
		sizeWxL: "10 x 20",
		weight: 26.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C102402",
		durability: "2 Mil",
		sizeWxL: "10 x 24",
		weight: 32.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C103002",
		durability: "2 Mil",
		sizeWxL: "10 x 30",
		weight: 40,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C121202",
		durability: "2 Mil",
		sizeWxL: "12 x 12",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121602",
		durability: "2 Mil",
		sizeWxL: "12 x 16",
		weight: 25.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121802",
		durability: "2 Mil",
		sizeWxL: "12 x 18",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122002",
		durability: "2 Mil",
		sizeWxL: "12 x 20",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122402",
		durability: "2 Mil",
		sizeWxL: "12 x 24",
		weight: 38.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C123002",
		durability: "2 Mil",
		sizeWxL: "12 x 30",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C132402",
		durability: "2 Mil",
		sizeWxL: "13 x 24",
		weight: 41.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C141602",
		durability: "2 Mil",
		sizeWxL: "14 x 16",
		weight: 29.9,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C142002",
		durability: "2 Mil",
		sizeWxL: "14 x 20",
		weight: 37.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C142402",
		durability: "2 Mil",
		sizeWxL: "14 x 24",
		weight: 44.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C152402",
		durability: "2 Mil",
		sizeWxL: "15 x 24",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C153002",
		durability: "2 Mil",
		sizeWxL: "15 x 30",
		weight: 60,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C153602",
		durability: "2 Mil",
		sizeWxL: "15 x 36",
		weight: 72,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C161802",
		durability: "2 Mil",
		sizeWxL: "16 x 18",
		weight: 38.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162002",
		durability: "2 Mil",
		sizeWxL: "16 x 20",
		weight: 42.7,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162402",
		durability: "2 Mil",
		sizeWxL: "16 x 24",
		weight: 51.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C163002",
		durability: "2 Mil",
		sizeWxL: "16 x 30",
		weight: 64,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C163602",
		durability: "2 Mil",
		sizeWxL: "16 x 36",
		weight: 76.8,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C182002",
		durability: "2 Mil",
		sizeWxL: "18 x 20",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C182402",
		durability: "2 Mil",
		sizeWxL: "18 x 24",
		weight: 57.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C183002",
		durability: "2 Mil",
		sizeWxL: "18 x 30",
		weight: 72,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C183602",
		durability: "2 Mil",
		sizeWxL: "18 x 36",
		weight: 86.4,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C202002",
		durability: "2 Mil",
		sizeWxL: "20 x 20",
		weight: 53.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C202402",
		durability: "2 Mil",
		sizeWxL: "20 x 24",
		weight: 64,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C203002",
		durability: "2 Mil",
		sizeWxL: "20 x 30",
		weight: 80,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C203602",
		durability: "2 Mil",
		sizeWxL: "20 x 36",
		weight: 96,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C223602",
		durability: "2 Mil",
		sizeWxL: "22 x 36",
		weight: 105.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C242402",
		durability: "2 Mil",
		sizeWxL: "24 x 24",
		weight: 76.8,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C243002",
		durability: "2 Mil",
		sizeWxL: "24 x 30",
		weight: 96.1,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C243802",
		durability: "2 Mil",
		sizeWxL: "24 x 38",
		weight: 121.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C244202",
		durability: "2 Mil",
		sizeWxL: "24 x 42",
		weight: 134.5,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C244802",
		durability: "2 Mil",
		sizeWxL: "24 x 48",
		weight: 153.7,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C263002",
		durability: "2 Mil",
		sizeWxL: "26 x 30",
		weight: 104,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C284602",
		durability: "2 Mil",
		sizeWxL: "28 x 46",
		weight: 171.7,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C285002",
		durability: "2 Mil",
		sizeWxL: "28 x 50",
		weight: 186.8,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C303002",
		durability: "2 Mil",
		sizeWxL: "30 x 30",
		weight: 120,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C303602",
		durability: "2 Mil",
		sizeWxL: "30 x 36",
		weight: 144,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C304002",
		durability: "2 Mil",
		sizeWxL: "30 x 40",
		weight: 160,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C323202",
		durability: "2 Mil",
		sizeWxL: "32 x 32",
		weight: 136.8,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C366002",
		durability: "2 Mil",
		sizeWxL: "36 x 60",
		weight: 288.5,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C386402",
		durability: "2 Mil",
		sizeWxL: "38 x 64",
		weight: 324.4,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C444802",
		durability: "2 Mil",
		sizeWxL: "44 x 48",
		weight: 281.6,
		bagPerCase: "100"
	},
	{
		productNumber: "---------",
		durability: "-----------",
		sizeWxL: "3 MIL",
		weight: "-----------",
		bagPerCase: "-----------"
	},
	{
		productNumber: "BG-C020303",
		durability: "3 Mil",
		sizeWxL: "2 x 3",
		weight: 1.2,
		bagPerCase: "10,000"
	},
	{
		productNumber: "BG-C020403",
		durability: "3 Mil",
		sizeWxL: "2 x 4",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020803",
		durability: "3 Mil",
		sizeWxL: "2 x 8",
		weight: 3.2,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C030303",
		durability: "3 Mil",
		sizeWxL: "3 x 3",
		weight: 1.8,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030403",
		durability: "3 Mil",
		sizeWxL: "3 x 4",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030503",
		durability: "3 Mil",
		sizeWxL: "3 x 5",
		weight: 3,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C030603",
		durability: "3 Mil",
		sizeWxL: "3 x 6",
		weight: 3.6,
		bagPerCase: "3000"
	},
	{
		productNumber: "BG-C030803",
		durability: "3 Mil",
		sizeWxL: "3 x 8",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C031203",
		durability: "3 Mil",
		sizeWxL: "3 x 12",
		weight: 7.2,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040503",
		durability: "3 Mil",
		sizeWxL: "4 x 5",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040603",
		durability: "3 Mil",
		sizeWxL: "4 x 6",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040803",
		durability: "3 Mil",
		sizeWxL: "4 x 8",
		weight: 6.4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041203",
		durability: "3 Mil",
		sizeWxL: "4 x 12",
		weight: 9.6,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C041803",
		durability: "3 Mil",
		sizeWxL: "4 x 18",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050503",
		durability: "3 Mil",
		sizeWxL: "5 x 5",
		weight: 5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050703",
		durability: "3 Mil",
		sizeWxL: "5 x 7",
		weight: 7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050803",
		durability: "3 Mil",
		sizeWxL: "5 x 8",
		weight: 8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051003",
		durability: "3 Mil",
		sizeWxL: "5 x 10",
		weight: 10,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051203",
		durability: "3 Mil",
		sizeWxL: "5 x 12",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060603",
		durability: "3 Mil",
		sizeWxL: "6 x 6",
		weight: 7.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060803",
		durability: "3 Mil",
		sizeWxL: "6 x 8",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060903",
		durability: "3 Mil",
		sizeWxL: "6 x 9",
		weight: 10.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061003",
		durability: "3 Mil",
		sizeWxL: "6 x 10",
		weight: 12,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061203",
		durability: "3 Mil",
		sizeWxL: "6 x 12",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061803",
		durability: "3 Mil",
		sizeWxL: "6 x 18",
		weight: 21.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071003",
		durability: "3 Mil",
		sizeWxL: "7 x 10",
		weight: 14,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071203",
		durability: "3 Mil",
		sizeWxL: "7 x 12",
		weight: 16.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C072403",
		durability: "3 Mil",
		sizeWxL: "7 x 24",
		weight: 33.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081003",
		durability: "3 Mil",
		sizeWxL: "8 x 10",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081203",
		durability: "3 Mil",
		sizeWxL: "8 x 12",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081503",
		durability: "3 Mil",
		sizeWxL: "8 x 15",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C082003",
		durability: "3 Mil",
		sizeWxL: "8 x 20",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091203",
		durability: "3 Mil",
		sizeWxL: "9 x 12",
		weight: 21.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091803",
		durability: "3 Mil",
		sizeWxL: "9 x 18",
		weight: 32.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101203",
		durability: "3 Mil",
		sizeWxL: "10 x 12",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101603",
		durability: "3 Mil",
		sizeWxL: "10 x 16",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121203",
		durability: "3 Mil",
		sizeWxL: "12 x 12",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121603",
		durability: "3 Mil",
		sizeWxL: "12 x 16",
		weight: 38.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121803",
		durability: "3 Mil",
		sizeWxL: "12 x 18",
		weight: 43.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C122003",
		durability: "3 Mil",
		sizeWxL: "12 x 20",
		weight: 48,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C131303",
		durability: "3 Mil",
		sizeWxL: "13 x 13",
		weight: 33.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C142003",
		durability: "3 Mil",
		sizeWxL: "14 x 20",
		weight: 56,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C161803",
		durability: "3 Mil",
		sizeWxL: "16 x 18",
		weight: 57.7,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162403",
		durability: "3 Mil",
		sizeWxL: "16 x 24",
		weight: 76.9,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C182403",
		durability: "3 Mil",
		sizeWxL: "18 x 24",
		weight: 86.5,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C203003",
		durability: "3 Mil",
		sizeWxL: "20 x 30",
		weight: 120,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C243003",
		durability: "3 Mil",
		sizeWxL: "24 x 30",
		weight: 144.2,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C243603",
		durability: "3 Mil",
		sizeWxL: "24 x 36",
		weight: 173.1,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C365403",
		durability: "3 Mil",
		sizeWxL: "36 x 54",
		weight: 392.1,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C386403",
		durability: "3 Mil",
		sizeWxL: "38 x 64",
		weight: 486.4,
		bagPerCase: "100"
	},
	{
		productNumber: "-------------",
		durability: "-----------",
		sizeWxL: "4 MIL",
		weight: "-----------",
		bagPerCase: "-----------"
	},
	{
		productNumber: "BG-C020304",
		durability: "4 Mil",
		sizeWxL: "2 x 3",
		weight: 1.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020404",
		durability: "4 Mil",
		sizeWxL: "2 x 4",
		weight: 2.1,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020504",
		durability: "4 Mil",
		sizeWxL: "2 x 5",
		weight: 2.6,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020604",
		durability: "4 Mil",
		sizeWxL: "2 x 6",
		weight: 3.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C020704",
		durability: "4 Mil",
		sizeWxL: "2 x 7",
		weight: 3.7,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C020804",
		durability: "4 Mil",
		sizeWxL: "2 x 8",
		weight: 4.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C020904",
		durability: "4 Mil",
		sizeWxL: "2 x 9",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C021204",
		durability: "4 Mil",
		sizeWxL: "2 x 12",
		weight: 6.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C030304",
		durability: "4 Mil",
		sizeWxL: "3 x 3",
		weight: 2.4,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030404",
		durability: "4 Mil",
		sizeWxL: "3 x 4",
		weight: 3.2,
		bagPerCase: "5000"
	},
	{
		productNumber: "BG-C030504",
		durability: "4 Mil",
		sizeWxL: "3 x 5",
		weight: 4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C030604",
		durability: "4 Mil",
		sizeWxL: "3 x 6",
		weight: 4.8,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C030804",
		durability: "4 Mil",
		sizeWxL: "3 x 8",
		weight: 6.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C031004",
		durability: "4 Mil",
		sizeWxL: "3 x 10",
		weight: 8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C031204",
		durability: "4 Mil",
		sizeWxL: "3 x 12",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C040404",
		durability: "4 Mil",
		sizeWxL: "4 x 4",
		weight: 4.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040504",
		durability: "4 Mil",
		sizeWxL: "4 x 5",
		weight: 5.3,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040604",
		durability: "4 Mil",
		sizeWxL: "4 x 6",
		weight: 6.4,
		bagPerCase: "2000"
	},
	{
		productNumber: "BG-C040804",
		durability: "4 Mil",
		sizeWxL: "4 x 8",
		weight: 8.5,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C041004",
		durability: "4 Mil",
		sizeWxL: "4 x 10",
		weight: 10.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C041204",
		durability: "4 Mil",
		sizeWxL: "4 x 12",
		weight: 12.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C041504",
		durability: "4 Mil",
		sizeWxL: "4 x 15",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C041804",
		durability: "4 Mil",
		sizeWxL: "4 x 18",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C042404",
		durability: "4 Mil",
		sizeWxL: "4 x 24",
		weight: 25.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050504",
		durability: "4 Mil",
		sizeWxL: "5 x 5",
		weight: 6.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050704",
		durability: "4 Mil",
		sizeWxL: "5 x 7",
		weight: 9.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C050804",
		durability: "4 Mil",
		sizeWxL: "5 x 8",
		weight: 10.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051004",
		durability: "4 Mil",
		sizeWxL: "5 x 10",
		weight: 13.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051204",
		durability: "4 Mil",
		sizeWxL: "5 x 12",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C051504",
		durability: "4 Mil",
		sizeWxL: "5 x 15",
		weight: 20,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052004",
		durability: "4 Mil",
		sizeWxL: "5 x 20",
		weight: 26.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C052404",
		durability: "4 Mil",
		sizeWxL: "5 x 24",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060604",
		durability: "4 Mil",
		sizeWxL: "6 x 6",
		weight: 9.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060804",
		durability: "4 Mil",
		sizeWxL: "6 x 8",
		weight: 12.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C060904",
		durability: "4 Mil",
		sizeWxL: "6 x 9",
		weight: 14.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061004",
		durability: "4 Mil",
		sizeWxL: "6 x 10",
		weight: 16,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061204",
		durability: "4 Mil",
		sizeWxL: "6 x 12",
		weight: 19.2,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061504",
		durability: "4 Mil",
		sizeWxL: "6 x 15",
		weight: 24,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C061804",
		durability: "4 Mil",
		sizeWxL: "6 x 18",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C062004",
		durability: "4 Mil",
		sizeWxL: "6 x 20",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C070904",
		durability: "4 Mil",
		sizeWxL: "7 x 9",
		weight: 16.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071004",
		durability: "4 Mil",
		sizeWxL: "7 x 10",
		weight: 18.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071204",
		durability: "4 Mil",
		sizeWxL: "7 x 12",
		weight: 22.4,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071504",
		durability: "4 Mil",
		sizeWxL: "7 x 15",
		weight: 28,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C071804",
		durability: "4 Mil",
		sizeWxL: "7 x 18",
		weight: 33.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C072404",
		durability: "4 Mil",
		sizeWxL: "7 x 24",
		weight: 44.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C080804",
		durability: "4 Mil",
		sizeWxL: "8 x 8",
		weight: 17.1,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081004",
		durability: "4 Mil",
		sizeWxL: "8 x 10",
		weight: 21.3,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081204",
		durability: "4 Mil",
		sizeWxL: "8 x 12",
		weight: 25.6,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081504",
		durability: "4 Mil",
		sizeWxL: "8 x 15",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C081804",
		durability: "4 Mil",
		sizeWxL: "8 x 18",
		weight: 38.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C082004",
		durability: "4 Mil",
		sizeWxL: "8 x 20",
		weight: 42.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C082404",
		durability: "4 Mil",
		sizeWxL: "8 x 24",
		weight: 51.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C091204",
		durability: "4 Mil",
		sizeWxL: "9 x 12",
		weight: 28.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091504",
		durability: "4 Mil",
		sizeWxL: "9 x 15",
		weight: 36,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C091804",
		durability: "4 Mil",
		sizeWxL: "9 x 18",
		weight: 43.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C092004",
		durability: "4 Mil",
		sizeWxL: "9 x 20",
		weight: 48,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C092404",
		durability: "4 Mil",
		sizeWxL: "9 x 24",
		weight: 57.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C101204",
		durability: "4 Mil",
		sizeWxL: "10 x 12",
		weight: 32,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101604",
		durability: "4 Mil",
		sizeWxL: "10 x 16",
		weight: 42.7,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C101804",
		durability: "4 Mil",
		sizeWxL: "10 x 18",
		weight: 48.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C102004",
		durability: "4 Mil",
		sizeWxL: "10 x 20",
		weight: 53.3,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C102404",
		durability: "4 Mil",
		sizeWxL: "10 x 24",
		weight: 64.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C111504",
		durability: "4 Mil",
		sizeWxL: "11 x 15",
		weight: 44,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C111804",
		durability: "4 Mil",
		sizeWxL: "11 x 18",
		weight: 52.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121204",
		durability: "4 Mil",
		sizeWxL: "12 x 12",
		weight: 38.4,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C121404",
		durability: "4 Mil",
		sizeWxL: "12 x 14",
		weight: 44.8,
		bagPerCase: "1000"
	},
	{
		productNumber: "BG-C121604",
		durability: "4 Mil",
		sizeWxL: "12 x 16",
		weight: 51.2,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C121804",
		durability: "4 Mil",
		sizeWxL: "12 x 18",
		weight: 57.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C122004",
		durability: "4 Mil",
		sizeWxL: "12 x 20",
		weight: 64,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C122404",
		durability: "4 Mil",
		sizeWxL: "12 x 24",
		weight: 76.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C123004",
		durability: "4 Mil",
		sizeWxL: "12 x 30",
		weight: 96,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C141604",
		durability: "4 Mil",
		sizeWxL: "14 x 16",
		weight: 59.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C143004",
		durability: "4 Mil",
		sizeWxL: "14 x 20",
		weight: 74.6,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C142404",
		durability: "4 Mil",
		sizeWxL: "14 x 24",
		weight: 89.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C143005",
		durability: "4 Mil",
		sizeWxL: "14 x 30",
		weight: 112,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C143604",
		durability: "4 Mil",
		sizeWxL: "14 x 36",
		weight: 134.4,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C152404",
		durability: "4 Mil",
		sizeWxL: "15 x 24",
		weight: 96,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C153004",
		durability: "4 Mil",
		sizeWxL: "15 x 30",
		weight: 120,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C153604",
		durability: "4 Mil",
		sizeWxL: "15 x 36",
		weight: 144,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C161804",
		durability: "4 Mil",
		sizeWxL: "16 x 18",
		weight: 76.8,
		bagPerCase: "500"
	},
	{
		productNumber: "BG-C162404",
		durability: "4 Mil",
		sizeWxL: "16 x 24",
		weight: 102.4,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C163004",
		durability: "4 Mil",
		sizeWxL: "16 x 30",
		weight: 128,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C163604",
		durability: "4 Mil",
		sizeWxL: "16 x 36",
		weight: 153.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C182004",
		durability: "4 Mil",
		sizeWxL: "18 x 20",
		weight: 96.2,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C182404",
		durability: "4 Mil",
		sizeWxL: "18 x 24",
		weight: 115.3,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C183004",
		durability: "4 Mil",
		sizeWxL: "18 x 30",
		weight: 144,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C183604",
		durability: "4 Mil",
		sizeWxL: "18 x 36",
		weight: 172.8,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C202004",
		durability: "4 Mil",
		sizeWxL: "20 x 20",
		weight: 106.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C202404",
		durability: "4 Mil",
		sizeWxL: "20 x 24",
		weight: 128,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C203004",
		durability: "4 Mil",
		sizeWxL: "20 x 30",
		weight: 160.1,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C203604",
		durability: "4 Mil",
		sizeWxL: "20 x 36",
		weight: 192,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C204004",
		durability: "4 Mil",
		sizeWxL: "20 x 40",
		weight: 213.3,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C242404",
		durability: "4 Mil",
		sizeWxL: "24 x 24",
		weight: 153.6,
		bagPerCase: "250"
	},
	{
		productNumber: "BG-C243004",
		durability: "4 Mil",
		sizeWxL: "24 x 30",
		weight: 192,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C243604",
		durability: "4 Mil",
		sizeWxL: "24 x 36",
		weight: 230.5,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C244204",
		durability: "4 Mil",
		sizeWxL: "24 x 42",
		weight: 269.3,
		bagPerCase: "200"
	},
	{
		productNumber: "BG-C244804",
		durability: "4 Mil",
		sizeWxL: "24 x 48",
		weight: 307.8,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C263004",
		durability: "4 Mil",
		sizeWxL: "26 x 30",
		weight: 208,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C285004",
		durability: "4 Mil",
		sizeWxL: "28 x 50",
		weight: 374,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C303004",
		durability: "4 Mil",
		sizeWxL: "30 x 30",
		weight: 240.4,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C303604",
		durability: "4 Mil",
		sizeWxL: "30 x 36",
		weight: 288.5,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C364804",
		durability: "4 Mil",
		sizeWxL: "36 x 48",
		weight: 461.7,
		bagPerCase: "100"
	},
	{
		productNumber: "BG-C366004",
		durability: "4 Mil",
		sizeWxL: "36 x 60",
		weight: 577.1,
		bagPerCase: "50"
	},
	{
		productNumber: "BG-C386404",
		durability: "4 Mil",
		sizeWxL: "38 x 64",
		weight: 648.5,
		bagPerCase: "50"
	},
	{
		productNumber: "BG-C445404",
		durability: "4 Mil",
		sizeWxL: "44 x 54",
		weight: 633.6,
		bagPerCase: "50"
	}];

const ClearPolyBags = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th>Product Number</th>
					<th>Durability</th>
					<th>Size</th>
					<th>Weight</th>
					<th>Bags Per Case</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{clearPolyBags.map(bags => (
					<tr key={bags.productNumber}>
						<td>{bags.productNumber}</td>
						<td>{bags.durability}</td>
						<td>{bags.sizeWxL}</td>
						<td>{bags.weight}</td>
						<td>{bags.bagPerCase}</td>
					</tr>
				))}
			</MDBTableBody>
		</MDBTable>
	);
};

export default ClearPolyBags;
