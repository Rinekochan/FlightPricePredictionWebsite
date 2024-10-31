import React from 'react'

function BenefitCard({ icon, title, description }) {
    return (
        <Grid item xs={12} sm={3} textAlign="center" sx={{ my: "20px" }} >
            {/* Icon of the benefit card */}
            <Typography variant="h3" color="textSecondary" sx={{ fontSize: '40px', color: '#555' }}>
                {icon}
            </Typography>

            {/* Title of the benefit card */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
                {title}
            </Typography>

            {/* Content of the benefit card */}
            <Typography variant="body2" color="textSecondary" sx={{ color: 'black', maxWidth: '80%', margin: 'auto' }}>
                {description}
            </Typography>
        </Grid>
    );
}

export default BenefitCard
