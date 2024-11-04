import { useState } from "react";
import "../styles/userInput.css";
import "../styles/Education.css";
export default function Education({ education, setEducation }) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  console.log(data);

  function handleEmptyInput(test) {
    if (Object.keys(test).length < 4) {
      return true;
    } else if (Object.keys(test).length === 4) {
      return false;
    }
  }

  return (
    <div className="user-input">
      <div
        className="toggle-bar"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Education
        <button className="toggleBtn">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={visible ? "rotate" : null}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      <div className={visible ? "active input-section" : "input-section"}>
        <div className="input-container">
          <span>Degree: </span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, degree: e.target.value });
            }}
            value={data.degree || ""}
          />
        </div>

        <div className="input-container">
          <span>Year: </span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, graduateYear: e.target.value });
            }}
            value={data.graduateYear || ""}
          />
        </div>

        <div className="input-container">
          <span>University: </span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, university: e.target.value });
            }}
            value={data.university || ""}
          />
        </div>

        <div className="input-container">
          <span>Location: </span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, location: e.target.value });
            }}
            value={data.location || ""}
          />
        </div>

        <div className="buttons">
          <button
            className="createEducation button"
            onClick={() => {
              const newEntry = { ...data, entryId: crypto.randomUUID() };
              if (handleEmptyInput(data)) {
                console.log("Make sure complete the info");
              } else {
                setEducation([...education, newEntry]);
                setData({});
              }
            }}
          >
            Create
          </button>
          <button
            className="resetEducationBtn button"
            onClick={() => {
              setData({});
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
