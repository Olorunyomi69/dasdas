import React from "react";
import "./Header.css";
const Header = ({ imageUrl, title, description, author,etr }) => {
  return (
    
      <div className="head-wrapper">
        <div className="Head-image">
          <img src={imageUrl} alt="Post" />
        </div>
        <div className="card-text-wrapper">
          <div className="card-details">
            <p>{author}</p>
            <p>1 Month Ago</p>
          </div>

          <div className="heading">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>

          <div className="etr">
            <p>{etr}</p>
            <button className="cta">
              <p>Read Full</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default Header;
