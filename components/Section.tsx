import React from "react";

type SectionProps = {
  title: string;
  content: string;
};

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="section-content">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Section;
