import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCustomGPTs = ({ customGPTs }) => {
  if (!customGPTs || !customGPTs.created) {
    return null;
  }

  return (
    <Section title="My Custom GPTs">
      <div className="mb-8">
        {customGPTs.created.map((gpt) => (
          <SummaryItem
            key={gpt.name}
            name={gpt.name}
            description={gpt.description}
            link={gpt.link}
            internal={false}
          />
        ))}
      </div>
    </Section>
  );
};

export default SectionCustomGPTs;