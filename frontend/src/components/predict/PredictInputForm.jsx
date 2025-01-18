import React, { useState } from 'react'
import { Typography, TextField, Button, Paper, Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import SnackbarAlert from '../shared/SnackbarAlert';

function PredictInputForm({ setPredictedPrice }) {
  const [inputPredictedYear, setInputPredictedYear] = useState('');
  const [inputPredictedQuarter, setInputPredictedQuarter] = useState('');
  const [inputPredictedDistance, setInputPredictedDistance] = useState('');
  const [inputPredictedPassengers, setInputPredictedPassengers] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPredictedPrice(null); // Reset prediction state on new submit
    setLoading(true);

    const requestData = {
      year: parseInt(inputPredictedYear),
      quarter: parseInt(inputPredictedQuarter),
      distance: parseInt(inputPredictedDistance),
      passengers: parseInt(inputPredictedPassengers)
    };

    // Validate input before sending request
    if (parseInt(inputPredictedYear) <= 2024) {
      setSnackbarMessage('Year must be greater than 2024.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    if (parseInt(inputPredictedQuarter) < 1 || parseInt(inputPredictedQuarter) > 4) {
      setSnackbarMessage('Quarter must be between 1 and 4.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    if (parseInt(inputPredictedDistance) <= 0) {
      setSnackbarMessage('Distance must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    if (parseInt(inputPredictedPassengers) <= 0) {
      setSnackbarMessage('Number of passengers must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }

    try {
      // POST request to your prediction API
      const response = await axios.post('/predict/', requestData);
      setPredictedPrice({
        year: parseInt(requestData.year),
        quarter: parseInt(requestData.quarter),
        price: response.data.predicted_price,
      });

      // Show success message
      setSnackbarMessage(`Predicted Price: $${response.data.predicted_price}`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching prediction:", error);

      // Show error message
      setSnackbarMessage('Error predicting price. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 8, textAlign: 'center', fontWeight: 'bold' }}> Price Prediction </Typography>
      <Paper elevation={3} sx={{ p: 3, width: "85%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Year (must after 2024)" variant="outlined" value={inputPredictedYear} onChange={(e) => setInputPredictedYear(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Quarter in the Year" variant="outlined" value={inputPredictedQuarter} onChange={(e) => setInputPredictedQuarter(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Distance (miles)" variant="outlined" value={inputPredictedDistance} onChange={(e) => setInputPredictedDistance(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Passengers" variant="outlined" value={inputPredictedPassengers} onChange={(e) => setInputPredictedPassengers(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="success" fullWidth disabled={loading} sx={{ background: "#3F4B3B" }} >
                {loading ? <CircularProgress size={24} /> : 'Predict Price'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <SnackbarAlert snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} />
    </Box>

  )
}

export default PredictInputForm
