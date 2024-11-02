export default function EducationEntryCard({
  degree,
  graduated,
  university,
  location,
}) {
  return (
    <>
      <div className="degree-info">
        <span className="degree">{degree}</span>
        <span className="graduated">{graduated}</span>
      </div>
      <div className="university-info">
        <span className="university">{university}</span>
        <span className="uni-location">{location}</span>
      </div>
    </>
  );
}
