"use client";
import React from "react";
import Navbar from "../Components/navbar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Heading from "../Components/homeComponents/Heading";
import Content, { headingOne } from "../Components/homeComponents/Content ";
import HealthX from "../Components/homeComponents/HealthX";
import homePageData from "../mockData/homePageData/homePage";
import grp32 from "../../Images/Group 32.png";
import grp33 from "../../Images/Group 33.png";
import grp34 from "../../Images/Group 34.png";
import grp35 from "../../Images/Group 35.png";
import grp36 from "../../Images/Group 36.png";
import grp37 from "../../Images/Group 28.png";
import grp38 from "../../Images/Group 29.png";
import shazai from "../../Images/shazain 1.png";
import BlogInsta from "../Components/BlogDetailPage/BlogInsta";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogNnews2 from "../Components/homeComponents/BlogNnews2";

function page() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: "95%",

          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row " },
          margin: "0 auto",
          marginTop: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            width: "98%",
            margin: "0 auto",
          }}
        >
          <Box>
            <Content
              headingOne="Blog"
              headingTwo="&nbsp;News &"
              content="Events"
            />
          </Box>
          <Box
            sx={{
              marginTop: "3%",
            }}
          >
            <Heading
              number="01"
              numberColor="#E9501D"
              heading="Blog"
              headingColor="#2D4755"
              content="We are committed to your Health"
              contentColor="#2D4755"
            />
          </Box>
        </Box>
      </Box>

      {/* search box div */}
      <Box
        sx={{
          width: "95%",
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row " },
          margin: "0 auto",
          marginTop: "3%",
        }}
      >
        {/* secion1 */}
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row " },
            width: "45%",
          }}
        >
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "50%", md:"50%"}, // Adjust width based on screen breakpoints
                padding: { xs: "10px", sm: "10px 40px" }, // Adjust padding based on screen breakpoints
                margin: { xs: "auto", sm: "unset" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#E9501D",
                        borderRadius: "6px",
                        color: "white",
                        padding: "18px 30px",
                        "&:hover": {
                          backgroundColor: "#E9501D",
                        },
                      }}
                    >
                      Search
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              sx={{
                fontWeight: "300",
                fontSize: { md: "25px", xs: "16px", xl: "20px" },
                lineHeight: "90px",
                color: "#2D4755",
                marginLeft: "38px",
              }}
            >
              ALL <br />
              NEWS <br /> BLOGS <br />
              EVENTS
            </Typography>
          </Box>

          {/* top post */}

          <Box
            sx={{
              flexBasis: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { md: "25px", xs: "20px", xl: "24px" },

                color: "#E9501D",
                margin: { xs: "20px 25px", md: "25px", lg: "24px",xl: "40px 50px" },
              }}
            >
              Top Posts
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "20px", sm: "30px" },
              }}
            >
              <Heading
                number="01 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
                sx={{
                 
                  fontSize: { xs: "16px", md: "20px" }, // Responsive font size
                  fontWeight: "bold",
                  color: "blue",
                }}
              />
              <Heading
                number="02 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                number="03 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                number="04 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                number="05"
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor=""
                headingColor=""
              />
            </Box>
            <Box
              sx={{
                marginTop: "20%",
                width: { md: "100%", xs: "47%", xl: "100%" },
              }}
            >
              <BlogInsta />
            </Box>
          </Box>
        </Box>

        {/* section2 */}
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row " },
            width: "55%",
          }}
        >
          <Box
            sx={{
              marginTop: { md: "3%", xs: "-10%" },
              display: "flex",
            }}
          >
            <BlogNnews2 />
          </Box>
        </Box>
      </Box>

      <Box
        id="seveen"
        sx={{
          margin: "0 auto",
          marginTop: "4%",
          marginBottom: "4%",
          width: "96%",
          background:
            "linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: { md: "0", xs: "5%" },
          }}
        >
          <Box
            sx={{
              width: "10%",
              marginTop: "3%",
            }}
          >
            <Heading number="02" numberColor="#E9501D" />
          </Box>

          <Box
            sx={{
              width: "70%",
              marginTop: "3%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                width: "290px",
                height: "36px",
                marginLeft: `calc(50% - 290px/2)`,

                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "32px",
                lineHeight: "111.64%",
                /* identical to box height, or 36px */

                color: "#CFCFCF",
              }}
            >
              Strategic Partners
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100% ",
            display: "flex",
            justifyContent: " cneter",
            alignItems: " center",
            overflow: "hidden",
          }}
        >
          <Box
            // ref = {svgRef}
            sx={{
              animationName: "move",
              animationDuration: "10s",
              animationTimingFunction: "linear",
              animationIterationCount: " infinite",

              display: "flex",
              gap: "10px", // Adjust the gap between grid items as needed
              width: "100%",

              margin: " 0  auto",
              marginTop: "3%",

              // Enable smooth scrolling on iOS devices
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": {
                display: "none", // Hide the scrollbar
              },
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                width: { xs: "16%" },
              }}
              // Assign the ref
            >
              <Image
                src={grp32} // Assuming the image names are sequential (grp32, grp33, ...)
                style={{ width: "100%" }}
              />
            </Box>

            <Box
              sx={{
                display: "inline-block",
                width: { xs: "16%" },
              }}
            >
              <Image
                src={grp33}
                style={{
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "inline-block",

                width: { xs: "16%" },
              }}
            >
              <Image
                src={grp34}
                style={{
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "inline-block",

                width: { xs: "16%" },
              }}
            >
              <Image
                src={grp35}
                style={{
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "inline-block",
                width: { xs: "19%" },
              }}
            >
              <Image
                src={grp36}
                style={{
                  width: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3%",
            flexWrap: { md: "nowrap", xs: "warp" },
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              width: { md: "45%", xs: "100%" },
              margin: "0 auto",
            }}
          >
            <HealthX />
            <Typography
              sx={{
                width: { md: "125%", xs: "80%" },
                height: "79px",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: { md: "40px", xs: "30px", lg: "44px", xl: "47px" },
                lineHeight: "120%",
                /* identical to box height, or 79px */
                margin: "0 auto",
                color: "#E9501D",
              }}
            >
              Healthcare Solution
            </Typography>
            <Typography
              sx={{
                width: { md: "100%", xs: "80%" },
                fontStyle: "normal",
                fontWeight: "265",
                fontSize: { md: "40px", xs: "20px", lg: "42px", xl: "44px" },
                lineHeight: "120%",
                /* or 69px */
                marginTop: { xs: "-8%", lg: "-5%", xl: "-2%" },
                color: "#1E1E1E",
                margin: "0 auto",
              }}
            >
              For All
            </Typography>

            <Typography
              sx={{
                width: { md: "100%", xs: "90%" },
                padding: { md: "0", xs: "2%" },
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: { md: "19px", xs: "14px", lg: "21px", xl: "23px" },
                lineHeight: "30px",
                margin: "0 auto",
                color: "#2D4755",
              }}
            >
              {homePageData[4].solution}
            </Typography>

            <Box
              sx={{
                width: { md: "90%", xs: "70%" },
                marginTop: { md: "5%", xs: "5%" },
                display: { md: "flex", xs: "flex" },
                justifyContent: { md: "start", xs: "space-evenly" },
                marginBottom: { xs: "4%" },
                gap: "10px",
              }}
            >
              <Image src={grp37} style={{ width: "35%" }} />
              <Image src={grp38} style={{ width: "35%" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "45%", xs: "80%" },
              // marginTop: {md: '0' , xs : '29%'},
              margin: { xs: "0 auto" },
            }}
          >
            <Image src={shazai} height={400} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default page;
