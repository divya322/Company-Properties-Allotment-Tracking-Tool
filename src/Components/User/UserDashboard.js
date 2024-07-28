import React, { useState, useEffect, useContext } from 'react'
import TopBar from '../TopBar/TopBar'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import UserEnquiry from './UserEnquiry';
import Card from '../Cards/Card';
import Assets from './Assets';
import Maintenance from './Maintainance';
import PersonalProfile from './PersonalProfile';
import PreviousEnquiry from './PreviousEnquiry';
import AddMaintainance from './AddMaintainance';
import RequestAccess from './RequestAccess';
import ReleaseRequest from './ReleaseRequest';



const UserDashboard = () => {
  const [user, setUser] = useState({ "email": "", "password": "" });
  const storedComp = localStorage.getItem('currentComponent');
  const [contentComponent, setContentComponent] = useState(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [heading, setHeading] = useState("");
  const [loadin, setLoadin] = useState(false);

  useEffect(() => {
    // Retrieve user details from localStorage
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // Parse the stringified user object
      setUser(JSON.parse(loggedInUser));
      console.log("user set to: ", JSON.parse(loggedInUser) );
    }
    else {
      navigate('/');
    }
  }, []);

  useEffect(() => {const fetchData = async ()  => {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (typeof loggedInUser === "string") {
      console.log("loggedInUser", loggedInUser)
      console.log("fetch statement next")
      loggedInUser = JSON.parse(loggedInUser)
      console.log("fetch nononono")
    }
    setLoadin(false)
    // Fetch user data from the backend API
    fetch(`http://localhost:5050/api/users/user-data/${loggedInUser.email}`)
      .then(response => {
        console.log("fetch yesyesyes")
        console.log('Response received here:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setUserData(data);
      })
      .catch(error => console.error('Error fetching users:', error))
      .finally(() => {
        console.log('Fetch request completed');
        setLoadin(true)
      });
    };
      fetchData();
  }, [user]);

  useEffect(() => {
    if (loadin==true) {
    console.log("i am user: ", user);
    console.log("i am userData: ", userData)
    console.log("i am called!!\n\n\n\n\n\this is q");
    switch (storedComp) {
      case "Add Maintainance":
        setHeading("Add Maintainance")
        setContentComponent(<AddMaintainance user={userData}/>);
        console.log("Add Maintainance is called");
        console.log(storedComp);
        break;
      case "PreviousEnquiry":
        setHeading("Previous Enquiries")
        setContentComponent(<PreviousEnquiry user={userData}/>);
        console.log("enquire is called");
        console.log(storedComp);
        break;
      case "enquire":
        setHeading("")
        setContentComponent(<UserEnquiry />);
        console.log("enquire is called");
        console.log(storedComp);
        break;
      case "maintenance":
        setHeading("Maintenance")
        setContentComponent(<Maintenance user={userData}/>);
        console.log("maintenance is called");
        console.log(storedComp);
        break;
      case "profile":
        setHeading("User Profile")
        setHeading("")
        setContentComponent(<PersonalProfile user={userData}/>);
        console.log("profile is called");
        console.log(storedComp);
        break;
      case "request":
        setHeading("Request Assets")
        setContentComponent(<RequestAccess user={userData}/>);
        console.log("request is called");
        console.log(storedComp);
        break;
      case "release":
        setHeading("Release Asset")
        setContentComponent(<ReleaseRequest user={userData}/>);
        console.log("release is called");
        console.log(storedComp);
        break;
      case "assets":
      default:
        setHeading("All Assets Owned")
        console.log("Assets called");
        setContentComponent(<Assets user={userData}/>);
        console.log("Card is called");
        console.log(storedComp);
        break;
      }
    }
  }, [storedComp, userData, loadin])

  return (

    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 'none' }}>
        <TopBar userpg={true} />
      </div>
      <div style={{ flex: '1', display: 'flex' }}>
        <div style={{ flex: 'none' }}>
          <SideBar name={userData.name} />
        </div>
        <div style={{ flex: '1' }}>
        {heading !== "" ? (
            <center>
                <h2>{heading}</h2>
            </center>
        ) : null }
          {contentComponent}
        </div>
      </div>
      <div style={{ flex: 'none', paddingTop: "5%", minheight: '100px' }}>
        <Footer />
      </div>
    </div>
  )
}

export default UserDashboard
