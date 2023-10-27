import ourCarsCard from "../components/navCards/OurCarsCard";
import purchaseCard from "../components/navCards/PurchaseCard";
import forOwnersCard from "../components/navCards/ForOwnersCard";
import aboutUsCard from "../components/navCards/AboutUsCard";
import { C40_Recharge, XC40_Recharge, EX30, EX90 } from "../assets/Cars";

export const navCards = [
  { key: "ourCars", label: "Nasze samochody", card: ourCarsCard },
  { key: "purchase", label: "Zakup", card: purchaseCard },
  { key: "forOwners", label: "Dla właścicieli", card: forOwnersCard },
  { key: "aboutUs", label: "O nas", card: aboutUsCard },
];

export const carsCards = [
  {
    key: "electric",
    label: "Elektryczne",
    text: "Całkowicie elektryczne",
    card: "ElectricCarsCard",
  },
  {
    key: "hybrid",
    label: "Hybrydy",
    text: "Samochód hybrydowy plug-in",
    card: "HybridCarsCard",
  },
  {
    key: "mildHybrid",
    label: "Mild-Hybrid",
    text: "Samochód typu Mild-Hybrid",
    card: "MildHybridCarsCard",
  },
];

export const electricCars = [
  {
    class: "Crossover",
    model: "C40 Recharge",
    price: "256 900",
    image: C40_Recharge,
  },
  {
    class: "SUV",
    model: "XC40 Recharge",
    price: "249 300",
    image: XC40_Recharge,
  },
  {
    class: "SUV",
    model: "EX30",
    price: "169 900",
    image: EX30,
  },
  {
    class: "SUV",
    model: "EX90",
    price: "399 900",
    image: EX90,
  },
];

export const hybridCars = [
  {
    class: "SUV",
    model: "XC90",
    price: "379 900",
    image: EX90,
  },
  {
    class: "SUV",
    model: "XC60",
    price: "264 900",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S90 Recharge",
    price: "323 900",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S60 Recharge",
    price: "349 900",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V90",
    price: "299 900",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V60",
    price: "244 900",
    image: EX90,
  },
];

export const mildHybridCars = [
  {
    class: "SUV",
    model: "XC90",
    price: "334 900",
    image: EX90,
  },
  {
    class: "SUV",
    model: "XC60",
    price: "219 900",
    image: EX90,
  },
  {
    class: "SUV",
    model: "XC40",
    price: "164 900",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S90",
    price: "270 900",
    image: EX90,
  },
  {
    class: "Sedan",
    model: "S60",
    price: "247 900",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V90",
    price: "259 900",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V60",
    price: "169 900",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V90 Cross Country",
    price: "314 600",
    image: EX90,
  },
  {
    class: "Kombi",
    model: "V60 Cross Country",
    price: "238 900",
    image: EX90,
  },
];
