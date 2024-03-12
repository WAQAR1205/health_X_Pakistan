import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Content from './homeComponents/Content ';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const headings = [
  {
    text: 'As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.',
  },
  {
    text: 'As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.',
  },
  {
    text: 'As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.',
  },
  {
    text: 'As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: {md: '30%' , xs: '100%'} }}>
      <Paper
        square
        elevation={0}
        sx={{
          width: '100%',
          height: 100,
          padding: '8px',
          bgcolor: 'background.default',
        }}
      >
        <Typography sx={{
          width: "100%",
          fontSize: {md:'34px' , xs: '26px' , lg: '42px' , xl: '50px'}
        }}>
          Visionaries of Health
        </Typography>

        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'row' , md: 'column'}
        }}>
          <Typography sx={{
            color: '#E9501D',
            fontWeight: '600',
            fontSize: {md: '38px' , xs: '35px' , lg: '41px' , xl: '44px'},
            lineHeight: '52.33px',
          }}>
            Your
            <span sx={{
              color: '#1F8B7B',
            }}>
              &nbsp;Partners
            </span>
          </Typography>
          <Typography sx={{
            color: '#E9501D',
            fontWeight: '600',
            fontSize: {md: '38px' , xs: '35px' , lg: '41px' , xl: '44px'},
            lineHeight: '52.33px',
            width: {md: '100%'},
          }}>&nbsp;in Health</Typography>
        </Box>

      </Paper>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {headings.map((step, index) => (
          <Box key={index} sx={{
            marginTop: {xs:'0%' , md: '39%'},
          }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="article"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '27px',
                  letterSpacing: '0em',
                  textAlign: 'left',

                }}
              >
                <Typography>{step.text}</Typography>
              </Box>
            ) : null}
          </Box>
        ))
        }
      </AutoPlaySwipeableViews >
      <MobileStepper
        steps={headings.length}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          marginTop: {xs: '-20%' , md: '-13%'}
        }}
      />
    </Box >
  );
}

export default SwipeableTextMobileStepper;
