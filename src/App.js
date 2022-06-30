import React from "react";
import FetchedTable from "./Components/FetchedTable.jsx";
//import {Switch, Route} from 'react-router-dom'
// import BuySellBar from "./Components/BuySellBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import "./styles.css";
import LoginForm from './Components/forms/loginForm'
import RegisterForm from './Components/forms/registerForm'
import Home from './Components/home/home'
import { Switch, RouteUI } from "@material-ui/core";
export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<FetchedTable />} />
      </Routes>
      <div className="App">
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>

        {/* <BuySellBar /> */}
      
      </div>
    </Router>
  );
}
