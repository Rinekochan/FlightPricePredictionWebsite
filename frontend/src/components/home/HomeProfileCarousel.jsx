import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import VietAvatar from '../../assets/VietAvatar.png'
import SiradanaiAvatar from '../../assets/SiradanaiAvatar.jpg'
import PawaritAvatar from '../../assets/PawaritAvatar.JPG'

function HomeProfileCarousel() {
    // Array of profile objects containing information for the carousel
    const profiles = [
        {
            name: "Viet Hoang Pham",
            title: "CEO of Kamikaze Company",
            image: VietAvatar,
            content: "At Kamikaze Company, we are dedicated to revolutionizing the way travellers book their flights. We believe our product that not only save time and money but also enhance your travel experience."
        },
        {
            name: "Siradanai Inchansuk",
            title: "CTO of Kamikaze Company",
            image: SiradanaiAvatar,
            content: "Not only simple prediction, our website also offers a wide range of funcationalities including recommendation and classification with the accuracy up to 79.99%."
        },
        {
            name: "Pawarit Sethi",
            title: "COO of Kamikaze Company",
            image: PawaritAvatar,
            content: "Our website offers an user-friendly and accessbility layout, with a commitment to support everyone from all walks of life."
        }
    ]

    return (
        <Box sx={{ width: "75%", my: 6, color: "#494949", mx: 'auto' }}>
            <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
                {
                    profiles.map((profile, index) => (
                        <Box key={`carousel-${index}`} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '700px', mx: 'auto', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Profile content */}
                            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '700px', margin: '0 auto', color: 'black' }}>
                                {profile.content}
                            </Typography>

                            {/* Avatar image of the profile */}
                            <Avatar alt={profile.name} src={profile.image} sx={{ mt: 3, width: 48, height: 48 }} />

                            {/* Profile name and title */}
                            <Typography variant="body1" sx={{ mt: 1, fontSize: '14px' }}>
                                {`${profile.name}, ${profile.title}`}
                            </Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default HomeProfileCarousel
