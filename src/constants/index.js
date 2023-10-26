import ourCarsCard from "../components/navCards/OurCarsCard";
import purchaseCard from "../components/navCards/purchaseCard";
import forOwnersCard from "../components/navCards/forOwnersCard";
import aboutUsCard from "../components/navCards/aboutUsCard";
import { C40_Recharge } from "../assets/Cars";

export const navCards = [
  { index: 1, label: "Nasze samochody", card: ourCarsCard },
  { index: 2, label: "Zakup", card: purchaseCard },
  { index: 3, label: "Dla właścicieli", card: forOwnersCard },
  { index: 4, label: "O nas", card: aboutUsCard },
];

export const carsCards = [
  {
    index: 1,
    label: "Elektryczne",
    text: "Całkowicie elektryczne",
    card: "ElectricCarsCard",
  },
  {
    index: 2,
    label: "Hybrydy",
    text: "Samochód hybrydowy plug-in",
    card: "HybridCarsCard",
  },
  {
    index: 3,
    label: "Mild-Hybrid",
    text: "Samochód typu Mild-Hybrid",
    card: "TraditionalCarsCard",
  },
];

export const electricCars = [
  {
    class: "Crossover",
    model: "C40 Recharge",
    price: "od 256 900 zł",
    image: C40_Recharge,
  },
  {
    class: "SUV",
    model: "XC40 Recharge",
    price: "od 249 300 zł",
    image: C40_Recharge,
  },
  {
    class: "SUV",
    model: "EX30",
    price: "od 169 900 zł",
    image: C40_Recharge,
  },
  {
    class: "SUV",
    model: "EX90",
    price: "od 399 900 zł",
    image: C40_Recharge,
  },
];
