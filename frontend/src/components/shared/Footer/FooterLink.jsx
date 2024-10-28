import React from 'react'
import { Box, Typography, Link } from '@mui/material';

function FooterLink() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Link href="/" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Home
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/about" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                About
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/flight" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Flight
            </Link>
        </Box>
    )
}

export default FooterLink
