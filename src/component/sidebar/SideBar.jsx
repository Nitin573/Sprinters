import React, {useState} from 'react'

import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";

import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";

import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";


import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {  StarBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';



const SideBar = () => {
  return (
 <>
     <List
      sx={{
        width: "100%",
        maxWidth: 400,
        // bgcolor: "transparent", // Set the background to transparent to allow for gradient
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   right: 0,
        //   bottom: 0,
        //   left: 0,
        //   background:
        //     "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
        // },
        color: "white", // Set the text color to white
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            position: "relative",
            background:
              "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <ListItemIcon>
            <StarBorderOutlined fontSize="large" sx={{color: "white"}} />
          </ListItemIcon>
          
          <h2
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            Sprinter
          </h2>
        </ListSubheader>
      }
    >
      <Divider />

      <Divider />

      <ListItem  sx={{padding:.5}}
      
       >

        {/* dashboard */}
        <ListItemButton  component={Link} to="/"
       sx={{p:2,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
       '&:hover':{
         boxShadow:"  0 3px 10px black",
       
       }
     }}
        >
          <ListItemIcon>
            <DashboardTwoToneIcon sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      {/* Contestant Details */}
      <Divider />
      <ListItem sx={{padding:.5}}>
        <ListItemButton  sx={{p:2,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
        '&:hover':{
          boxShadow:"  0 3px 10px black",
        
        }
      }}
        component={Link} to="/upload-contest-details"
        >
          <ListItemIcon>
            <CloudUploadIcon sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText  primary="Upload Contest Details" />
        </ListItemButton>
      </ListItem>


      {/* change contact support */}
      <Divider />
      <ListItem sx={{padding:.5}}>
        <ListItemButton 
        component={Link} to="/change-contact-support"
        sx={{p:2,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
        '&:hover':{
          boxShadow:"  0 3px 10px black",
        
        }
      }}
        >
          <ListItemIcon >
            <DashboardTwoToneIcon sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText primary="change contact supportt" />
        </ListItemButton>
      </ListItem>

      {/*upload New Updates/Notication */}
      <Divider />
      <ListItem sx={{padding:.5}}>
        <ListItemButton 
        sx={{p:2,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
        '&:hover':{
          boxShadow:"  0 3px 10px black",
        
        }
      }}
        component={Link} to="/update-notification"
        >
          <ListItemIcon>
            <DashboardTwoToneIcon sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText primary="upload New Updates/Notication" />
        </ListItemButton>
      </ListItem>

      {/* upload Client testimonials */}
      <Divider />
      <ListItem sx={{padding:.5}}>
        <ListItemButton 
        sx={{p:2,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
        '&:hover':{
          boxShadow:"  0 3px 10px black",
        
        }
      }}
        component={Link} to="/upload-client-testimonials"
        >
          <ListItemIcon>
            <DashboardTwoToneIcon sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText primary="upload Client testimonials" />
        </ListItemButton>
      </ListItem>

   

   
      {/* Log Out */}
      <ListItemButton 
      component={Link} to="/login"
      sx={{p:3,boxShadow:"  0 3px 10px rgb(180, 180, 180)",
        '&:hover':{
          boxShadow:"  0 3px 10px black",
        
        }
      }}
      >
        <ListItemIcon>
          <LogoutTwoToneIcon sx={{color: "white"}} />
        </ListItemIcon>
        <ListItemText primary=" Log Out" />
      </ListItemButton>
    </List> 
 </>
  )
}

export default SideBar
