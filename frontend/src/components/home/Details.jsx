import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Fly from '../../assets/FlightHappy.jpg';

function Features() {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px' }}>
      <Grid container spacing={4} 
        justifyContent="center" 
        sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <FeatureCard
          icon="👍"
          title="Easy to use"
          description="Enjoy seamless interaction with minimal effort, where you can find what you need quickly and efficiently."
        />
        <FeatureCard
          icon="📏"
          title="Accurate"
          description="Our model is thoroughly tested and measured by many experts to ensure high accuracy up to 99.9%."
        />
        <FeatureCard
          icon="📱"
          title="Use as you go"
          description="Need to find cheap flights quickly? We’ll guide you to the best values wherever you want, whenever you go."
        />
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '40px' }}>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            What do we offer?
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: 'black', fontSize: '16px', maxWidth: '400px', margin: '0 auto' }}>
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

function FeatureCard({ icon, title, description }) {
  return (
    <Grid item xs={12} sm={4} textAlign="center" sx={{ padding: '10px 20px' }}>
      <Typography variant="h3" color="textSecondary" sx={{ fontSize: '40px', color: '#555' }}>
        {icon}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ color: '#666' }}>
        {description}
      </Typography>
    </Grid>
  );
}

export default Features;
