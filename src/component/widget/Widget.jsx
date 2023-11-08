import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';

import datas from "./WidgetData"



const Widget = () => {

// temporary 
const amount=1000;
const diff=20;



  return (
   <>{
    datas.map((data)=>(

<Card  className='widgetCard' sx={{p:1,width:280,borderRadius:"20px",margin:1,
     transition: 'transform 0.3s',
     transformStyle: 'preserve-3d',
     transform: 'perspective(1000px) scale(1)',
     '&:hover': {
       transform: 'perspective(1000px)  scale(1.1)',
     },

}}>

    <Box  sx={{display:"flex",justifyContent:"space-evenly"}} >
        <Typography gutterBottom sx={{marginRight:6}} variant="h5">{data.title}</Typography>
        <Typography>
            <ExpandMore/> {diff}%
        </Typography>
    </Box>

        <Typography variant="h4" textAlign="center" gutterBottom > {data.isMoney && "$"} {amount}</Typography>
    <Box sx={{display:"flex",justifyContent:"space-between"}} >
        <Typography component={Link} to={data.link}> {data.linktext}</Typography>
        <Typography>{data.icon}</Typography>
    </Box>


   </Card>
    ))

   
   }
   
   
   </>
  )
}

export default Widget


