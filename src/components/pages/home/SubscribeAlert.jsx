import React from 'react'
import { Snackbar, Alert } from '@mui/material';

function SubscribeAlert({subscribeAlert, setSubsribeAlert}) {

    const handleSubscribeAlertClose = () => {
        setSubsribeAlert(false)
    }
    console.log(subscribeAlert);
    console.log(setSubsribeAlert);

    return (
        <>
            <Snackbar open={subscribeAlert} autoHideDuration={6000} onClose={handleSubscribeAlertClose}>
                <Alert onClose={handleSubscribeAlertClose} severity="success" sx={{ width: '100%' }}>
                    {`You've subscribed to our newsletter!`}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SubscribeAlert
