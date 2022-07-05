import React from 'react'
import '../ComponentStyles/WeatherIcon.css'

const WeatherIcon = ({icon}) => {
  return (
    <div>
         <figure>
            <img src={icon} alt ="image"  className="weather__Icon"/>
           
        </figure>
    </div>
  )
}

export default WeatherIcon