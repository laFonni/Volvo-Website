import OurCarsCard from "../components/navCards/OurCarsCard";
import PurchaseCard from "../components/navCards/PurchaseCard";
import ForOwnersCard from "../components/navCards/ForOwnersCard";
import AboutUsCard from "../components/navCards/AboutUsCard";
import {
  C40_Recharge,
  XC40_Recharge,
  EX30,
  EX90,
  XC60_Hybrid,
  XC90,
  XC90_Hybrid,
  S90,
  S90_Hybrid,
  S60_Hybrid,
  V90_Hybrid,
  V60_Hybrid,
  XC60,
  XC40,
  S60,
  V90,
  V60,
  V90_C_C,
  V60_C_C,
  XC40_Back,
  XC60_Back,
  C40_Back,
  VolvoInGarge,
  VolvoOpenedTrunk,
  EX30_Side,
  EX90_Side,
  XC90_Side,
  XC60_Side, 
  XC40_Side,
  C40_Side,
  V90_Side,
  V60_Side,
  S60_Side,
  S90_Side,
} from "../assets/Cars";
import { FacebookLogo, InstagramLogo, PinterstLogo, TwitterLogo, YouTubeLogo } from "../assets/logos";

export const navCards = [
  { key: "ourCars", label: "Nasze samochody", card: OurCarsCard },
  { key: "purchase", label: "Zakup", card: PurchaseCard },
  { key: "forOwners", label: "Dla właścicieli", card: ForOwnersCard },
  { key: "aboutUs", label: "O nas", card: AboutUsCard },
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
    image: XC90_Hybrid,
  },
  {
    class: "SUV",
    model: "XC60",
    price: "264 900",
    image: XC60_Hybrid,
  },
  {
    class: "Sedan",
    model: "S90 Recharge",
    price: "323 900",
    image: S90_Hybrid,
  },
  {
    class: "Sedan",
    model: "S60 Recharge",
    price: "349 900",
    image: S60_Hybrid,
  },
  {
    class: "Kombi",
    model: "V90",
    price: "299 900",
    image: V90_Hybrid,
  },
  {
    class: "Kombi",
    model: "V60",
    price: "244 900",
    image: V60_Hybrid,
  },
];

export const mildHybridCars = [
  {
    class: "SUV",
    model: "XC90",
    price: "334 900",
    image: XC90,
  },
  {
    class: "SUV",
    model: "XC60",
    price: "219 900",
    image: XC60,
  },
  {
    class: "SUV",
    model: "XC40",
    price: "164 900",
    image: XC40,
  },
  {
    class: "Sedan",
    model: "S90",
    price: "270 900",
    image: S90,
  },
  {
    class: "Sedan",
    model: "S60",
    price: "247 900",
    image: S60,
  },
  {
    class: "Kombi",
    model: "V90",
    price: "259 900",
    image: V90,
  },
  {
    class: "Kombi",
    model: "V60",
    price: "169 900",
    image: V60,
  },
  {
    class: "Kombi",
    model: "V90 Cross Country",
    price: "314 600",
    image: V90_C_C,
  },
  {
    class: "Kombi",
    model: "V60 Cross Country",
    price: "238 900",
    image: V60_C_C,
  },
];

export const purchaseCard = [
  { key: "offer1", head: "Oferta", label: "Skonfiguruj swoje Volvo" },
  { key: "offer2", head: "Oferta", label: "Oferty specjalne" },
  { key: "offer3", head: "Oferta", label: "Dostępne od ręki" },
  { key: "offer4", head: "Oferta", label: "Sprawdzone auta używane" },
  { key: "offer5", head: "Oferta", label: "Cenniki" },

  {
    key: "financing1",
    head: "Finansowanie",
    label: "Wynajem długoterminowy dla firm",
  },
  { key: "financing2", head: "Finansowanie", label: "Leasing klasyczny" },
  { key: "financing3", head: "Finansowanie", label: "Usługi finansowe" },

  { key: "others1", head: "Inne", label: "Jazda próbna" },
  { key: "others2", head: "Inne", label: "Znajdź dealera" },
  { key: "others3", head: "Inne", label: "Zapisz się do newslettera" },
];

