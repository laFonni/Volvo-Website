import propTypes from 'prop-types'
import { useState } from 'react'

const BorderButton = ({label}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <button className="flex flex-row  h-[73px]  items-center  ">
    <div className='flex flex-row justify-between w-[412px]' onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        <h3 className={`${isHovered ? 'text-black' : 'text-blue-800'} `}>{label} </h3>
        <p className="text-gray-800">{">"}</p>
    </div>
        
    </button>
  )
}

BorderButton.propTypes = {
    label: propTypes.string.isRequired,
}

export default BorderButton