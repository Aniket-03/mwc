"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

// all menu items here. you can customize or add as your need
const menuItems = (
  <>
    <Typography component={Link} href="/" fontWeight={500} color="white">
      Home
    </Typography>
    <Typography
      component={Link}
      href="/menu-one"
      fontWeight={500}
      color="white"
    >
      About
    </Typography>
    <Typography
      component={Link}
      href="/menu-two"
      fontWeight={500}
      color="white"
    >
      Property
    </Typography>
    <Typography
      component={Link}
      href="/menu-three"
      fontWeight={500}
      color="white"
    >
      Contact
    </Typography>
  </>
);

// navbar component start
const Navbar = () => {
  // modal state
  const [open, setOpen] = useState(false);

  // drawer open function
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // drawer close function
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack className="relative z-10">
      {/* navbar start */}
      <Box
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px 0px", // adjust padding according to your need
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Container className="hidden md:block">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">

        <div className="flex space-x-6 mb-2 sm:mb-0">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-100 mr-2" fill="none" stroke="#ff4d00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm text-gray-100">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-100 mr-2" fill="none" stroke="#ff4d00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-100">info@mwcconnect.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-100 mr-2" fill="none" stroke="#ff4d00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-100">123 Main Street, City, State</span>
            </div>
          </div>
          
          {/* Login Button - Styled like the Book Appointment Button */}
          <a href="#" className="bg-[#003366] ml-8 text-white px-8 py-2 flex items-center font-medium transition hover:bg-blue-800 whitespace-nowrap">
            Login
            <svg className="w-4 h-4 ml-2" fill="none" stroke="#ff4d00" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        </Container>
        <Container>
          {/* navbar stack */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "8px 0",
            }}
          >
            {/* logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <h1 className="text-white text-xl font-bold">
                    <span className="text-[#ff4d00]">M</span>
                    <span className="text-white">W</span>
                    <span className="text-white mr-2">C</span>
                    <span className="text-[#ff4d00]">C</span>
                    <span className="text-white">O</span>
                    <span className="text-white">N</span>
                    <span className="text-white">N</span>
                    <span className="text-white">E</span>
                    <span className="text-white">C</span>
                    <span className="text-white">T</span>
                  </h1>
                </div>
              </Link>
            </div>

            {/* menu items start */}
            <Stack
              direction="row"
              gap={4}
              alignItems="center"
              sx={{
                "& a:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "#ff4d00",
                  transition: "ease-in-out 0.2s",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {/* menu items rendered here*/}
              {menuItems}
            </Stack>

            {/* Hamburger Menu */}
            <Hidden lgUp>
              {/* custom hamburger menu component. see below in this component */}
              <HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
            </Hidden>
          </Stack>
        </Container>
      </Box>

      {/* Drawer for Hamburger Menu in medium device*/}
      {/* responsive drawer */}
      <Hidden lgUp>
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          {/* menu items list component start here*/}
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  "& a:hover": {
                    color: "#ff4d00",
                    transition: "ease-in-out 0.6s",
                  },
                }}
              >
                {/* menu items rendered here in medium devices */}
                {menuItems}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </Stack>
  );
};

// Hamburger Menu component
const HamburgerMenu = ({ handleDrawerOpen }) => {
  return (
    <IconButton
      sx={{ display: { md: "block", lg: "none" } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Navbar;
