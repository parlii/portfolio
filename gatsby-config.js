module.exports = {
  siteMetadata: {
    siteUrl: `https://divesh.dev/`,
    name: 'Divesh Rizal',
    title: `Divesh | Senior Software Engineer`,
    description: `Always learning!`,
    github: `https://github.com/parlii`,
    linkedin: `https://www.linkedin.com/in/divesh-rizal`,
    about: `Committed to writing clean, efficient code and mentoring fellow developers.`,
    projects: [
      {
        name: 'VSCode Extension',
        description:
          'A VSCode Extension providing codelens, tree views, and tooling helpful for Bitly developers',
        detailedDescription: [
          "Generate curl commands from code",
          "Open GCP logs with relevant queries",
          "Run and debug Go services",
          "Search documentation",
          "Open Graphite URLs for endpoints",
          "Access local log files",
          "Auto-update functionality"
        ],
        link: '',
      },
      {
        name: 'Bitly AI Chatbot',
        description:
          'An LLM based chatbot with function calling to support shortening links, fetching metrics, and more',
        link: 'https://chauncey.vercel.app',
      },
      {
        name: 'Reverse Lookup',
        description: 'Reverse lookup a word from a given description',
        link: 'https://reverse-lookup.vercel.app/',
      },
      {
        name: 'Bitly Card',
        description:
          'A beautiful short link card generator with multiple themes',
        link: 'https://bitly-card2.vercel.app/',
      },
      {
        name: 'Play Trivia',
        description: 'GPT4 based trivia game on any topic!',
        link: 'https://play-trivia.vercel.app/',
      },
    ],
    experience: [
      {
        name: 'Bitly',
        description: 'Senior Software Engineer, December 2021 - Present',
        link: 'https://www.bitly.com',
      },
      {
        name: 'Pegasystems',
        description: 'Senior Systems Architect, July 2017 - December 2021',
        link: 'https://www.pega.com/',
      },
    ],
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Golang, Python, Javascript (ES6+), Typescript, NextJS, Node.js',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, Google Bigtable, Redis',
      },
      {
        name: 'Other Skills',
        description:
          'Docker, GCP, AWS, CI / CD, Microservice Architecture, Messaging infrastructure, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Divesh Rizal's RSS Feed",
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};