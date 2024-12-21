import React from "react";

type NavbarProps = {
  sections: string[];
  activeSection: string;
  onSelectSection: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  sections,
  activeSection,
  onSelectSection,
}) => {
  return (
    <nav className="navbar">
      {sections.map((section) => (
        <button
          key={section}
          className={`navbar-button ${
            activeSection === section ? "active" : ""
          }`}
          onClick={() => onSelectSection(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
