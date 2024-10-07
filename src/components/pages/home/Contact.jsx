import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({ email: '', name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${formData.email}, Name: ${formData.name}`);
    };

    return (
        <Box sx={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Get In Touch
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                sx={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    color: '#6e6e6e',
                    fontSize: '16px'
                }}
            >
                Subscribe now to our flight price prediction service and receive personalised alerts directly to your inbox. Be the first to know when prices drop, so you can book your dream trip at the lowest possible cost.
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={5} md={3}>
                        <TextField
                            fullWidth
                            placeholder="Email address"
                            type="email"
                            name="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { height: '40px', borderRadius: '4px', color: '#8e8e8e' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} md={3}>
                        <TextField
                            fullWidth
                            placeholder="Full name"
                            type="text"
                            name="name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { height: '40px', borderRadius: '4px', color: '#8e8e8e' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2} md={1}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                height: '40px',
                                backgroundColor: '#333333',
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#222222',
                                }
                            }}
                        >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default ContactForm;
