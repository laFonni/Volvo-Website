import Navbar from "./components/Navbar"
import Electrification from "./sections/Electrification"
import Hero from "./sections/Hero"

function App() {

  return (
    <main className="cursor-default select-none ">
      <Navbar />
      <section className="flex flex-col">
        <Hero/>
        Slider
        <Electrification / >
        CarsUsedandNew
        WhyVolvo
        Links
        Footer
      </section>
    </main>
  )
}

export default App
