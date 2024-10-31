import React from 'react'
import { Box, Typography } from '@mui/material';

// This is the FooterAddress component
function FooterAddress() {
    return (
        <Box>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '14px', color: 'gray', mb: 1 }}>
                John St, Hawthorn, VIC 3122, Australia
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '14px', color: 'gray' }}>
                © 2024 Kamikaze Company. All rights reserved.
            </Typography>
        </Box>
    )
}

export default FooterAddress
