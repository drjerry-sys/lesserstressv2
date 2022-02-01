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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { submitSpace } from "../../../Redux/actions"

const ListProperty = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const steps = ['Name and Location', 'Property setup', 'House Rules', 'Photos', 'Pricing and calendar', 'Legal Info'];
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const isMobile = useMediaQuery("(max-width:900px)");
    const [formData, setFormData] = useState(initFormData);
    const [open, setOpen] = useState(false);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state=> state.data);
    
    const display = {
        0: <StepOne formData={formData} setFormData={setFormData} />,
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
            let compresult = [];
            let { radio, comp_name, agentComment, extraRules, compoundId, myCompounds, comp_image, room_image } = formData;
            if (radio === 'no') {
                compresult = Object.keys(comp_image).filter(img=>comp_image[img].name.length > 99)
            } else {
                compresult = []
            }
            const roomresult = Object.keys(room_image).filter(img=>room_image[img].name.length > 99)
            const unique = myCompounds.filter(comp=>comp.comp_name === comp_name)
            if (
                    (radio === 'no' && comp_name === '') || (agentComment === '' && radio==='no') || (extraRules === '' && radio==='no') ||
                    (radio === 'yes' && compoundId === 0.1) || roomresult.length > 0 || compresult.length > 0 || unique.length > 0
                ) {
                    setFormData({...formData, open:true});
                    setOpen(true);
                } else {
                    dispatch(submitSpace(formData));
                    setFormData(initFormData);
                    setDone(true);
            }
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

    if (!isLoggedIn) {
        return navigate('/');
    }

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
                                    <Alert onClose={()=>setOpen(false)} severity='error' style={{width: '100%'}}>
                                        Error in submission, re-check forms
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={done} autoHideDuration={6000} onClose={()=>setDone(false)}>
                                    <Alert onClose={()=>setDone(false)} severity='success' style={{width: '100%'}}>
                                        successfully registered!
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