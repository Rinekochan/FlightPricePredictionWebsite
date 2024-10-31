import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid2 as Grid } from '@mui/material';
import SnackbarAlert from '../shared/SnackbarAlert';

const ContactForm = () => {
    // State to hold form data (email and name)
    const [formData, setFormData] = useState({ email: '', name: '' });
    // State to manage the visibility of the subscription alert
    const [subscribeAlert, setSubsribeAlert] = useState(false);
    
    // Function to open the subscription alert
    const handleSubscribeAlertOpen = () => {
        setSubsribeAlert(true); // Set alert state to true
    };

    // Function to handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setFormData({ ...formData, [name]: value }); // Update the form data state
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        handleSubscribeAlertOpen(); // Trigger the alert on submission
    };
    return (
        <Box sx={{ textAlign: 'center', padding: '50px' }}>
            <Typography variant="h5" component ='h2' gutterBottom sx={{ fontWeight: 'bold' }}>
                Get In Touch
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '700px', margin: '0 auto', color: 'black' }}>
                Subscribe now to our flight price prediction service and receive personalised alerts directly to your inbox. Be the first to know when prices drop, so you can book your dream trip at the lowest possible cost.
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item size={{xs: 12, sm: 6, md: 2.5}}>
                        <TextField fullWidth placeholder="Email address" type="email" name="email" variant="outlined" value={formData.email} onChange={handleChange} required InputProps={{ style: { height: '40px', borderRadius: '4px', color: 'black' }, }}/>
                    </Grid>
                    <Grid item size={{xs: 12, sm: 6, md: 2.5}}>
                        <TextField fullWidth placeholder="Full name" type="text" name="name" variant="outlined" value={formData.name} onChange={handleChange} required InputProps={{ style: { height: '40px', borderRadius: '4px', color: 'black' }, }}
                        />
                    </Grid>
                    <Grid item size={{xs: 12, sm: 12, md: 1}}>
                        <Button type="submit" variant="contained" sx={{ width: '100%', height: '40px', backgroundColor: '#333333', color: 'white', fontWeight: 'bold', textTransform: 'none', '&:hover': { backgroundColor: '#222222'} }} >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <SnackbarAlert snackbarMessage={`You've subscribed to our newsletter!`} snackbarSeverity={"success"} snackbarOpen={subscribeAlert} setSnackbarOpen={setSubsribeAlert} />
        </Box >
    );
};

export default ContactForm;
