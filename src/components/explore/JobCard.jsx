import "components/explore/JobCard.css";
import { THUMBNAIL } from "lib/constants";
import Popup from "components/popup/Popup";
import { useState } from "react";

export default function JobCard({ job = {} }) {
  const [showDetails, setShowDetails] = useState(false);
  const { contents = "", name = "", locations = [], company = {} } = job;

  const [{ name: locationName = "" } = {}] = locations;

  return (
    <>
      {showDetails && (
        <Popup handleClose={() => setShowDetails(false)}>
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </Popup>
      )}
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
          <button
            className="card-items__button"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
