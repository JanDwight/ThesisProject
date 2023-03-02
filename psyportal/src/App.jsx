import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";



function App() {
  return (
    //Registering the links to React js
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/links" exact element={<Links/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/profile" exact element={<UserProfile/>} />
          <Route path="/login" exact element={<LoginPage/>} />
          <Route path="/*" exact element={<PageNotFound/>} />
        </Routes>
        
      </Router>
    </div>
  );
    
}

export default App;
