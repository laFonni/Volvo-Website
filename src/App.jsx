import Navbar from "./components/Navbar"
import Electrification from "./sections/Electrification"
import Hero from "./sections/Hero"
import RangeOfCars from "./sections/RangeOfCars"
import CaruselOfCars from "./sections/CaruselOfCars"

function App() {

  return (
    <main className="cursor-default select-none ">
      <Navbar />
      <section className="flex flex-col">
        <Hero/>
        <CaruselOfCars/>
        <Electrification / >
        <RangeOfCars />
        WhyVolvo
        Links
        Footer
      </section>
    </main>
  )
}

export default App
