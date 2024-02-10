// DeliveryCalculator.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import Layout from './../components/Layout/Layout';

const DeliveryCalculator = () => {
    const [distance, setDistance] = useState('');
    const [deliveryCost, setDeliveryCost] = useState('');

    const calculateDeliveryCost = () => {
        let cost = 0;
        const distanceNum = parseFloat(distance);

        if (distanceNum <= 10) {
            cost = distanceNum * 5;
        } else if (distanceNum <= 20) {
            cost = (10 * 5) + ((distanceNum - 10) * 10);
        } else {
            cost = (10 * 5) + (10 * 10) + ((distanceNum - 20) * 15);
        }

        setDeliveryCost(cost.toFixed(2));
    };

    return (
        <Layout>
            <Box sx={{ my: 5, mx: 'auto', p: 3, maxWidth: '900px' }}>
                <Typography variant="h4" gutterBottom>
                    Kalkulator dowozu
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    label="Ilość km"
                                    variant="outlined"
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
                                    fullWidth
                                />
                                <Button variant="contained" onClick={calculateDeliveryCost} color="primary">
                                    Oblicz koszt dowozu
                                </Button>
                                {deliveryCost && (
                                    <Typography variant="h6">
                                        Koszt dostawy: {deliveryCost} PLN
                                    </Typography>
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Stawki dostawy
                            </Typography>
                            <Box>
                                <Typography variant="body1">
                                    Do 10 km: 5 zł za km
                                </Typography>
                                <Typography variant="body1">
                                    10 - 20 km: 10 zł za km
                                </Typography>
                                <Typography variant="body1">
                                    Powyżej 20 km: 15 zł za km
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default DeliveryCalculator;
