import React, { useState } from 'react';
import axios from "axios";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
  
    InputLabel,
    TextField,
    Typography,
  } from "@mui/material";
  
const Notification = () => {


    const [formData,setFormData]=useState({
      Title : "",
      Notification : ""
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDI1ZDlhNjk2MjhlYzM5MmNhNjYyYSIsImlhdCI6MTY5OTU0MzA2OCwiZXhwIjoxNjk5NTQ2NjY4fQ.yhu9WzLQt49hFGP4lPuusiOXZNiPASQ7c0nrWSGEmCo";
    const apiUrl = "https://hotel-project.onrender.com/S-Printer-App/Notification/addNotification";

    const headers = {
      Authorization: token,
    };

    axios
    .post(apiUrl, formData, { headers })
    .then((response) => {
      alert(response.data.message);
      setFormData({
        Title : "",
        Notification : ""
      });
     console.log("Response:", response.data); // Assuming the message is in the response
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };





  return (
  <>
  <Box
      sx={{
        width: "100%",
        height: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        background:"#C97280",
        p:5
      }}
    >

<Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginTop: 2,
                marginBottom: 4,
                fontFamily: "Arial, sans-serif",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#00000",
                textShadow: "2px 2px 4px rgba(0, 1, .7, 0.5)",
              }}
            >
             Add Notification
            </Typography>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column",
          
        }}
      >
<Card sx={{width:"100%",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",borderRadius:"20px",m:1.5}}>
<form  onSubmit={handleSubmit}>
  <CardContent>

   
  <Box>
<InputLabel htmlFor="Title" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Notification Title</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-title"
name="Title"
variant="outlined"
// label="Input Field"
placeholder="Enter Notification Title"
 value={formData.Title}
 onChange={handleChange}
/>
</Box>


<Box>
<InputLabel htmlFor="Notification" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Notification Details</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
multiline
rows={4}
id="input-details"
name="Notification"
variant="outlined"
// label="Input Field"
placeholder="Enter Notification Details"
 value={formData.Notification}
 onChange={handleChange}
/>
</Box>

</CardContent>
<CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              // Add padding to the top of the CardActions
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                background:
                  "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
                color: "white",
                fontFamily: "Arial, sans-serif", // Change font style
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                padding: "12px 24px", // Add padding to the button
              }}
            >
           Add New Notification 
            </Button>
          </CardActions>
</form>
</Card>

      </Container>
      </Box>
  </>
  )
}

export default Notification
