import { useState } from "react";
import "components/explore/JobCard.css";
import { THUMBNAIL } from "lib/constants";

export default function JobCard({ job = {} }) {
  const {
    contents = "",
    name = "",
    type = "",
    publication_date = "",
    short_name = "",
    id,
    locations = [],
    levels = [],
    company = {},
  } = job;

  const [{ name: locationName = "" } = {}] = locations;

  return (
    <div className="card-item">
      <img className="card-item__img" src={THUMBNAIL} alt="Job Thumbnail" />

      <div className="card-item__details">
        <p className="card-item__details--name">{name.trim()}</p>
        <div className="card-items__specs">
          <div>
            <span className="card-items__specs--bold">Location:</span>
            <span className="card-items__specs--text">{locationName}</span>
          </div>
          <div>
            <span className="card-items__specs--bold">Company:</span>
            <span className="card-items__specs--text">
              {company.name || ""}
            </span>
          </div>
        </div>
        {/* <p dangerouslySetInnerHTML={{ __html: contents }} /> */}
      </div>
    </div>
  );
}
