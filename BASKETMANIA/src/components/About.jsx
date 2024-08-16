import React, { useState } from 'react';

const About = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  return (
    <div>
      <button onClick={handleClick} className="btn-open">
        <span className="text">Learn-more!</span>
        <span className="icon-Container">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
          </svg>
        </span>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={handleClick} className="overlay"></div>
          <div className="modal-content">
            <h2>ABOUT BASKET-MANIA</h2>
            <p>
              Basketball Mania lets users explore detailed player stats and
              create their ideal team using an intuitive drag-and-drop builder.
              Features include player profiles, comparison tools, team
              management, and performance insights, enhancing the basketball
              experience for fans.
            </p>
            <button className="close-btn" onClick={handleClick}>
              <div className="text">
                <span>Back</span>
              </div>
              <div className="clone">
                <span>Back</span>
                <span>to</span>
                <span>Home</span>
              </div>
              <svg
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <p>
        Basketball Mania is an engaging website tailored for basketball
        enthusiasts, allowing users to delve into player statistics and create
        their ultimate dream basketball team. Here’s a detailed description:
      </p>
    </div>
  );
};

export default About;
