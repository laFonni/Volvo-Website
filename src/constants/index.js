import ourCarsCard from "../components/navCards/OurCarsCard";
import purchaseCard from "../components/navCards/PurchaseCard";
import forOwnersCard from "../components/navCards/ForOwnersCard";
import aboutUsCard from "../components/navCards/AboutUsCard";
import { C40_Recharge, XC40_Recharge, EX30, EX90 } from "../assets/Cars";

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
    image: XC40_Recharge,
  },
  {
    class: "SUV",
    model: "EX30",
    price: "od 169 900 zł",
    image: EX30,
  },
  {
    class: "SUV",
    model: "EX90",
    price: "od 399 900 zł",
    image: EX90,
  },
];

export const hybridCars = [
  {
    class: "SUV",
    model: "XC90",
    price: "od 379 900 zł",
    image: EX90,
  },
  {
    class: "SUV",
    model: "XC60",
    price: "od 264 900 zł",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S90 Recharge",
    price: "od 323 900 zł",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S60 Recharge",
    price: "od 349 900 zł",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V90",
    price: "od 299 900 zł",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V60",
    price: "od 244 900 zł",
    image: EX90,
  },
];
