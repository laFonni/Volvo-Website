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
    <main className=" cursor-default select-none ">
      <div className="flex flex-col h-[100vh] ">
        <Navbar />
        <Hero />
      </div>
      <CaruselOfCars />
      <Electrification />
      <RangeOfCars />
      <WhyVolvo />
      <Links />
      <Footer />
    </main>
  );
}

export default App;
