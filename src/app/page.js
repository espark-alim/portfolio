import React from "react";
import { Avatar, Box } from "@mui/material";

import Portfolio from "./Portfolio";
import CircleNavbar from "./steps/CircleNavbar";

const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Layer */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // backgroundImage:
            //   "url('https://img.freepik.com/free-photo/green-business-meeting-working-room-office-building-with-bookshelf_105762-1790.jpg?t=st=1739117821~exp=1739121421~hmac=bfb76156682348b021a3e51008195b79e11480169c913aacb84606ef89d449c0&w=740')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.4, // 👈 Yeh sirf background ke liye opacity set karega
            zIndex: -1,
          }}
        />

        {/* Content */}
        <CircleNavbar />
        <Portfolio />
      </Box>
    </Box>
  );
};

export default page;
