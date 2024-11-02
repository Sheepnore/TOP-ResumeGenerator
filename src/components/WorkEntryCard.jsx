import "../styles/WorkEntryCard.css";

export default function WorkEntryCard({
  company,
  jobTitle,
  startDate,
  endDate,
  location,
  jobDescription,
}) {
  return (
    <div className="workEntry">
      <div className="company-info">
        <span className="company-name">{company}</span>
        {", "}
        <span className="company-location">{location}</span>
      </div>
      <div className="job-position-info">
        <span className="title">{jobTitle}</span>
        <span className="timeOfService">
          {startDate}
          {"-"}
          {endDate}
        </span>
      </div>
      <div className="job-description">{jobDescription}</div>
    </div>
  );
}
