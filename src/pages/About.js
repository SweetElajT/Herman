import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Witajcie w naszej restauracji online!</Typography>
        <p>
        Witajcie w naszej restauracji online, gdzie pasja do doskonałego smaku spotyka się z wygodą zamawiania!
        Jesteśmy dumni z naszego niezrównanego asortymentu burgerów, które stanowią kwintesencję prawdziwej kulinarniej przyjemności.
        Nasze burgery to nie tylko dania – to doświadczenie, które angażuje wszystkie zmysły i pozostawia niezapomniane wrażenia smakowe.
        W sercu naszej kuchni tkwi staranne wybieranie najwyższej jakości składników, dbając o świeżość i autentyczność każdego elementu.
        Każdy burger to kompozycja starannie dobranych smaków i aromatów, które przeniosą Cię w podróż po kulinarnej rozkoszy.
        Nieustannie inspirujemy się różnorodnością kulinarną, dlatego w naszej ofercie znajdziesz zarówno klasyczne, tradycyjne burgery,
        jak i innowacyjne propozycje dla wegetarian, wegan, czy tych, którzy cenią zdrowy tryb życia. Każdy znajdzie tutaj coś dla siebie!
        </p>
        <br />
        <p>
        Zapraszamy do odkrywania naszego świata burgerów i doświadczania prawdziwej rozkoszy kulinarnej w każdym kęsie!
        Dla nas nie ma większej przyjemności niż widzieć uśmiech na twarzy naszych klientów, dlatego każdy burger
        to dla nas więcej niż tylko danie – to obietnica niezapomnianego doświadczenia smakowego. Dołącz do nas i pozwól
        sobie na kulinarną podróż pełną smaku i przyjemności!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
