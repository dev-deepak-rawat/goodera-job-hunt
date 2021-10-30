import React, { useState } from "react";
import ExploreHead from "components/explore/ExploreHead";
import JobsListing from "components/explore/JobsListing";
import SearchBar from "components/explore/SearchBar";

export default function ExplorePage() {
  const [searchFilters, setSearchFilters] = useState({});
  const [activePage, setActivePage] = useState("findJob");

  return (
    <div>
      <ExploreHead {...{ activePage, setActivePage }} />
      {activePage === "createJob" ? (
        "This is the post a job page"
      ) : (
        <>
          <SearchBar setSearchFilters={setSearchFilters} />
          <JobsListing searchFilters={searchFilters} />
        </>
      )}
    </div>
  );
}
