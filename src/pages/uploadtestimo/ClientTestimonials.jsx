import React, { useState, useEffect } from 'react';
import NavBar from '../../component/navbar/NavBar';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ClientTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    fetch('https://hotel-project.onrender.com/S-printer-App/TestimonialRoute/allTestimonials', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDI1ZDlhNjk2MjhlYzM5MmNhNjYyYSIsImlhdCI6MTY5OTQ1MjIyMiwiZXhwIjoxNjk5NDU1ODIyfQ.1zZ6vfRC3HQ5KMq27IPNX2I_xOa-OqLowsH0wFJ2HmM',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the testimonials in the state
        setTestimonials(data.result);
      })
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <>
      <NavBar>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: '#C97280',
            p: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 4,
              fontFamily: 'Arial, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#00000',
              textShadow: '2px 2px 4px rgba(0, 1, .7, 0.5)',
            }}
          >
            Client Testimonials
          </Typography>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User Name</TableCell>
                    <TableCell>Feedback</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testimonials.map((testimonial) => (
                    <TableRow key={testimonial._id}>
                      <TableCell>{testimonial.userName}</TableCell>
                      <TableCell>{testimonial.Feedback}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </NavBar>
    </>
  );
};

export default ClientTestimonials;
