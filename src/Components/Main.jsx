import React,{useEffect ,useState} from 'react'
import LeftDetails from './LeftDetails';
import RightDetails from './RightDetails';
import axios from 'axios';

import '../App.css';
import CardComp from './CardComp';
const Main = () => {
    const [weather ,setWeather] =useState();
    useEffect(()=>{
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position)=>{
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
              let queryparams = `${position.coords.latitude},${position.coords.longitude}`;
              
              axios.get(`http://api.weatherapi.com/v1/current.json?key=28bba4d1b56f4e36b0270752220507&q=${queryparams}&aqi=no`).then(data=>{
                console.log(data.data)
               setWeather(data.data);
              })
            });
    
        }else{
    
        } 
      },[])
  return (
    <div>
 <div className="app__upper">

<LeftDetails weather={weather}/>
<RightDetails weather={weather?.current}/>
</div>
<div>
    {/* <h4>Not Your Location ? Check here to see nearby areas</h4> */}
    <div style={{display: 'flex' , flexDirection: 'row', flexWrap:'wrap'}}>
      {/* {  weather?.map(data=><CardComp name={data.name} region={data.region} country ={data.country} key={data.id}/>)} */}
   
    </div>
   
</div>
    </div>
  )
}

export default Main