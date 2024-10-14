import React from 'react';
import { Box, Divider } from '@mui/material';
import FooterAddress from './FooterAddress';
import FooterLink from './FooterLink';  

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#e8e8e8', padding: '50px 0', textAlign: 'center' }} >
            <FooterLink />
            <Divider sx={{ backgroundColor: '#EBEBEB', my: 2, width: '60px', margin: '25px auto' }} />
            <FooterAddress />
        </Box>
    );
};

export default Footer;
