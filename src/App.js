import './App.css';
import { BrowserRouter ,Switch, Routes, Router, Route } from 'react-router-dom';
// import AllUsers from './Components/showal';
// import TopBar from './Components/TopBar/TopBar';
import 'bootstrap/dist/js/bootstrap'
// import SideBar from './Components/SideBar/SideBar';
// import UserDashboard from './Components/User/UserDashboard';
// import AdminDashboard from './Components/Admin/AdminDashboard';
import UserLoginPage from './Pages/UserLoginPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <UserLoginPage/>
  );
}

export default App;
