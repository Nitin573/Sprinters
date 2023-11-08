import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from '../../component/navbar/NavBar'
import Notification from '../../component/notification/Notification';
import News from '../../component/news/News';

const UpdateNotification = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <>
 <NavBar>
 
 <Box sx={{ width: '100%',  background:"#C97280"}}>
 <TabContext value={value}>
 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList sx={{color:"black", fontSize:"1.5rem",display:"flex",justifyContent:"space-evenly"}} onChange={handleChange} aria-label="lab API tabs example">
        
              <Tab label="Updates News" value="1" />
            <Tab label="Updates Notifation" value="2" />
       
          </TabList>
        </Box>
        <TabPanel value="1">
        <News/>
       
        </TabPanel>
        <TabPanel value="2">
        <Notification/>
          </TabPanel>
        
      </TabContext>
    </Box>
 </NavBar>
   
  
   </>
  )
}

export default UpdateNotification
