import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  detailedDescription: 'text-sm text-gray-500 mt-2',
  expandButton: 'text-sm text-blue-500 mt-1 cursor-pointer',
};

const SummaryItem = ({ name, description, detailedDescription, link = false, internal = false }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log('SummaryItem rendered:', { name, description, detailedDescription, link, internal });
  }, [name, description, detailedDescription, link, internal]);

  let linkContent = name;
  if (link) {
    linkContent = internal ? <Link to={link}>{name}</Link> : <a href={link}>{name}</a>;
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
    console.log('Expanded state toggled:', !expanded);
  };

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
      {detailedDescription && (
        <>
          <button
            className={classes.expandButton}
            onClick={toggleExpand}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
          {expanded && (
            <p className={classes.detailedDescription}>{detailedDescription}</p>
          )}
        </>
      )}
    </div>
  );
};

export default SummaryItem;