import React from 'react'
import WeatherIcon from './WeatherIcon';
import '../ComponentStyles/LeftDetails.css'

const LeftDetails = ({weather}) => {
    const imgUrl="https://iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico";
    console.log(weather?.location)
  return (
    <div className="left-details">
        <div>
            <WeatherIcon icon={weather?.current?.condition?.icon?weather?.current?.condition?.icon:  imgUrl}/>
        </div>
        <div className="left-details_status">
            <h2 className="weather__type">{weather?.current?.condition?.text}</h2>
           
        </div>
       
        <div className="left-details_temp">
        <p className="weather__cityName">{weather?.location?.name}</p>
        <h4>{weather?.location?.region}</h4>
        <h4 >{weather?.location?.country}</h4>
        <h1> {weather?.current?.temp_c} C</h1>
        </div>
      
    </div>
  )
}

export default LeftDetails