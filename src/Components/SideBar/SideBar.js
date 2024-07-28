import React from 'react';
import './SideBar.css'; // Import your sidebar styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faUser, faBoxOpen, faSignOutAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const SideBar = (props) => {
  const navigate = useNavigate();
  
  let handleButtonClick = (comp) => {
    // Change the content component when the button is clicked
    // Convert data to JSON format
    // Write data to the JSON file
    localStorage.setItem('currentComponent', comp);
    navigate("/userDashboard");
    console.log(`button pressed on sidebar ${comp}`);
  };
  return (
    
    <div className="sidebar" style={{ boxShadow: '3px 0px 8px rgba(0, 0, 0, 0.4)' }}>
      <h4>{props.name}'s Utilities</h4>
      <ul className="sidebar-list">
        <li>
          <a href="#" onClick={() => handleButtonClick("assets")}>
            🏠
            Assets
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("maintenance")}>
            🛠️
            Maintenance
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("profile")}>
            😄
            Profile
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("request")}>
            📥
            Request Asset
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("release")}>
            📤
            Release Asset
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("enquire")}>
            ❓
            Enquire
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleButtonClick("PreviousEnquiry")}>
            🙋‍♂️
            Previous Enquiry
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default SideBar
