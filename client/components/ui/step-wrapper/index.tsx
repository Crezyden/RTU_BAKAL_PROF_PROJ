import React from 'react';
// import { FC } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
interface StepWrapperProps {
    activeStep: number
    children
}
const step = ['Document info', 'Upload document file']
const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <div className='container'>
            <Stepper activeStep={activeStep}>
                {step.map((step, index) =>
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
                )}
            </Stepper>
            <div className='container'>
                {children}
            </div>
        </div>
    );
};

export default StepWrapper;