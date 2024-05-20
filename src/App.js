import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from './components/homepage/Homepage';
import { CoursePage } from './components/coursepage/Coursepage';
import { BlogPage } from './components/blogpage/Blogpage';
import { AboutPage } from './components/aboutpage/Aboutpage';
import { ContactPage } from './components/contactpage/Contactpage';
import { LoginPage } from './components/loginpage/Loginpage';
import { RegisterPage } from './components/registerpage/Registerpage';
import { ReadmoreCard } from './components/readmorecard/Readmorecard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </Router>
  );
}
export default App;
