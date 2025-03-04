import { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from './Components/JobList';
import { Job } from './types';


function App() {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(()=>{
    fetchJobIds();
  }, []);

  useEffect(()=>{
    if(jobIds.length > 0 ){
      loadJobs();
    }
  }, [page, jobIds]);

  const fetchJobIds = async () => {
    try{
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/jobstories.json`);
      setJobIds(response.data);
    }catch(error){
      console.error("Error Fetching Job Ids",error);
    }
  };

  const loadJobs = async () => {
    setLoading(true);
    const startIndex = page * 5;
    const endIndex = startIndex + 5;
    const jobsToFetch = jobIds.slice(startIndex, endIndex);

    const jobsData = await Promise.all(
      jobsToFetch.map((id) =>
        axios.get<Job>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      )
    );

    setJobs((prevJobs) => [...prevJobs, ...jobsData.map((res) => res.data)]);
    setLoading(false);

    if(endIndex >= jobIds.length){
      setHasMore(false);
    }

  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='App'>
      <h1>Job Feed</h1>
      <JobList jobs = {jobs} />
      {loading && <p>Loading...</p>}
      {hasMore && !loading && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default App;