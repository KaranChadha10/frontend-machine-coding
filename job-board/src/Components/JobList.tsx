import React from "react";
import JobItem from "./JobItem";
import { JobListProps } from "../types";

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <JobItem key={job.id} job={job} />
            ))}
        </div>
    )
}

export default JobList;