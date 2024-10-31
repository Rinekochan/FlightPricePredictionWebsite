import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import SnackbarAlert from '../shared/SnackbarAlert';

function ClassifyInputForm({ setClassificationResult }) {
  const [inputDistance, setInputDistance] = useState('');
  const [inputPassengers, setInputPassengers] = useState('');
  const [inputClass, setInputClass] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClassificationResult(null); // Reset classification result on new submit
    setLoading(true);

    const requestData = {
      distance: parseInt(inputDistance),
      passengers: parseInt(inputPassengers),
      inputClass: inputClass // Include other necessary inputs
    };

    // Validate input before sending request
    if (parseInt(inputDistance) <= 0) {
      setSnackbarMessage('Distance must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    if (parseInt(inputPassengers) <= 0) {
      setSnackbarMessage('Number of passengers must be greater than 0.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setLoading(false);
      return;
    }
    try {
      // POST request to your classification API
      const response = await axios.post('http://localhost:8000/classify/', requestData);
      setClassificationResult({
        class: response.data.class, // Adjust based on your API response
        probability: response.data.probability // If applicable
      });

      // Show success message
      setSnackbarMessage(`Predicted Class: ${response.data.class}`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching classification:", error);

      // Show error message
      setSnackbarMessage('Error classifying input. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 8, textAlign: 'center', fontWeight: 'bold' }}> Flight Class Classification </Typography>
      <Paper elevation={3} sx={{ p: 3, width: "85%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Distance (miles)" variant="outlined" value={inputDistance} onChange={(e) => setInputDistance(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Passengers" variant="outlined" value={inputPassengers} onChange={(e) => setInputPassengers(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="success" fullWidth disabled={loading} sx={{ background: "#3F4B3B" }}>
                {loading ? <CircularProgress size={24} /> : 'Classify'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <SnackbarAlert snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} />
    </Box>
  );
}

export default ClassifyInputForm;