export const forOwnersCard = [
  { key: "service1", head: "Serwis", label: "O autoryzowanym serwise Volvo" },
  { key: "service2", head: "Serwis", label: "Oferty serwisowe" },
  { key: "service3", head: "Serwis", label: "Pick-up and delivery" },
  { key: "service4", head: "Serwis", label: "Znajdź dealera" },

  { key: "accesories1", head: "Akcesoria", label: "Akcesoria" },
  { key: "accesories2", head: "Akcesoria", label: "Produkt kwartału" },

  {
    key: "helpAndExploitation1",
    head: "Pomoc i eksploatacja",
    label: "Zgłoś szkodę",
  },
  {
    key: "helpAndExploitation2",
    head: "Pomoc i eksploatacja",
    label: "Assistance",
  },
  {
    key: "helpAndExploitation3",
    head: "Pomoc i eksploatacja",
    label: "Wsparcie i instrukcje",
  },
  {
    key: "helpAndExploitation4",
    head: "Pomoc i eksploatacja",
    label: "Volvo Exchange System",
  },

  { key: "volvoOnLine1", head: "Volovo on-line", label: "Volvo Car App" },
  { key: "volvoOnLine2", head: "Volovo on-line", label: "Volvo ID" },
];

export const aboutUsCard = [
  {
    key: "elecrtification1",
    head: "Elektryfikacja",
    label: "Samochody elektryczne",
  },
  {
    key: "elecrtification2",
    head: "Elektryfikacja",
    label: "Samochody typu plug-in",
  },
  { key: "elecrtification3", head: "Elektryfikacja", label: "Ładowanie" },
  {
    key: "elecrtification4",
    head: "Elektryfikacja",
    label: "Stacje ładowania Volvo",
  },

  { key: "aboutVolvo1", head: "O Volvo Cars", label: "Nasza historia" },
  { key: "aboutVolvo2", head: "O Volvo Cars", label: "Bezpieczeństwo" },
  { key: "aboutVolvo3", head: "O Volvo Cars", label: "Zrównoważony rozwój" },
  { key: "aboutVolvo4", head: "O Volvo Cars", label: "Aktualności" },
  { key: "aboutVolvo5", head: "O Volvo Cars", label: "Ochrona marki" },
  { key: "aboutVolvo6", head: "O Volvo Cars", label: "Samochody Rodzinne" },

  { key: "volvocloserToYou1", head: "Volvo bliżej Ciebie", label: "Tech Hub" },
  {
    key: "volvocloserToYou2",
    head: "Volvo bliżej Ciebie",
    label: "Strefa inwestora",
  },
  { key: "volvocloserToYou3", head: "Volvo bliżej Ciebie", label: "Kariera" },
  {
    key: "volvocloserToYou4",
    head: "Volvo bliżej Ciebie",
    label: "Biuro prasowe",
  },
];

export const TypeCarsCardDB = [
  {
    key: "electricCars",
    title: "Samochody w pełni elektryczne",
    description:
      "Nasze samochody w pełni elektryczne nie emitują spalin, zapewniając jednocześnie odpowiednio duży zasięg i bardzo dobre osiągi.",
    button: "Samochody w pełni elektryczne",
    image: XC40_Back,
  },
  {
    key: "hybridCars",
    title: "Samochody hybrydowe typu plug-in",
    description:
      "Hybrydy plug in łączą w sobie napęd elektryczny i spalinowy, oferując bezproblemową jazdę",
    button: "Samochody hybrydowe typu plug-in",
    image: XC60_Back,
  },
  {
    key: "electricCharging",
    title: "Ładowanie energią elektryczną",
    description:
      "Ładowanie samochodu elektrycznego w domu i na trasie może być łatwe, szybkie i ekonomiczne.",
    button: "Ładowanie samochodu",
    image: C40_Back,
  },
];

export const RangeOfCarsDB = [
  {
    key: "usedCars",
    title: "Używane samochody Volvo",
    description:
      "Sprawdź ofertę używanych samochodów Volvo Selekt. Najrozsądniejszy sposób zakupu wysokiej jakości używanego samochodu Volvo.",
    image: VolvoInGarge,
  },
  {
    key: "newCars",
    title: "Nowe samochody Volvo",
    description:
      "Zobacz jakie oferty przygotowaliśmy na nowe samochody specjalnie dla Ciebie.",
    image: VolvoOpenedTrunk,
  },
];

