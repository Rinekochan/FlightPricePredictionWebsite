import React, { useState } from 'react'
import { Typography, TextField, Button, Paper, Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import SnackbarAlert from '../shared/SnackbarAlert';

function ClassifyInputForm({ setClassifiedCategory, setClassifiedConfidence }) {
    const [inputClassifiedYear, setInputClassifiedYear] = useState('');
    const [inputClassifiedQuarter, setInputClassifiedQuarter] = useState('');
    const [inputClassifiedDistance, setInputClassifiedDistance] = useState('');
    const [inputClassifiedPassengers, setInputClassifiedPassengers] = useState('');
    const [inputClassifiedPrice, setInputClassifiedPrice] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false); // Controls visibility of SnackbarAlert
    const [snackbarMessage, setSnackbarMessage] = useState(''); // Sets the message displayed in SnackbarAlert
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Severity level for SnackbarAlert ('success' or 'error')
    const [loading, setLoading] = useState(false); // Controls loading state for the submit button

    const handleSubmit = async (event) => {
        event.preventDefault();
        setClassifiedCategory("Unknown"); // Reset classified category on new submit
        setClassifiedConfidence({ Low: 0, Medium: 0, High: 0 }); // Reset classified confidence on new submit
        setLoading(true);

        const requestData = {
            year: parseInt(inputClassifiedYear),
            quarter: parseInt(inputClassifiedQuarter),
            distance: parseInt(inputClassifiedDistance),
            passengers: parseInt(inputClassifiedPassengers),
            price: parseInt(inputClassifiedPrice)
        };

        // Validate input before sending request
        if (parseInt(inputClassifiedYear) > 2024 || parseInt(inputClassifiedYear) < 2014) {
            setSnackbarMessage('Year must be between 2014 and 2024.');
            setSnackbarOpen(true);
            setSnackbarSeverity('error');
            setLoading(false);
            return;
        }
        if (parseInt(inputClassifiedQuarter) < 1 || parseInt(inputClassifiedQuarter) > 4) {
            setSnackbarMessage('Quarter must be between 1 and 4.');
            setSnackbarOpen(true);
            setSnackbarSeverity('error');
            setLoading(false);
            return;
        }
        if (parseInt(inputClassifiedDistance) <= 0) {
            setSnackbarMessage('Distance must be greater than 0.');
            setSnackbarOpen(true);
            setSnackbarSeverity('error');
            setLoading(false);
            return;
        }
        if (parseInt(inputClassifiedPassengers) <= 0) {
            setSnackbarMessage('Number of passengers must be greater than 0.');
            setSnackbarOpen(true);
            setSnackbarSeverity('error');
            setLoading(false);
            return;
        }
        if (parseInt(inputClassifiedPrice) <= 0) {
            setSnackbarMessage('Price of the flight must be greater than 0.');
            setSnackbarOpen(true);
            setSnackbarSeverity('error');
            setLoading(false);
            return;
        }

        try {
            // POST request to your prediction API
            const response = await axios.post('/classify/', requestData);

            setClassifiedCategory(response.data.category || "Unknown");
            setClassifiedConfidence(response.data.confidence || { Low: 0, Medium: 0, High: 0 })

            // Show success message
            setSnackbarMessage(`Price Classification Success`);
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        } catch (error) {
            console.error("Error fetching classification:", error);

            // Show error message
            setSnackbarMessage('Error classifying price. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        } finally {
            setLoading(false)
        }
    };

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ my: 8, textAlign: 'center', fontWeight: 'bold' }}> Classify Price </Typography>
            <Paper elevation={3} sx={{ p: 3, width: "85%", margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="number" label="Year (between 2014 and 2024)" variant="outlined" value={inputClassifiedYear} onChange={(e) => setInputClassifiedYear(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="number" label="Quarter" variant="outlined" value={inputClassifiedQuarter} onChange={(e) => setInputClassifiedQuarter(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="number" label="Distance (miles)" variant="outlined" value={inputClassifiedDistance} onChange={(e) => setInputClassifiedDistance(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="number" label="Passengers" variant="outlined" value={inputClassifiedPassengers} onChange={(e) => setInputClassifiedPassengers(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth type="number" label="Price ($)" variant="outlined" value={inputClassifiedPrice} onChange={(e) => setInputClassifiedPrice(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="success" fullWidth disabled={loading} sx={{ background: "#3F4B3B" }} >
                                {loading ? <CircularProgress size={24} /> : 'Classify Price'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <SnackbarAlert snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} />
        </Box>

    )
}

export default ClassifyInputForm
