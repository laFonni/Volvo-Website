import 'react-multi-carousel/lib/styles.css';
import CarouselOfAllCars from '../components/navCards/CarouselOfAllCars';
import { useState } from 'react';



const routes = {
  AllCars: <CarouselOfAllCars />,
  SUV: null,
  Crossover: <CarouselOfAllCars/>,
  Sedan: <CarouselOfAllCars/>,
  Kombi: <CarouselOfAllCars/>,


};

const CaruselOfCars = () => {
  const [activeCarousel, setActiveCarousel] = useState('AllCars');

  
  


    return (
        <div className='flex flex-col pt-20 bg-red-100  relative'>
            <div className='flex justify-center text-4xl font-semibold pb-6'>
                Wszystie modele Recharge
            </div>

            <div className='flex flex-row text-gray-600 gap-5 justify-center pb-6 '>
            {Object.keys(routes).map((key) => (<button  onClick={() => setActiveCarousel(key)} key={key}>{key}</button>))}

            </div>
            
           

            {routes[activeCarousel]}
            
            
        </div>
    )
}

export default CaruselOfCars