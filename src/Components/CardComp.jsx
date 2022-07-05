import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, Typography } from '@mui/material';
import '../ComponentStyles/CardComp.css'

const CardComp = () => {
   
  return (
    <>
    
    <Card variant="outlined" sx={{ maxWidth: 300 }} className="cards">
        <CardHeader
        title ="Card Header"
        /> 
        <CardContent>
            <Typography>
                Temp
            </Typography>
            <Typography>
                Humidity
            </Typography>
        </CardContent>
    </Card>
    </>
  )
}

export default CardComp