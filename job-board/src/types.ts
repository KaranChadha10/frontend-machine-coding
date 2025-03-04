export interface Job {
    id: number;
    title: string;
    by: string;
    time: number;
    url: string;
}

export interface JobListProps {
    jobs: Job[];
}

export interface JobItemProps {
    job: Job;
}