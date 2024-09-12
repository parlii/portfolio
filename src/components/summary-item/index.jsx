import { Link } from 'gatsby';
import React, { useState } from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
}) => {

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
    </div>
  );
};

export default SummaryItem;
