import Navbar from "./components/Navbar";
import Electrification from "./sections/Electrification";
import Hero from "./sections/Hero";
import RangeOfCars from "./sections/RangeOfCars";
import CaruselOfCars from "./sections/CaruselOfCars";
import WhyVolvo from "./sections/WhyVolvo";
import Links from "./sections/Links";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="cursor-default select-none ">
      <Navbar />
      <section className="flex flex-col">
        <Hero />
        <CaruselOfCars />
        <Electrification />
        <RangeOfCars />
        <WhyVolvo />
        <Links />
        <Footer />
      </section>
    </main>
  );
}

export default App;
