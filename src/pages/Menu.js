import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
      <Layout>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "75px" }}>
          {MenuList.map((menu) => (
              <Card sx={{ maxWidth: 345, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                      sx={{ height: 140 }}
                      component="img"
                      image={menu.image}
                      alt={menu.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {menu.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {menu.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary" sx={{ my: 2 }}>
                      Cena: {menu.price} PLN
                    </Typography>
                    <Button size="small" variant="contained" color="primary">
                      Zamów
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
          ))}
        </Box>
      </Layout>
  );
};

export default Menu;
