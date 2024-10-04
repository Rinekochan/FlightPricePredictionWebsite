import React from 'react'
import {
    AirplanemodeActive as AirplanemodeActiveIcon,
} from '@mui/icons-material';
import NavDrawer from './NavDrawer';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import {
    Toolbar, Typography, Box, useMediaQuery
} from '@mui/material';

function ToolBar() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md')); // Adjust according to your breakpoint
    return (
        <Toolbar>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: isMobile ? 1 : 0 }}>
                <AirplanemodeActiveIcon sx={{ ml: 5, mr: 1.5 }} />
                <Typography variant="h6">
                    Kamikaze
                </Typography>
            </Box>
            {
                isMobile ?
                    ( // If the screen size is as small as mobile screen, show drawer
                        <NavDrawer />
                    ) : ( // else show normal buttons
                        <NavButton />
                    )
            }
        </Toolbar>
    )
}

export default ToolBar
