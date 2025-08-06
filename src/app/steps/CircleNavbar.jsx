"use client";
import { useState } from "react";
import { IconButton, Box, Paper } from "@mui/material";
import { Home, Person, Build, School } from "@mui/icons-material";

const CircleNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 40,
        left: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "primary.main",
          transition: "transform 0.3s",
          transform: open ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <IconButton color="inherit">
          <Home fontSize="large" />
        </IconButton>
        {open && (
          <Paper
            elevation={6}
            sx={{
              position: "absolute",
              bottom: 80,
              left: "50%",
              transform: "translateX(-50%)",
              width: 160,
              height: 80,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "40px 40px 0 0",
              backgroundColor: "grey.900",
            }}
          >
            {[Person, Build, School].map((Icon, index) => (
              <IconButton key={index} color="inherit">
                <Icon />
              </IconButton>
            ))}
          </Paper>
        )}
      </Paper>
    </Box>
  );
};

export default CircleNavbar;
