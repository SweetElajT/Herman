
import React from "react";
import whataburgerStory from "../images/whataburger-story.jpg"; // Make sure this path is correct
import Layout from "../components/Layout/Layout";
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Layout>
            <Box sx={{ my: matches ? 5 : 15, p: 2 }}>
                <Card sx={{ maxWidth: 800, mx: "auto", boxShadow: 5 }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={whataburgerStory}
                        alt="Whataburger Story"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: "bold", mb: 3 }}>
                            Nasza historia
                        </Typography>
                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            Od skromnych początków w małym food trucku w 1980 roku, Whataburger przekształcił pasję i tradycję w
                            kulinarną podróż. Założyciel, Jan "Big Burger" Kowalski, znany ze swojej miłości do soczystych,
                            wielowarstwowych burgerów, chciał podzielić się swoją kreacją z całym światem.

                            Z biegiem lat Whataburger stał się symbolem autentycznych, ręcznie robionych burgerów. Nasze menu,
                            inspirowane lokalnymi składnikami i międzynarodowymi smakami, sprawia, że każde ugryzienie to świętowanie
                            różnorodności i jakości.

                            Dziś Whataburger nie jest już tylko jedną restauracją, ale rodzinną siecią, która rozszerza swoją obecność
                            na nowe rynki, nigdy nie zapominając o naszych korzeniach i oryginalnym przepisie, który uczynił nas sławnymi.

                            W każdym burgerze, który serwujemy, jest kawałek naszej historii. Zapraszamy do dołączenia do naszej rodziny
                            i stworzenia własnej historii smaków z Whataburgerem. Nasz zespół czeka, aby powitać Cię i zaoferować
                            nie tylko posiłek, ale część naszego dziedzictwa.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Layout>
    );
};

export default About;
