import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import Logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const CustomNavLink = ({ to, children, ...props }) => {
        return (
            <NavLink
                to={to}
                {...props}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                {children}
            </NavLink>
        );
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
                <CustomNavLink to="/">
                    <img src={Logo} alt="logo" height="70" width="200" />
                </CustomNavLink>
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                <li><CustomNavLink to="/">Strona główna</CustomNavLink></li>
                <li><CustomNavLink to="/menu">Menu</CustomNavLink></li>
                <li><CustomNavLink to="/delivery-calculator">Kalkulator dowozu</CustomNavLink></li>
                <li><CustomNavLink to="/about">O nas</CustomNavLink></li>
                <li><CustomNavLink to="/contact">Kontakt</CustomNavLink></li>
            </ul>
        </Box>
    );

    return (
        <>
            <AppBar component="nav" sx={{ bgcolor: "black" }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <CustomNavLink to="/" sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                            <img src={Logo} alt="logo" height="70" width="250" />
                        </Typography>
                    </CustomNavLink>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <ul className="navigation-menu">
                            <li><CustomNavLink to="/">Strona główna</CustomNavLink></li>
                            <li><CustomNavLink to="/menu">Menu</CustomNavLink></li>
                            <li><CustomNavLink to="/delivery-calculator">Kalkulator dowozu</CustomNavLink></li>
                            <li><CustomNavLink to="/about">O nas</CustomNavLink></li>
                            <li><CustomNavLink to="/contact">Kontakt</CustomNavLink></li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 } }}>
                {drawer}
            </Drawer>
            <Toolbar />
        </>
    );
};

export default Header;
