import React from "react";
import Navigation from "./Navigation";
import About from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkHistory from "./WorkHistory";
import Education from "./Education";
import ContactForm from "./Contact";

function App() {
  return (
    <div>
      <h1>This is the app component</h1>
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <WorkHistory />
      <Education />
      <ContactForm />
    </div>
  );
}

export default App;