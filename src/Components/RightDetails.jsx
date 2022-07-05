import React from 'react'
import '../ComponentStyles/RightDetails.css'
import RightIcons from './RightIcons';

const RightDetails = ({weather}) => {

  
    const humidity="https://icons.veryicon.com/png/o/miscellaneous/icons-for-building-security-platform/humidity-9.png";
    const rain ="https://icon-library.com/images/rain-icon-png/rain-icon-png-17.jpg";
    const wind ="https://cdn-icons.flaticon.com/png/128/1171/premium/1171289.png?token=exp=1657016546~hmac=e9724b83a63c57e4114350b81f1dbbc9"
    const air_pressure ="https://cdn-icons-png.flaticon.com/128/173/173568.png";
  return (
    <div className="cont">
    <RightIcons icon={humidity} text ={"Humidity"} value={`${weather?.humidity}%`}/>
    <RightIcons icon={air_pressure} text={"Air Pressure"} value={`${weather?.pressure_in}`}/>
    <RightIcons icon={rain} text={"Chance of Rain "} value={`${weather?.cloud}%`}/>
    <RightIcons icon={wind} text={"Wind Speed "} value={`${weather?.wind_kph}kph`}/>

    </ div>
  )
}

export default RightDetails