import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import Swinburne from '../../assets/Swinburne.jpg'


function AboutGroup() {
    return (
        <Box sx={{ my: 5, flexGrow: 1 }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" >
                <Grid item xs={12} md={6} >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, pl: { xs: '0px', sm: '50px', md: '100px', lg: '150px' }, maxWidth: '900px', width: "90%", mx: "auto" }}>
                        How we began
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2, pl: { xs: '0px', sm: '50px', md: '100px', lg: '150px' }, maxWidth: '900px', width: "90%", mx: "auto" }}>
                        It started at room EN207...
                    </Typography>
                    <Typography variant="body1" sx={{ pl: { xs: '0px', sm: '50px', md: '100px', lg: '150px' }, maxWidth: '900px', width: "90%", mx: "auto" }}>
                        Three computer science students brought together by a shared vision: to build something meaningful that could help people make smarter decisions. We joined forces to form what is now known as Kamikaze. Today, Kamikaze has grown into a platform dedicated to flight predictions—giving travellers better insights into flight prices and helping them plan with confidence.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Box sx={{ width: '90%', height: 'auto', maxWidth: '500px', margin: 'auto' }}>
                        <Box component="img" src={Swinburne} alt="Swinburne Image" sx={{ width: '100%', height: 'auto', maxWidth: '500px', margin: 'auto', border: '1px solid lightgray', borderRadius: '8px' }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutGroup;
