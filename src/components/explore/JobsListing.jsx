import { useEffect, useState } from "react";
import JobCard from "./JobCard";

export default function JobsListing({ searchFilters = {} }) {
  const [jobs, setJobs] = useState([]);
  const [networkErr, setNetworkErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themuse.com/api/public/jobs?page=0")
      .then((res) => res.json())
      .then((jsonRes) => setJobs(jsonRes.results))
      .catch((err) => setNetworkErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loader">loading...</div>;
  if (networkErr) return <div className="error">{networkErr}</div>;

  const { jobTitle = "", location } = searchFilters;
  const filteredJobs = jobs.filter((job) => {
    if (!location && !jobTitle) return true;
    const { name = "", company = {}, locations = [] } = job;
    const { name: companyName = "" } = company;
    const isLocationThere = locations.some((loc) => loc.name === location);

    const uppercaseJobTitle = jobTitle.toUpperCase();
    if (!jobTitle) return isLocationThere;
    return (
      isLocationThere ||
      name.toUpperCase().includes(uppercaseJobTitle) ||
      companyName.toUpperCase().includes(uppercaseJobTitle)
    );
  });

  if (!filteredJobs.length) return "No data found!";

  return (
    <div className="job-listing">
      <main className="card-container">
        {filteredJobs.map((job = {}) => (
          <JobCard job={job} key={job.id} />
        ))}
      </main>
    </div>
  );
}
