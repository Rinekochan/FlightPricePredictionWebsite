import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import VietAvatar from '../../assets/VietAvatar.png';
import SiradanaiAvatar from '../../assets/SiradanaiAvatar.jpg';
import PawaritAvatar from '../../assets/PawaritAvatar.JPG';

function AboutProfileCarousel() {
    var profiles = [
        {
            name: "Viet Hoang Pham",
            title: "CEO of Kamikaze Company",
            image: VietAvatar,
            content: "At Kamikaze Company, we are dedicated to revolutionizing the way travellers book their flights. We believe our product that not only saves time and money but also enhances your travel experience."
        },
        {
            name: "Siradanai Inchansuk",
            title: "CTO of Kamikaze Company",
            image: SiradanaiAvatar,
            content: "Not only simple prediction, our website also offers a wide range of functionalities including recommendation and classification with an accuracy of up to 79.99%."
        },
        {
            name: "Pawarit Sethi",
            title: "COO of Kamikaze Company",
            image: PawaritAvatar,
            content: "I'm a year 2 computer science student from Thailand enjoying my time here in Melbourne so far! Working on this project has been great, colloboration with these 2 guys have been super solid as well!"
        }
    ];

    return (
        <Box sx={{ width: "75%", my: 6, color: "#494949", mx: 'auto' }}>
            <Carousel animation="slide" navButtonsAlwaysVisible autoPlay={false}>
                {profiles.map((profile, index) => (
                    <Box
                        key={`about-carousel-${index}`}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: { xs: 'center', md: 'left' },
                            maxWidth: '900px',
                            mx: 'auto',
                            p: 3,
                        }}
                    >
                        <Avatar
                            alt={profile.name}
                            src={profile.image}
                            sx={{
                                width: 120,
                                height: 120,
                                mr: { md: 4, xs: 0 },
                                mb: { xs: 2, md: 0 },
                            }}
                        />

                        <Box>
                            <Typography variant="body1" color="textSecondary" sx={{ color: 'black', mb: 2 }}>
                                {profile.content}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {profile.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {profile.title}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}

export default AboutProfileCarousel;
