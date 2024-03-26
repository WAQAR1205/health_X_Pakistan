import { Box, Typography } from "@mui/material";
export default function Heading({
  number,
  heading,
  content,
  numberColor,
  headingColor,
  contentColor,
  flexFlow,
  md = "150px",
  mdc = "303px",
  xs = "70%",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexFlow: flexFlow,
        flexDirection: "row",
        gap: "10px",
        width: { md: "394px", xs: "100%", sm: "90%", lg: "100%", xl: "100%" },
        width: { md: "394px", xs: "100%", sm: "90%", lg: "100%", xl: "100%" },
        marginTop: { md: "0", xs: "4%" },
      }}
    >
      <Typography
        sx={{
          width: { md: "58px", xs: "9%" },
          width: { md: "58px", xs: "9%" },
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: { md: "47px", xs: "36px", sm: "30px" },
          lineHeight: "112.64%",
          /* or 52px */

          leadingTrim: "both",
          textEdge: "cap",
          color: numberColor,
          opacity: "0.1",
        }}
      >
        {number}
      </Typography>

      <Box
        sx={{
          width: { xs: xs },
        }}
      >
        <Typography
          sx={{
            width: { md: md, xs: xs },
            width: { md: md, xs: xs },
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: { md: "19px", xs: "13px", sm: "14px" },
            lineHeight: "27px",

            leadingTrim: "both",
            textEdge: "cap",

            color: headingColor,
          }}
        >
          {heading}
        </Typography>

        <Typography
          sx={{
            width: mdc,
            // height: '13px',
            marginTop: "3%",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: { md: "19px", xs: "13px", sm: "14px" },
            lineHeight: "27px",

            leadingTrim: "both",
            textEdge: "cap",

            color: contentColor,
            marginTop: { md: "0%", sm: "-2", xs: "-2%" },
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
