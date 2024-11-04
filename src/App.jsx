import "./App.css";
import { useState } from "react";
import Education from "./components/Education";
import Personal from "./components/Personal";
import WorkHistory from "./components/WorkHistory";
import ResumeTemplate from "./components/ResumeTemplate";
import { personal, workHistory, educational } from "./assets/data";

function App() {
  const [person, setPerson] = useState(personal);
  const [work, setWork] = useState(workHistory);
  const [education, setEducation] = useState(educational);
  return (
    <div className="cv">
      <div className="inputSection">
        <Personal person={person} setPerson={setPerson}></Personal>
        <WorkHistory work={work} setWork={setWork}></WorkHistory>
        <Education
          education={education}
          setEducation={setEducation}
        ></Education>
      </div>
      <div className="template">
        <ResumeTemplate
          person={person}
          work={work}
          education={education}
        ></ResumeTemplate>
      </div>
    </div>
  );
}

export default App;
