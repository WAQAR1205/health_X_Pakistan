"use client";
import Blog from "../Blog";
import male from "../../../Images/male.png";
import Add from "../../../Images/add.png";
import women from "../../../Images/female.png";
import homeData from "../../mockData/homePageData/homePage";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function BlogNnews() {
  const [selectedBox, setSelectedBox] = useState("All");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { md: "space-around", xs: "space-evenly" },
        marginTop: { xs: "19%", md: "2%" },
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "0px auto",
        }}
      >
        {selectedBox === "All" && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
            <Blog
              head="Mental health Services should count as Healthcare"
              type="News"
              img={male}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}
        {selectedBox === "All" && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
            <Blog
              head="Mental health Services should count as Healthcare"
              type="News"
              img={male}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}
        {selectedBox === "All" && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
            <Blog
              head="Mental health Services should count as Healthcare"
              type="News"
              img={male}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}

        {selectedBox === "News" && (
          <Box
            sx={{
              width: "100%",
              // display: 'flex',
              // justifyContent: 'space-between',
              // flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}

        {selectedBox === "Blogs" && (
          <Box
            sx={{
              width: "100%",
              // display: 'flex',
              // justifyContent: 'space-between',
              // flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}

        {selectedBox === "Events" && (
          <Box
            sx={{
              width: "100%",
              // display: 'flex',
              // justifyContent: 'space-between',
              // flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Blog
              head="Mental health Services should count as Healthcare"
              type="Blog"
              img={women}
              Content={homeData[5].Blog1}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
