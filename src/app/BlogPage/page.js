"use client";
import React from "react";
import Navbar from "../Components/navbar";
import { Box, Typography, Input } from "@mui/material";
import Image from "next/image";
import Button from "../Components/Button";
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
import Instagram from "../Components/Instagram";
import BlogNnews2 from "../Components/homeComponents/BlogNnews2";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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
          marginTop: "4%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            width: "98%",
            margin: "0 auto",
            paddingLeft: "",
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
          <Box
            x={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: { md: "nowrap", xs: "wrap" },
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                flexBasis: { md: "25%", xs: "90%" }, // Adjusted flex basis for different screen sizes
              }}
            >
              <Box
                sx={{
                  width: { lg: "87.5%", xs: "100%", md: "100%" }, // Adjusted width for different screen sizes
                  height: "80%",
                  border: "1px solid",
                  background: "white",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px", // Adjusted padding for better spacing on small screens
                  boxSizing: "border-box", // Ensuring padding is included in width calculation
                }}
              >
                <Input
                  disableUnderline
                  placeholder="search"
                  sx={{
                    fontWeight: "300",
                    fontSize: { lg: "13px", md: "12px", xs: "11px" },
                    // padding: { md: "3%", xs: "1%" },
                    width: { lg: "50%", md: "65%", xs: "60%" },
                  }}
                />
                <Button
                  height="55px"
                  bg="#E9501D"
                  color="#FFFFFF"
                  fontWeight="500"
                  fontSize={{ lg: "16px", md: "12px", xs: "11px" }}
                  lineHeight="24px"
                  title="Search"
                  width={{ lg: "35%", md: "35%", xs: "40%" }}
                  mt={{ xs: "5", md: "-3px", lg: "1px" }}
                  ml={{ xs: "5", md: "-3px", lg: "1px" }}
                >
                  Search
                </Button>
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: "300",
                fontSize: { md: "22px", xs: "14px", xl: "20px" },
                lineHeight: { lg: "90px", sm: "50px", xs: "50px" },
                color: "#2D4755",
                marginLeft: { xs: "8px", md: "8px", lg: "38px" },
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
                margin: { xs: "30px 8px", md: "30px 8px", lg: "20px 38px" },
              }}
            >
              Top Posts
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "10px", sm: "30px" },
              }}
            >
              <Heading
                xsN="20px"
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
                xsN="20px"
                number="02 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                xsN="20px"
                number="03 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                xsN="20px"
                number="04 "
                content="Empowering Pakistanis with Health Knowledge "
                contentColor=""
                numberColor="#E9501D"
                headingColor=""
              />
              <Heading
                xsN="20px"
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
              <Instagram />
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

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination count={4} variant="outlined" shape="rounded" />
        </Stack>
      </Box>

      <Box
        id="seveen"
        sx={{
          margin: "0 auto",
          marginTop: "4%",
          width: "96%",
          height: { xs: "900px", md: "auto" },
          background:
            "linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { md: "row", xs: "column" },
            marginLeft: { md: "0", xs: "5%" },
          }}
        >
          <Box
            sx={{
              width: { md: "10%", xs: "100%" },
              marginTop: "3%",
            }}
          >
            <Heading number="07" numberColor="#E9501D" />
          </Box>

          <Box
            sx={{
              width: { md: "70%", xs: "95%" },
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
                alt="shazai"
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
                alt="shazai"
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
                alt="shazai"
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
                alt="shazai"
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
                alt="shazai"
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
                fontSize: { md: "40px", xs: "20px", lg: "44px", xl: "47px" },
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
                fontWeight: "300",
                fontSize: { md: "40px", xs: "18px", lg: "42px", xl: "44px" },
                lineHeight: "120%",
                /* or 69px */
                marginTop: { xs: "-16%", lg: "-5%", xl: "-2%" },
                color: "#1E1E1E",
                margin: "0 auto",
              }}
            >
              For All
            </Typography>

            <Typography
              sx={{
                width: { md: "100%", xs: "80%" },
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
                width: { md: "90%", xs: "90%" },
                marginTop: { md: "5%", xs: "5%" },
                display: { md: "flex", xs: "flex" },
                justifyContent: { md: "start", xs: "space-evenly" },
                marginBottom: { xs: "4%" },
                gap: "10px",
                margin: "0 auto",
              }}
            >
              <Image src={grp37} alt="shazai" style={{ width: "45%" }} />
              <Image src={grp38} alt="shazai" style={{ width: "45%" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "45%", xs: "70%" },
              margin: { xs: "0 auto" },
            }}
          >
            <Image
              src={shazai}
              alt="shazai"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default page;
