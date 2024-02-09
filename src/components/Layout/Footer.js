import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const hoverStyle = {
        textDecoration: 'none', // This will ensure that the links are not underlined
        '&:hover': {
            color: 'darkgray', // Change this value to your preferred color for hover state
            textDecoration: 'none', // This ensures that the underline does not appear on hover
            transition: 'color 0.3s',
        },
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1A1A19",
                color: "white",
                p: 3,
                mt: 'auto',
            }}
        >
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Mapa strony
                    </Typography>
                    <Box>
                        <Link href="/menu" color="inherit" sx={hoverStyle}>Menu</Link><br />
                        <Link href="/about" color="inherit" sx={hoverStyle}>O nas</Link><br />
                        <Link href="/contact" color="inherit" sx={hoverStyle}>Kontakt</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* You can add more content here if necessary */}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Śledź nas
                    </Typography>
                    <Box>
                        <Link href="https://www.facebook.com" color="inherit" sx={{ ...hoverStyle, display: 'flex', alignItems: 'center', mb: 1 }}>
                            <FacebookIcon sx={{ mr: 1 }}/> Facebook
                        </Link>
                        <Link href="https://www.twitter.com" color="inherit" sx={{ ...hoverStyle, display: 'flex', alignItems: 'center', mb: 1 }}>
                            <TwitterIcon sx={{ mr: 1 }}/> Twitter
                        </Link>
                        <Link href="https://www.instagram.com" color="inherit" sx={{ ...hoverStyle, display: 'flex', alignItems: 'center', mb: 1 }}>
                            <InstagramIcon sx={{ mr: 1 }}/> Instagram
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography
                variant="body2"
                color="grey.500"
                mt={3}
                textAlign="center"
            >
                © 2024 Whataburger. Wszelkie prawa zastrzeżone.
            </Typography>
        </Box>
    );
};

export default Footer;
