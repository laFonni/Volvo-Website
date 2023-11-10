
import TypeCarsCard from "../components/TypeCarsCard"
import { TypeCarsCardDB } from "../constants"

const Electrification = () => {
  return (
    

    <div className="flex flex-col items-center w-full pb-24">
        <div className=" max-w-[40rem] ">
            <h1 className="flex justify-center text-4xl font-semibold p-6">Gotowi na elektryfikację?</h1>
            <p className="flex items-center justify-center text-center text-xl text-gray-500 px-5 pb-14">
                Oto najważniejsze fakty, jakie należy poznać, aby bez obaw przesiąść się na napęd elektryczny i znaleźć odpowiedni dla siebie samochód elektryczny Volvo.
            </p>
        </div>

        <div className="flex flex-row gap-6 pb-5">
            {TypeCarsCardDB.map((card) => (
                <TypeCarsCard key={card.key} title={card.title} description={card.description} button={card.button} image={card.image} />
            ))}
            
        </div>
    </div>
  )
}

export default Electrification