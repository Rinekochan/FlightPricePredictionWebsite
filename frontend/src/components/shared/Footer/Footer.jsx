import React from 'react';
import { Box, Divider, useMediaQuery } from '@mui/material';
import FooterAddress from './FooterAddress';
import FooterLink from './FooterLink';

function Footer() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <Box component="footer" sx={{ backgroundColor: '#e8e8e8', padding: '50px 0', textAlign: 'center' }} >
            {
                !isMobile ? <FooterLink /> : <></> // If the screen size is as small as mobile screen, show footer link
                    
            }
            <Divider sx={{ backgroundColor: '#EBEBEB', my: 2, width: '60px', margin: '25px auto' }} />
            <FooterAddress />
        </Box>
    );
};

export default Footer;
