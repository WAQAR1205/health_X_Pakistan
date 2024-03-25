import { Box, Typography } from "@mui/material";
import HealthX from "./homeComponents/HealthX";
import Image from "next/image";
import Blog1 from "../../Images/Blog1.png";
import Blog2 from "../../Images/Blog2.png";
import Blog3 from "../../Images/Blog3.png";
import blog4 from "../../Images/blog4.png";
import blog6 from "../../Images/blog5.png";
import blog5 from "../../Images/blog6.png";

export default function BlogInsta() {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "28px",
          lineHeight: "42px",
          color: "#253239",
        }}
      >
        Instagram
      </Typography>
      <HealthX />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" },
            marginBottom: "1rem",
          }}
        >
          <Image
            src={Blog1}
            layout="responsive"
            width={500}
            height={500}
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" },
            marginBottom: "1rem",
          }}
        >
          <Image
            src={Blog2}
            layout="responsive"
            width={500} // Set an arbitrary width
            height={500} // Set an arbitrary height
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" }, // Adjust width based on screen size
            marginBottom: "1rem", // Add some space between items
          }}
        >
          <Image
            src={Blog3}
            layout="responsive"
            width={500} // Set an arbitrary width
            height={500} // Set an arbitrary height
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" }, // Adjust width based on screen size
            marginBottom: "1rem", // Add some space between items
          }}
        >
          <Image
            src={blog4}
            layout="responsive"
            width={500} // Set an arbitrary width
            height={500} // Set an arbitrary height
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" }, // Adjust width based on screen size
            marginBottom: "1rem", // Add some space between items
          }}
        >
          <Image
            src={blog5}
            layout="responsive"
            width={500} // Set an arbitrary width
            height={500} // Set an arbitrary height
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "40%", lg: "30%" }, // Adjust width based on screen size
            marginBottom: "1rem", // Add some space between items
          }}
        >
          <Image
            src={blog6}
            layout="responsive"
            width={500} // Set an arbitrary width
            height={500} // Set an arbitrary height
            alt="img"
          />
        </Box>
      </Box>
    </>
  );
}
