import { Link } from 'gatsby';
import React, { useState } from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  detailedDescription: 'text-sm text-gray-500 mt-2',
  expandButton: 'text-sm text-blue-500 mt-1 cursor-pointer',
  bulletPoint: 'list-disc ml-4',
};

const SummaryItem = ({
  name,
  description,
  detailedDescription,
  link = false,
  internal = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  let linkContent = name;
  if (link) {
    linkContent = internal ? (
      <Link to={link}>{name}</Link>
    ) : (
      <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
    );
  }

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
      {detailedDescription && detailedDescription.length > 0 && (
        <>
          <button
            className={classes.expandButton}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show more details'}
          </button>
          {expanded && (
            <ul className={classes.detailedDescription}>
              {detailedDescription.map((item, index) => (
                <li key={index} className={classes.bulletPoint}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default SummaryItem;
