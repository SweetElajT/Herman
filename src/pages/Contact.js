import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
    // Funkcja obsługująca wysyłanie formularza
    const handleSubmit = (event) => {
        event.preventDefault();
        // Tutaj logika do obsługi danych formularza, np. wysyłanie do API
        console.log('Formularz wysłany');
    };

    return (
        <Layout>
            <Box sx={{ my: 5, mx: 2 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Skontaktuj się z nami
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Formularz kontaktowy</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Twój adres e-mail"
                                type="email"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                required
                                id="subject"
                                name="subject"
                                label="Temat"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                required
                                id="message"
                                name="message"
                                label="Wiadomość"
                                multiline
                                rows={4}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Wyślij
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Informacje kontaktowe</Typography>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <LocationOnIcon sx={{ mr: 1 }} color="action" />
                                <Typography>ul. Miodowa 123, 00-000 Miodowo</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <PhoneIcon sx={{ mr: 1 }} color="action" />
                                <Typography>+48 123 456 789</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <EmailIcon sx={{ mr: 1 }} color="action" />
                                <Typography>kontakt@myrestaurant.pl</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <AccessTimeIcon sx={{ mr: 1 }} color="action" />
                                <Typography>Pon - Pt: 9:00 - 17:00</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default Contact;
