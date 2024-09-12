import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const postStyle = {
  wrapper: 'mb-6 p-4 bg-white shadow rounded-lg', // Example styles for blog posts
  name: 'font-semibold text-blue-900 pb-1 hover:underline', // Blue title with hover effect
  description: 'text-md text-gray-600 font-light', // Subtitle style
};

const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
          classes={postStyle}
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
