import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Img1 from '../../assets/img/12.jpg';
import Img2 from '../../assets/img/13.jpg';
import Img3 from '../../assets/img/14.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:Img1,
	
  },
  {
    label: 'Bird',
    imgPath:Img2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:Img3,
  },

];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1, paddingBottom:'250px' }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        // onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 594,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
			<Box sx={{textAlign:'center',color:'white',position:"absolute",marginTop:'-400px',width:'100%'}} >
				<Typography sx={{letterSpacing:'2px'}} >Women Collection 2018</Typography>
				<Typography sx={{fontWeight:'bold',fontSize:'70px',letterSpacing:'5px'}} >NEW ARRIVALS</Typography>
				<Button variant='contained' sx={{paddingLeft:'3%',background:'white',color:'black','&:hover':{ background:'red',color:'white' },paddingTop:'0.7%',paddingBottom:'0.7%',borderRadius:'30px',paddingRight:'3%',}} >SHOP NOW</Button>

			</Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
	  sx={{marginTop:'-200px'}}
        // steps={maxSteps}
        position="static"
        // activeStep={activeStep}
        nextButton={
          <Button
            size="small"
			sx={{marginTop:'-180px'}}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
			>
            
            {theme.direction === 'rtl' ? (
				<KeyboardArrowLeft  />
				) : (
					<KeyboardArrowRight />
					)}
          </Button>
        }
        backButton={
			<Button sx={{marginTop:'-180px'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
				
            {theme.direction === 'rtl' ? (
				<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
					)}
            
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
