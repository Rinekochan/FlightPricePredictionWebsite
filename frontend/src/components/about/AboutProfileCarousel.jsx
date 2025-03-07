import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Viet from '../../assets/Viet.jpg';
import Siradanai from '../../assets/SiradanaiAvatar.jpg';
import Pawarit from '../../assets/Pawarit.JPG';

function AboutProfileCarousel() {
    // Array of profile objects containing information for each team member
    const profiles = [
        {
            name: "Viet Hoang Pham",
            title: "CEO of Kamikaze Company",
            image: Viet,
            content: "My name is Viet Hoang Pham, though I often go by Henry. I'm currently a sophomore at Swinburne University of Technology in Australia, where I’m pursuing a Bachelor of Computer Science. Alongside my studies, I’m also the founder of my own company, where I get to explore one of my deepest passions—integrating machine learning into daily life. My journey in computer science has always been fueled by curiosity about how technology, especially machine learning, can enhance our day-to-day experiences in meaningful ways."
        },
        {
            name: "Siradanai Inchansuk",
            title: "CTO of Kamikaze Company",
            image: Siradanai,
            content: "I’m Siradanai Inchansuk, but friends usually call me Prem. I’m a second year student in computer science from Bangkok Thailand, currently studying at Swinburne University of Technology. My fascination with coding and web technology led me to pursue this path. I am always learning new tools that are constantly being developed especially in the software development sector."
        },
        {
            name: "Pawarit Sethi",
            title: "COO of Kamikaze Company",
            image: Pawarit,
            content: "I’m Pawarit Sethi, though most people just call me Dee. I’m a second-year computer science student from Phuket, Thailand, currently studying at Swinburne University of Technology. I’ve always been curious about tech and how things work behind the scenes, so computer science just felt like the perfect fit. Away from coding, I enjoy spending time with friends, exploring new places, and learning more about everything from software development to the latest tech trends. It’s a journey, but I’m excited to keep learning and growing!"
        }
    ];

    return (
        <Box sx={{ width: "80%", my: 6, mx: 'auto', textAlign: 'center' }}>
            {/* Heading for the section */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                Meet our team
            </Typography>

            {/* Subheading to describe the team */}
            <Typography variant="body1" sx={{ mb: 4, color: 'textSecondary' }}>
                Three computer science students from Swinburne University of Technology
            </Typography>

            {/* Carousel component to slide through profiles */}
            <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
                {profiles.map((profile, index) => ( // Map through profiles array to display each profile
                    <Grid key={`carousel-${index}`} container alignItems="flex-start" spacing={3} justifyContent="center" sx={{ textAlign: 'left', maxWidth: '900px', width: "100%", mx: 'auto' }}>
                        <Grid item xs={12} md={6}>
                            <Box component="img" alt={profile.name} src={profile.image} sx={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover', borderRadius: '8px' }} />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 0, color: "#333"}}>
                                {profile.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 2, color: '#777'}}>
                                {profile.title}
                            </Typography>
                            <Typography variant="body1">
                                {profile.content}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Carousel>
        </Box>
    );
}

export default AboutProfileCarousel;
