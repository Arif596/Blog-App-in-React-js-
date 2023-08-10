import React from "react";
import "./About.css";
import { Box, Typography } from "@mui/material";
export default function About() {
  return (
    <div className="about-section">
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          "& h4": {
            fontSize: "40px",
            fontWeight: "bold",
          },
          "& p": {
            textAlign: "justify",
            margin: 4,
            fontSize: 20,
            color: "black",
            ml: 10,
            mr: 12,
          },
        }}
      >
        <Typography variant="h4">Welcome to Our Blog App</Typography>
        <p>
          "Welcome to our blog! We're a passionate team sharing insights and
          experiences on travel, technology, health, and more. With researched
          articles, we aim to provide valuable information and entertainment.
          Our platform caters to curious minds, whether experts or beginners.
          We're committed to credible content, ensuring accuracy and relevance.
          Join us in the journey of learning and discovery. Your support and
          feedback inspire us to improve. Enjoy our articles, leave comments,
          and connect with us on social media.
        </p>
      </Box>
    </div>
  );
}
