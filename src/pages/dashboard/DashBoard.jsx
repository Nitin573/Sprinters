import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import Widget from '../../component/widget/Widget'
import { Box } from '@mui/material'
import NotifiTable from '../../component/notificationtable/NotifiTable'

const DashBoard = () => {
  return (
    <>
        <NavBar>
<Box sx={{background:"#C97280"}}>
<Box 
sx={{display:"flex",justifyContent:{
    lg:"space-between",
    xs:"space-evenly"
},flexWrap:"wrap"  }}
>
   <Widget/>
</Box>
<Box sx={{p:4}}>
<NotifiTable/>
</Box>
</Box>
          


        </NavBar>
    </>
  )
}

export default DashBoard
