import React from 'react'
import { Snackbar, Alert } from '@mui/material';

// This is Snackbar Alert component
function SnackbarAlert({ snackbarMessage, snackbarSeverity, setSnackbarOpen, snackbarOpen }) {

    // Handle snackbar closing event
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackbarAlert
