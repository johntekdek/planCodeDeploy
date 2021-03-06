import React from "react";

import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/Dialog";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Job from "./job";

export default function Jobs({ jobs }) {
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep *50,(activeStep * 50) + 50) ;
  function handleNext(){
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  console.log("job is ", jobs[0]);
  return (
    <div className="jobs">
      <Typography variant="h4" component="h1">
        Software Jobs
      </Typography> <hr/>
      <Typography variant="h6" component="h2">
        Found {numJobs} Jobs
      </Typography>
      {jobsOnPage.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    <div>
        Page {activeStep + 1} of {numPages}
    </div>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
