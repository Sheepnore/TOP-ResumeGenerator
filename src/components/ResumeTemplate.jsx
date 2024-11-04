import "../styles/ResumeTemplate.css";
import EducationEntryCard from "./EducationEntryCard";
import WorkEntryCard from "./WorkEntryCard";
export default function ResumeTemplate({ person, education, work }) {
  console.log(education);
  return (
    <>
      <div className="user-personal">
        <h2 className="username">{person.name}</h2>
        <div className="user-info">
          <span className="email">{person.email}</span>{" "}
          <span className="phone">{person.phone}</span>{" "}
          <span className="location">{person.location}</span>{" "}
        </div>
      </div>
      <div className="work-history">
        <h2 className="work-history-title">Work Experience</h2>
        {work.map((entry) => (
          <WorkEntryCard
            key={entry.entryId}
            company={entry.company}
            jobTitle={entry.jobTitle}
            startDate={entry.startDate}
            endDate={entry.endDate}
            location={entry.location}
            jobDescription={entry.jobDescription}
          ></WorkEntryCard>
        ))}
      </div>
      <div className="education">
        <h2 className="education-title">Education</h2>
        {education.map((entry) => (
          <EducationEntryCard
            key={entry.entryId}
            degree={entry.degree}
            graduateYear={entry.graduateYear}
            university={entry.university}
            location={entry.location}
          ></EducationEntryCard>
        ))}
      </div>
    </>
  );
}
