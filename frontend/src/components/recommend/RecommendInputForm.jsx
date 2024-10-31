import React, { useState } from 'react'
import { Typography, TextField, Button, Paper, Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import SnackbarAlert from '../shared/SnackbarAlert';

function RecommendInputForm({ setSimilarFlights, inputRecommendedPrice, setInputRecommendedPrice, inputRecommendedDistance, setInputRecommendedDistance }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Controls visibility of SnackbarAlert
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Sets the message displayed in SnackbarAlert
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Severity level for SnackbarAlert ('success' or 'error')
  const [loading, setLoading] = useState(false); // Controls loading state for the submit button

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSimilarFlights([]); // Reset similar flights on new submit
    setLoading(true);

    const requestData = {
      price: parseInt(inputRecommendedPrice),
      distance: parseInt(inputRecommendedDistance)
    };

    // Validate input before sending request
    if (parseInt(inputRecommendedPrice) <= 0) {
      setSnackbarMessage('Price must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    if (parseInt(inputRecommendedDistance) <= 0) {
      setSnackbarMessage('Distance must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }

    try {
      // POST request to your prediction API
      const response = await axios.post('http://localhost:8000/recommend/', requestData);
      setSimilarFlights(response.data.similar_flights || []);

      // Show success message
      setSnackbarMessage(`Flight Recommendation Success`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching prediction:", error);

      // Show error message
      setSnackbarMessage('Error recommending flights. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 8, textAlign: 'center', fontWeight: 'bold' }}> Recommend Similar Flights </Typography>
      <Paper elevation={3} sx={{ p: 3, width: "85%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Price ($)" variant="outlined" value={inputRecommendedPrice} onChange={(e) => setInputRecommendedPrice(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Distance (miles)" variant="outlined" value={inputRecommendedDistance} onChange={(e) => setInputRecommendedDistance(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="success" fullWidth disabled={loading} sx={{ background: "#3F4B3B" }} >
                {loading ? <CircularProgress size={24} /> : 'Find Similar Flights'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <SnackbarAlert snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} />
    </Box>

  )
}

export default RecommendInputForm
