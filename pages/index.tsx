import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

const sections = ["Home", "About", "Contact"];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");

  return (
    <div className="layout">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />
      <main className="main-content">
        <Navbar
          sections={sections}
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />
        <div className="content">
          {activeSection === "Home" && (
            <Section title="Home" content="Welcome to the Home section!" />
          )}
          {activeSection === "About" && (
            <Section title="About" content="This is the About section." />
          )}
          {activeSection === "Contact" && (
            <Section
              title="Contact"
              content="Reach us at the Contact section."
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
