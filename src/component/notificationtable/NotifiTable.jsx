import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {NotiData} from './NotiData'
import styles from './NotifTable.module.css'
import { Typography } from '@mui/material';
const NotifiTable = () => {
  return (
    <>
     <TableContainer className='tablecontainer' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contest ID</TableCell>
            <TableCell>Contest</TableCell>
            <TableCell >Notification</TableCell>
            <TableCell >Date</TableCell>
         
            <TableCell >Detail</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {NotiData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell >
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={row.img} alt="productimage"  style={{width:"32px",height:"32px",borderRadius:"40%",marginRight:"10px"}}/>   {row.contest}
                </div>
             </TableCell>
              <TableCell >{row.notification}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.detail}</TableCell>
              
              <TableCell >
                <Typography variant='span' className={styles[row.status]} >
                {row.status}
                    
                </Typography>
               
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default NotifiTable
