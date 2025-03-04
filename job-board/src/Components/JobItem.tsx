import React from 'react';
import { JobItemProps } from '../types';


const JobItem: React.FC<JobItemProps> = ({ job }) => {
    const {id, title, time, by, url} = job;

    return(
        <div className='job-item'>
            <h3>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <p>Job Id: {id}</p>
            <p>Posted By: {by}</p>
            <p>Posted On: {new Date(time * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default JobItem;