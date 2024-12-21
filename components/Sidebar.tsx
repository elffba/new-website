import React from "react";

type SidebarProps = {
  sections: string[];
  activeSection: string;
  onSelectSection: (section: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSection,
  onSelectSection,
}) => {
  return (
    <aside className="sidebar">
      {sections.map((section) => (
        <button
          key={section}
          className={`sidebar-button ${
            activeSection === section ? "active" : ""
          }`}
          onClick={() => onSelectSection(section)}
        >
          {section}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
