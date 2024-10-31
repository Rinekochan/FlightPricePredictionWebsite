import React, { useState } from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import Footer from '../components/shared/Footer/Footer';
import { Box } from '@mui/material';
import ClassifyInputForm from '../components/classify/ClassifyInputForm'; // Adjust the path as necessary

function ClassifyPage() {
    const [classificationResult, setClassificationResult] = useState(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <ClassifyInputForm setClassificationResult={setClassificationResult} />
            <Box sx={{ p: 3 }}>
            </Box>
            <Footer />
        </Box>
    );
}

export default ClassifyPage;
