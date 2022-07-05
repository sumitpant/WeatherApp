import React from 'react'
import '../ComponentStyles/RightDetails.css'

const RightIcons = ({icon ,text ,value}) => {
  return (
    <div className="container__right">
    <div className="container__humid">
        <div className="container__humid_img">
        <img src={icon} alt="humidity" className="humid"/>
        <small className="humid__small">{text.trim()}</small>
        </div>
        <div className="humid__value">
            <h4 > {value}</h4>
        </div>
    </div>
</div>
  )
}

export default RightIcons