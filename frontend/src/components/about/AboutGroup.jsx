import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

function AboutGroup() {
    return (
        <Box sx={{ my: 5, flexGrow: 1, px: 3 }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, pl: { xs: '20px', sm: '50px', md: '100px', lg: '150px' } }}>
                        How we began
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2, pl: { xs: '20px', sm: '50px', md: '100px', lg: '150px' } }}>
                        It started at room EN207...
                    </Typography>
                    <Typography variant="body1" sx={{ pl: { xs: '20px', sm: '50px', md: '100px', lg: '150px' } }}>
                        We were 3 students studying computer science with the vision to develop a tool to help people live better. We were inspired and all have this fire and sparkles in our eyes. Passion to strive is what made us form a group together, under the name of "Kamikaze".
                    </Typography>
                </Grid>

                {/* group image */}
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Box sx={{ width: '100%', height: 'auto', maxWidth: '500px', margin: 'auto' }}>
                        <Box sx={{ width: '100%', height: '250px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            group image here boys
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutGroup;
