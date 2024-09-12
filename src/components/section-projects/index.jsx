import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects || !Array.isArray(projects)) {
    console.log("Projects is not an array or is undefined");
    return null;
  }

  const validProjects = projects.filter(project => project !== null);

  if (validProjects.length === 0) {
    return null;
  }

  return (
    <Section title="Personal Projects">
      {validProjects.map((project) => {
        console.log('Rendering project:', project);
        return (
          <SummaryItem
            key={project.name}
            name={project.name}
            description={project.description}
            detailedDescription={project.detailedDescription}
            link={project.link}
          />
        );
      })}
    </Section>
  );
};

export default SectionProjects;