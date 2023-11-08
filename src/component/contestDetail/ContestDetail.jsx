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

const ContestDetail = () => {

    const [formData,setFormData]=useState({
        Name:"",
      detail:"",
      startDate:"",
      endDate:"",
      RulesOfContest: "",// rules:"",
      entry:"",
      prizes:""
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
        // Confirmation window after successfully adding a new contest
        const isConfirmed = window.confirm("Are you sure you want to add a new contest?");
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDI1ZDlhNjk2MjhlYzM5MmNhNjYyYSIsImlhdCI6MTY5OTQ1MjIyMiwiZXhwIjoxNjk5NDU1ODIyfQ.1zZ6vfRC3HQ5KMq27IPNX2I_xOa-OqLowsH0wFJ2HmM"; // Replace with your actual bearer token
        const apiUrl = "https://hotel-project.onrender.com/S-Printer-App/ContestRoute/addContest";
    
        const headers = {
          Authorization: token,
        };
    
        axios
        .post(apiUrl, formData, { headers })
        .then((response) => {
          console.log("Response:", response.data); // Assuming the message is in the response
          // Refresh the page after successfully adding a new contest
          window.location.reload();
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
             Upload Contest
            </Typography>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <form onSubmit={handleSubmit}>

       
        <Card sx={{width:"100%",p:3,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
          <CardContent>
        
           

           


<Box>
<InputLabel htmlFor="Name" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Name</InputLabel>
      <TextField
      sx={{
                marginBottom: 2,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                fontFamily: "Arial, sans-serif",
              }}
      fullWidth
        id="input-field"
        name="Name"
        variant="outlined"
        label="Input Field"
        placeholder="Enter something"
        value={formData.Name}
        onChange={handleChange}
        />
</Box>

<Box>
<InputLabel htmlFor="input-field" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Details</InputLabel>
      <TextField
       fullWidth
       multiline
       rows={4}
        id="input-detail"
        name="detail"
        variant="outlined"
        label="Input Details"
        placeholder="Enter Details"
        value={formData.detail}
        onChange={handleChange}
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>

            <Box sx={{display:"flex",justifyContent:"space-evenly",mt:2,flexWrap:"wrap"}}>

                <Box >
                <InputLabel htmlFor="startDate" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Starting Date</InputLabel>
                <TextField
                label="Select a date"
                name="startDate"
                type="date" // Set the type attribute to "date"
                InputLabelProps={{
                 shrink: true,
                }}
                value={formData.startDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
              />


                </Box>
                <Box >
                <InputLabel htmlFor="endDate" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest End Date</InputLabel>
                <TextField
                label="Select a date"
                name="endDate"
                type="date" // Set the type attribute to "date"
                InputLabelProps={{
                 shrink: true,
                }}
                value={formData.endDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
               
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
              />


                </Box>
                 


                 

              </Box>  

              <Box>
<InputLabel htmlFor="RulesOfContest" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Rules</InputLabel>
      <TextField
       fullWidth
       multiline
       rows={4}
        id="rules"
        name="RulesOfContest"
        variant="outlined"
        label="Input Rules"
        placeholder="Enter Rules"
        value={formData.RulesOfContest}
        onChange={handleChange}
        
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>

<Box>
<InputLabel htmlFor="entry" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Entry</InputLabel>
<TextField
  fullWidth
  multiline
  id="entry"
  name="entry"
  variant="outlined"
  label="Contest Entry"
  placeholder="Enter Contest Entry in numbers"
  value={formData.entry}
  onChange={handleChange}
  inputProps={{
    inputMode: "numeric", // Set the input mode to "numeric"
    pattern: "[0-9]*",   // Allow only numeric input
  }}
  sx={{
    marginBottom: 2,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  }}
/>
</Box>

<Box>
<InputLabel htmlFor="prizes" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Prizes</InputLabel>
      <TextField
       fullWidth
       multiline
    
        id="prizes"
        name="prizes"
        variant="outlined"
        label="Input prizes"
        placeholder="Enter contest prizes"
        value={formData.prizes}
        onChange={handleChange}
        
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>


          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 2, // Add padding to the top of the CardActions
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
             Add New Contest
            </Button>
          </CardActions>
          <CardContent>
           
          </CardContent>
        </Card>
        </form>
      </Container>
      </Box>

 </>
  )
}

export default ContestDetail
