import { useState } from "react";
import "components/explore/SearchBar.css";

const options = [
  "Nashville, TN",
  "New York, NY",
  "Bengaluru, India",
  "Berlin, Germany",
];

export default function SearchBar({ setSearchFilters }) {
  const [searchParams, setSearchParams] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFilters(searchParams);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchbar__input"
          name="jobTitle"
          type="text"
          onChange={handleChange}
          value={searchParams.jobTitle || ""}
          placeholder="Job title or keyword"
        />
        <select
          name="location"
          onChange={handleChange}
          className="searchbar__input"
        >
          {options.map((op) => (
            <option key={op} value={op} selected={op === searchParams.location}>
              {op}
            </option>
          ))}
        </select>
        <button className="searchbar__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
