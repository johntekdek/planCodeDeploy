import React from "react";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

export default function Job({ job }) {
  return (
    <Paper className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6"> {job.company}</Typography>
        <Typography> {job.location}</Typography>
      </div>
      <div>
        <Typography>
          {" "}
          {job.created_at
            .split(" ")
            .slice(0, 2)
            .join()}
        </Typography>
      </div>
    </Paper>
  );
}
