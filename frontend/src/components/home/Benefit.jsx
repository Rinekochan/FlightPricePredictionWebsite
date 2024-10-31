import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Fly from '../../assets/FlightHappy.jpg';
import BenefitCard from './BenefitCard';

function Benefit() {
  return (
    <Box sx={{ textAlign: 'center', py: '100px' }}>
      {/* Grid layout for benefit cards */}
      <Grid container justifyContent="center" sx={{ margin: '0 auto' }}>
        <BenefitCard
          icon="👍"
          title="Easy to use"
          description="Enjoy seamless interaction with minimal effort, where you can find what you need quickly and efficiently."
        />
        <BenefitCard
          icon="📏"
          title="Accurate"
          description="Our model is thoroughly tested and measured by many experts to ensure high accuracy up to 99.9%."
        />
        <BenefitCard
          icon="📱"
          title="Use as you go"
          description="Need to find cheap flights quickly? We’ll guide you to the best values wherever you want, whenever you go."
        />
      </Grid>
      {/* Additional information section */}
      <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ mt: '80px', px: '40px' }}>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          {/* Title of the section */}
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            What do we offer?
          </Typography>
          {/* Content of the section */}
          <Typography variant="body1" color="textSecondary" sx={{ color: 'black', maxWidth: '400px', margin: '0 auto' }}>
            Our website gives you the ability to save money and make well-informed booking choices. Whether you’re
            planning a trip months in advance or looking for a last-minute getaway, we offer valuable insights to
            enhance your travel planning experience.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={Fly}
            alt="Person on airplane"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Benefit;
