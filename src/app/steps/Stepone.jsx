import React from "react";
import { Box, Typography } from "@mui/material";
import { Facebook, LinkedIn, WhatsApp, GitHub } from "@mui/icons-material";

const Stepone = () => {
  const icons = [
    // { component: Facebook, color: "#1877F2" }, // Facebook Blue
    { component: LinkedIn, color: "#0A66C2" }, // LinkedIn Blue
    { component: GitHub, color: "#333" },
    // { component: WhatsApp, color: "#25D366" }, // WhatsApp Green
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center" },
          gap: 2,
          p: 2,
        }}
      >
        <Typography variant="h6">WELCOME TO MY WORLD</Typography>
        <Typography variant="h1">Hi, I’m Muhammad Ali</Typography>
        <Typography variant="h3">Next Js & React Js Developer</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {icons?.map((icon, index) => {
            const IconComponent = icon?.component;
            return (
              <Box
                key={index}
                sx={{
                  borderRadius: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  // backgroundColor: icon.color,
                  color: "#fff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <IconComponent
                  sx={{ fontSize: "25px", color: `${icon?.color || "#000"}` }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Box
          component={"img"}
          src="/images/ali.png"
          alt=""
          sx={{ width: "300px", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Stepone;
