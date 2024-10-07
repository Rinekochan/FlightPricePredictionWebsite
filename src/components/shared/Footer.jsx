import React from 'react';
import { Box, Typography, Link, Divider, Grid } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#e8e8e8',
                padding: '50px 0',
                textAlign: 'center',
                fontFamily: "'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'", // Set font globally for Footer
            }}
        >
            <Grid container justifyContent="center" spacing={7}>
                <Grid item>
                    <Link
                        href="/"
                        color="inherit"
                        underline="none"
                        sx={{
                            fontSize: '16px',
                            color: 'gray',
                        }}
                    >
                        Home
                    </Link>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            fontSize: '24px',
                            color: 'lightgray',
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: -1,
                        }}
                    >
                        |
                    </Typography>
                </Grid>
                <Grid item>
                    <Link
                        href="/about"
                        color="inherit"
                        underline="none"
                        sx={{
                            fontSize: '16px',
                            color: 'gray',
                        }}
                    >
                        About
                    </Link>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            fontSize: '24px',
                            color: 'lightgray',
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: -1,
                        }}
                    >
                        |
                    </Typography>
                </Grid>
                <Grid item>
                    <Link
                        href="/flight"
                        color="inherit"
                        underline="none"
                        sx={{
                            fontSize: '16px',
                            color: 'gray',
                        }}
                    >
                        Flights
                    </Link>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: '#EBEBEB', my: 2, width: '60px', margin: '25px auto' }} />

            <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                    fontSize: '14px',
                    color: 'gray',
                    mb: 1,
                }}
            >
                John St, Hawthorn, VIC 3122, Australia
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                    fontSize: '14px',
                    color: 'gray',
                }}
            >
                © 2024 Kamikaze Company. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
