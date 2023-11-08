import React from 'react'
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
const News = () => {
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
              Add Update News
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
<InputLabel htmlFor="title" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Update News Title</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
id="input-title"
name="title"
variant="outlined"
// label="Input Field"
placeholder="Enter Update News Title"
// value={formData.title}
// onChange={handleChange}
/>
</Box>


<Box>
<InputLabel htmlFor="title" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Update News Details</InputLabel>
<TextField
sx={{
     
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
fullWidth
multiline
rows={4}
id="input-details"
name="details"
variant="outlined"
// label="Input Field"
placeholder="Enter Update News Details"
// value={formData.details}
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
           Add New Update News
            </Button>
          </CardActions>
</form>
</Card>

      </Container>
      </Box>
    
    </>
  )
}

export default News