export const AllCars = [
  {
    key: "ex30",
    classOfCar: "SUV",
    model: "EX30",
    price: "169 900",
    type: "W pełni elektryczne",
    image: EX30_Side,
  },
  {
    key: "ex90",
    classOfCar: "SUV",
    model: "EX90",
    price: "399 900",
    type: "Pure Electric",
    image: EX90_Side,
  },
  {
    key: "xc90",
    classOfCar: "SUV",
    model: "XC90",
    price: "379 900",
    type: "Plug-in hybrid",
    image: XC90_Side,
  },
  {
    key: "xc60",
    classOfCar: "SUV",
    model: "XC60",
    price: "264 900",
    type: "Plug-in hybrid",
    image: XC60_Side,
  },
  {
    key: "xc40recharge",
    classOfCar: "SUV",
    model: "XC40 Recharge",
    price: "249 300",
    type: "Plug-in hybrid",
    image: XC40_Side,
  },
  {
    key: "c40recharge",
    classOfCar: "Crossover",
    model: "C40 Recharge",
    price: "256 900",
    type: "Pure Electric",
    image: C40_Side,
  },
  {
    key: "v90",
    classOfCar: "Kombi",
    model: "V90",
    price: "299 900",
    type: "Plug-in hybrid",
    image: V90_Side,
  },
  {
    key: "v60",
    classOfCar: "Kombi",
    model: "V60",
    price: "244 900",
    type: "Plug-in hybrid",
    image: V60_Side,
  },
  {
    key: "s90recharge",
    classOfCar: "Sedan",
    model: "S90 Recharge",
    price: "323 900",
    type: "Plug-in hybrid",
    image: S90_Side,
  
  },
  {
    key: "s60recharge",
    classOfCar: "Sedan",
    model: "S60 Recharge",
    price: "349 900",
    type: "Plug-in hybrid",
    image: S60_Side,
  },
];

export const WhyVolvoInfoCards = [
  {
    key: "easerlive",
    title: "Ułatwiamy Ci życie",
    info: "Nasz nowy pomysł na podróż. Korzystaj z Volvo, kiedy chcesz i jak chcesz.",
  },
  {
    key: "futureelectric",
    title: "Przyszłość to napęd elektryczny",
    info: "Wszystkie nasze modele dostępne są z napędem elektrycznym. To ulga dla środowiska naturalnego."
  },
  {
    key: "protectimportant",
    title: "Chrońmy to, co ważne",
    info: "Jesteśmy dumni z naszych dokonań w dziedzinie bezpieczeństwa. Nie ustajemy w pracach nad innowacjami, które chronią to, co ważne."
  }

];

export const FooterInfo = [
  {
    key: "help1",
    head: "Pomoc i wsparcie",
    label: "Serwis"
  },
  {
    key: "help2",
    head: "Pomoc i wsparcie",
    label: "Wsparcie i instrukcje"
  },
  {
    key: "help3",
    head: "Pomoc i wsparcie",
    label: "Gwarancja"
  },
  {
    key: "help4",
    head: "Pomoc i wsparcie",
    label: "Stacje demontażu"
  },

  {
    key: "contact1",
    head: "Skontaktuj sie z nami",
    label: "Kontakt"
  },
  {
    key: "contact2",
    head: "Skontaktuj sie z nami",
    label: "Znajdź dealera"
  },
  {
    key: "contact3",
    head: "Skontaktuj sie z nami",
    label: "Jazda próbna"
  },

  {
    key: "apps1",
    head: "Volvo Cars App",
    label: "App Store"
  },
  {
    key: "apps2",
    head: "Volvo Cars App",
    label: "Google play"
  }
]

export const SocialMedia = [
  {
    key: "facebook",
    label: "Facebook",
    image: FacebookLogo
  },
  {
    key: "instagram",
    label: "Instagram",
    image: InstagramLogo
  },
  {
    key: "twitter",
    label: "Twitter",
    image: TwitterLogo
  },
  {
    key: "youtube",
    label: "Youtube",
    image: YouTubeLogo
  },
  {
    key: "pinterest",
    label: "Pinterest",
    image: PinterstLogo
  }
]
