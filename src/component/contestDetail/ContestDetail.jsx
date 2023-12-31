import React, { useState } from 'react';
import axios from "axios";
import FetchToken1 from '../../component/login/FetchToken1';
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

    const [deleteContestId, setDeleteContestId] = useState(""); // State to store the ID of the contest to delete


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleDeleteChange = (e) => {
        setDeleteContestId(e.target.value);
      };

      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const tokenExpireTime = parseInt(localStorage.getItem("tokenExpireTime"), 10);

        if(Date.now() > tokenExpireTime){
         FetchToken1();
        }
        // Confirmation window after successfully adding a new contest
        const isConfirmed = window.confirm("Are you sure you want to add a new contest?");
        const token = 'Bearer ' + localStorage.getItem("accessToken"); // Replace with your actual bearer token
        const apiUrl = "https://hotel-project.onrender.com/S-Printer-App/ContestRoute/addContest";
        // Clear the delete input field after successfully adding a contest
        setDeleteContestId("");

        const headers = {
          Authorization: token,
        };
    
        axios
        .post(apiUrl, formData, { headers })
        .then((response) => {
          console.log("Response:", response.data); // Assuming the message is in the response
          // Refresh the page after successfully adding a new contest
          setFormData({
            Name:"",
          detail:"",
          startDate:"",
          endDate:"",
          RulesOfContest: "",
          entry:"",
          prizes:""
        });
          // window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      };
    
      const handleDelete = async () => {
        // Confirmation window before deleting the contest
        const isConfirmed = window.confirm("Are you sure you want to delete this contest?");
        if (isConfirmed) {
          const tokenExpireTime = parseInt(localStorage.getItem("tokenExpireTime"), 10);

          if(Date.now() > tokenExpireTime){
           FetchToken1();
          }
          // Add your code to send a request to delete the contest with the ID stored in deleteContestId
          const token = 'Bearer ' + localStorage.getItem("accessToken"); // Replace with your actual bearer token
          const apiUrl = "https://hotel-project.onrender.com/S-Printer-App/ContestRoute/deleteContest/65462aa32d2488ec39add58e"; // Replace with your API URL
      
          const headers = {
            Authorization: token,
          };
      
          axios
            .delete(apiUrl, { headers })
            .then((response) => {
              console.log("Contest deleted:", response.data);
              // Refresh the page after successfully deleting the contest

              
              // window.location.reload();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
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
      <Box>

  <InputLabel htmlFor="deleteContestId" sx={{ color: "black", fontSize: "1.5rem", marginBottom: ".3rem", marginTop:"20px" }}>Delete Contest by ID</InputLabel>
  <TextField
    sx={{
      marginBottom: 2,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      fontFamily: "Arial, sans-serif",
      backgroundColor:"white",
    }}
    fullWidth
    id="deleteContestId"
    name="deleteContestId"
    variant="outlined"
    label="Contest ID"
    placeholder="Enter Contest ID to delete"
    value={deleteContestId}
    onChange={handleDeleteChange}
  />
</Box>
<CardActions
  sx={{
    display: "flex",
    justifyContent: "center",
    paddingTop: 2,
    // marginTop: "20px",
  }}
>
  <Button
    variant="contained"
    onClick={handleDelete}
    sx={{
      background: "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      padding: "12px 24px",
      marginTop: "20px",
    }}
  >
    Delete Contest
  </Button>
</CardActions>

      </Box>

 </>
  )
}

export default ContestDetail
