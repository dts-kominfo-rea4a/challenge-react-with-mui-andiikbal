import React from "react";
import { Typography, Divider, Box } from "@mui/material";
// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{ textAlign: "center", padding: "10px 0", marginBottom: 0 }}
          variant="h3"
          gutterBottom
        >
          Call a Friend
        </Typography>
        <Divider>Your friendly contact app</Divider>
      </Box>
    </>
  );
};

export default Header;
