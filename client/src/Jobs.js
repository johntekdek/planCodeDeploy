import React from 'react'

import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/Dialog';

import Job from './job';


export default function Jobs( {jobs} ){
    console.log('job is ',jobs[0])
    return (

        <div className="jobs">
            <Typography variant="h4" component="h1">
                Software Jobs
            </Typography>
{
    jobs.map(
        (job,i) => <Job key={i} job={job}/>
    )
}
        </div>
    )
}