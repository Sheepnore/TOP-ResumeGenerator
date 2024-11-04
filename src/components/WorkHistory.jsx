import { useState } from "react";
import "../styles/userInput.css";
import "../styles/WorkHistory.css";
export default function WorkHistory({ work, setWork }) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  console.log(data);

  function handleEmptyInput(test) {
    if (Object.keys(test).length < 6) {
      return true;
    } else if (Object.keys(test).length === 6) {
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
        Work History
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
          <span>Company: </span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, company: e.target.value });
            }}
            value={data.company || ""}
          />
        </div>

        <div className="input-container">
          <span>Job Title:</span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, jobTitle: e.target.value });
            }}
            value={data.jobTitle || ""}
          />
        </div>

        <div className="input-container">
          <span>Start Date:</span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, startDate: e.target.value });
            }}
            value={data.startDate || ""}
          />
        </div>

        <div className="input-container">
          <span>End Date:</span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, endDate: e.target.value });
            }}
            value={data.endDate || ""}
          />
        </div>

        <div className="input-container">
          <span>Location:</span>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, location: e.target.value });
            }}
            value={data.location || ""}
          />
        </div>

        <div id="JD-container" className="input-container">
          <div>Job Description:</div>
          <textarea
            name="JD"
            id="JD"
            placeholder="Enter job description"
            onChange={(e) => {
              setData({ ...data, jobDescription: e.target.value });
            }}
            value={data.jobDescription || ""}
          ></textarea>
        </div>
        <div className="createWorkHistory">
          <button
            className="createWorkHistoryBtn button"
            onClick={() => {
              const newEntry = { ...data, entryId: crypto.randomUUID() };
              if (handleEmptyInput(data)) {
                console.log("Make sure complete the info");
              } else {
                setWork([...work, newEntry]);
                setData({});
              }
            }}
          >
            Create
          </button>
          <button
            className="resetWorkHistoryBtn button"
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
