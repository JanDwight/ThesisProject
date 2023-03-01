import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/links" exact element={<Links/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/profile" exact element={<UserProfile/>} />
        </Routes>

      </Router>
    </div>
  );
    
}

export default App;
