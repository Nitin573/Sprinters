import React, { useState } from 'react'
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

const ConatctSupport = () => {
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
             Contact Update
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
<form 
// onSubmit={handleSubmit}
>
  <CardContent>

   

   


<Box>
<InputLabel htmlFor="name" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Name</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-field"
name="name"
variant="outlined"
// label="Input Field"
placeholder="Name"
// value={formData.name}
// onChange={handleChange}
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
           Name
            </Button>
          </CardActions>
</form>
</Card>

<Card sx={{width:"100%",m:1.5,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",borderRadius:"20px"}}>
<form 
// onSubmit={handleSubmit}
>
  <CardContent>
<Box>
<InputLabel htmlFor="name" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Email Addresses</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-field"
name="name"
variant="outlined"
// label="Input Field"
placeholder="Email Addresses"
// value={formData.name}
// onChange={handleChange}
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
     Email Addresses
            </Button>
          </CardActions>
</form>
</Card>
{/* <Card sx={{width:"100%",m:1.5,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",borderRadius:"20px"}}>
<form 
// onSubmit={handleSubmit}
>
  <CardContent>
<Box>
<InputLabel htmlFor="name" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Update Facebook URL</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-field"
name="name"
variant="outlined"
// label="Input Field"
placeholder="Update Facebook URL"
// value={formData.name}
// onChange={handleChange}
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
         Update Facebook URL
            </Button>
          </CardActions>
</form>
</Card>
<Card sx={{width:"100%",m:1.5,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",borderRadius:"20px"}}>
<form 
// onSubmit={handleSubmit}
>
  <CardContent>
<Box>
<InputLabel htmlFor="name" sx={{color:"black",fontSize:"1.5rem" ,}}>Update LinkedIn URL</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-field"
name="name"
variant="outlined"
// label="Input Field"
placeholder="Update LinkedIn URL"
// value={formData.name}
// onChange={handleChange}
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
        Update LinkedIn URL 
            </Button>
          </CardActions>
</form>
</Card> */}


      </Container>
      </Box>
    
    </>
  )
}

export default ConatctSupport
