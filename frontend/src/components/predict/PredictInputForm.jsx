import React, {useState} from 'react'
import { Typography, TextField, Button, Paper, Grid, Box,CircularProgress } from '@mui/material';
import axios from 'axios';

function PredictInputForm({ setPredictedPrice }) {
  const [inputPredictedYear, setInputPredictedYear] = useState('');
  const [inputPredictedQuarter, setInputPredictedQuarter] = useState('');
  const [inputPredictedDistance, setInputPredictedDistance] = useState('');
  const [inputPredictedPassengers, setInputPredictedPassengers] = useState('');
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setPredictedPrice(null); // Reset prediction state on new submit
    setLoading(true);

    const requestData = {
      year: parseInt(inputPredictedYear),
      quarter: parseInt(inputPredictedQuarter),
      distance: parseInt(inputPredictedDistance),
      passengers: parseInt(inputPredictedPassengers)
    };
  
    try {
      // POST request to your prediction API
      const response = await axios.post('http://localhost:8000/predict/', requestData);
      setPredictedPrice({
          year: parseInt(requestData.year),
          quarter: parseInt(requestData.quarter),
          price: response.data.predicted_price,
      });
    } catch (error) {
      setError('Error predicting price. Please try again.');
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Flight Price Prediction
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Year (must after 2024)" variant="outlined" value={inputPredictedYear} onChange={(e) => setInputPredictedYear(e.target.value)} required/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Quarter in the Year" variant="outlined" value={inputPredictedQuarter} onChange={(e) => setInputPredictedQuarter(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Distance" variant="outlined" value={inputPredictedDistance} onChange={(e) => setInputPredictedDistance(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="number" label="Passengers" variant="outlined" value={inputPredictedPassengers} onChange={(e) => setInputPredictedPassengers(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} >
                {loading ? <CircularProgress size={24} /> : 'Predict Price'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}

export default PredictInputForm
