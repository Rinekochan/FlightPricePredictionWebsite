import React from 'react'
import { Box, Typography, Link } from '@mui/material';

// This is the FooterLink component
function FooterLink() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            {/* Display a list of navigation links */}
            <Link href="/" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Home
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/about" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                About
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/predict" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Predict
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/recommend" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Recommend
            </Link>
            <Typography sx={{ display: 'inline', mt: -0.4 }}> | </Typography>
            <Link href="/classify" variant="h6" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px', mx: 2 }}>
                Classify
            </Link>
        </Box>
    )
}

export default FooterLink
