import React, { useState } from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import { Box } from '@mui/material';
import ClassifyInputForm from '../components/classify/ClassifyInputForm';
import ClassifyVisualisation from '../components/classify/ClassifyVisualisation';

function ClassifyPage() {
    const [classifiedCategory, setClassifiedCategory] = useState("Unknown");
    const [classifiedConfidence, setClassifiedConfidence] = useState({ Low: 0, Medium: 0, High: 0});

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            {/* This is the input component of ClassifyPage */}
            <ClassifyInputForm setClassifiedCategory={setClassifiedCategory} setClassifiedConfidence={setClassifiedConfidence} />

            {/* This is the visualisation component of ClassifyPage */}
            <Box sx={{ p: 3 }}>
                <ClassifyVisualisation classifiedCategory={classifiedCategory} classifiedConfidence={classifiedConfidence}/>
            </Box>
            <Footer />
        </Box>
    )
}

export default ClassifyPage
