import { useState } from "react";
import "../styles/userInput.css";
import "../styles/Personal.css";
export default function Personal({ person, setPerson }) {
  const [visible, setVisible] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(false);
  return (
    <div className="user-input">
      <div
        className="toggle-bar"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Person
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
        <div className="name input-container">
          <span>Name: </span>
          <input
            type="text"
            onChange={(e) => {
              setPerson({ ...person, name: e.target.value });
            }}
            disabled={inputDisabled}
          />
        </div>

        <div className="email input-container">
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => {
              setPerson({ ...person, email: e.target.value });
            }}
            disabled={inputDisabled}
          />
        </div>

        <div className="phone input-container">
          <span>Phone:</span>
          <input
            type="tel"
            onChange={(e) => {
              setPerson({ ...person, phone: e.target.value });
            }}
            disabled={inputDisabled}
          />
        </div>

        <div className="location input-container">
          <span>Location:</span>
          <input
            type="text"
            onChange={(e) => {
              setPerson({ ...person, location: e.target.value });
            }}
            disabled={inputDisabled}
          />
        </div>
        <div className="buttons input-container">
          <button
            onClick={() => {
              setInputDisabled(false);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setInputDisabled(true);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
