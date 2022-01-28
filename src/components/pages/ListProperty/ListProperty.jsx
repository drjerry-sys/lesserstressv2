import { Box, Button, Container, Step, useMediaQuery, StepButton, Stepper, Typography, CssBaseline, Paper, InputBase, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import useStyles from "./style";
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import initFormData from './formData';
import { useDispatch } from "react-redux";
import { submitSpace } from "../../../Redux/actions"

const ListProperty = ({ formFailed }) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const steps = ['Name and Location', 'Property setup', 'House Rules', 'Photos', 'Pricing and calendar', 'Legal Info'];
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const isMobile = useMediaQuery("(max-width:900px)");
    const [compound, setCompound] = useState('yes');
    const [formData, setFormData] = useState(initFormData);
    const [open, setOpen] = useState(formFailed);
    
    const display = {
        0: <StepOne formData={formData} setFormData={setFormData} compound={compound} setCompound={setCompound} />,
        1: <StepTwo formData={formData} setFormData={setFormData} />,
        2: <StepThree formData={formData} setFormData={setFormData} />,
        3: <StepFour formData={formData} setFormData={setFormData} />,
         4: <StepFive formData={formData} setFormData={setFormData} />,
        5: <StepSix formData={formData} setFormData={setFormData} />,
    };
    
    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        if (activeStep !== (steps.length-1)) {
            const newActiveStep =
              isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
            setActiveStep(newActiveStep);
        } else {
            dispatch(submitSpace(formData))
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
    setActiveStep(step);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
      };

    return (
        <div className={classes.listProperty}>
            <CssBaseline />
            <div className={classes.heading} />
            <Container style={{paddingTop: "10px"}}>
                <Box sx={{ width: '100%' }}>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                {!isMobile ? label : ""}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            <CssBaseline />
                            {display[activeStep]}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, paddingBottom: "50px" }}>
                                <CssBaseline />
                                <Button
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                    color={activeStep !== 0 ? "secondary" : "inherit"}
                                    variant="contained"
                                    disabled={activeStep === 0}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext} sx={{ mr: 1 }}
                                variant="contained"
                                 color={completedSteps() !== totalSteps() ? "primary" : "inherit"}>
                                    {activeStep === (steps.length - 1) ? "Submit" : "Next" }
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                    ) : ""
                                )}
                                <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
                                    <Alert onClose={()=>setOpen(false)} severity="error" style={{width: '100%'}}>
                                        Error in submission, re-check forms
                                    </Alert>
                                </Snackbar>
                            </Box>
                        </React.Fragment>
                        )}
                    </div>
                </Box>                
            </Container>
        </div>
    )
}

export default ListProperty;