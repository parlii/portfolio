module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://divesh.dev/`,
    // Your Name
    name: 'Divesh Rizal',
    // Main Site Title
    title: `Divesh | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Engineer by profession, developer by passion`,
    // Optional: Twitter account handle
    // author: `@`,
    // Optional: Github account URL
    github: `https://github.com/parlii`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/divesh-rizal`,
    // Content of the About Me section
    // about: `I like building full stack apps. Current interests are LLM based apps, scalabale micro services, and cloud management.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Bitly AI Chatbot',
        description:
          'An LLM based chatbot with function calling to support shortening links, fetching metrics, and more',
        link: 'https://chauncey.vercel.app',
      },
      {
        name: 'Ask Internal Docs',
        description:
          'Retrieval based QA application for internal documentation',
        link: 'https://bit.ly/ask-bitly-docs',
      },
      {
        name: 'Reverse Lookup',
        description:
          'Reverse lookup a word from a given description',
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
        description:
          'GPT4 based trivia game on any topic!',
        link: 'https://play-trivia.vercel.app/',
      },

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
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
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Python, Django, NextJS',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, Google Bigtable, Redis',
      },
      {
        name: 'Other',
        description:
          'Docker, GCP, AWS, CI / CD, Microservices, API design, Agile / Scrum',
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
    `gatsby-plugin-feed`,
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
