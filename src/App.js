import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useEffect, useState } from "react";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [userName, setUserName] = useState("");
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserName("");
        console.log("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Logout failed", error);
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <Router>
        <Header name={userName} logout={handleLogout} />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
