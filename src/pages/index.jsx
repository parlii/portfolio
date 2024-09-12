import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';
import GitHubContributions from '../components/github-calendar/GithubCalendar';

const Index = ({ data }) => {
  const about = data.site.siteMetadata.about ?? false;
  const projects = data.site.siteMetadata.projects ?? false;
  const posts = data.allMarkdownRemark.edges;
  const experience = data.site.siteMetadata.experience ?? false;
  const skills = data.site.siteMetadata.skills ?? false;
  const noBlog = !posts || !posts.length;

  return (
    <>
      <Layout>
        <SEO />
        <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
        {about && <SectionAbout about={about} />}
        {!noBlog && <SectionBlog posts={posts} />}
        {projects && projects.length && <SectionProjects projects={projects} />}
        {experience && experience.length && (
          <SectionExperience experience={experience} />
        )}
        {skills && skills.length && <SectionSkills skills={skills} />}
        <div className="mt-5">
          <GitHubContributions />
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          detailedDescription
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
