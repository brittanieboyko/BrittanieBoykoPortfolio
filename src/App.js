import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
