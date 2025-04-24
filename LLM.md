# Portfolio Website - Project Overview

## Project Summary
This is a personal portfolio website for Divesh Rizal built with GatsbyJS and TailwindCSS. It's based on the "Devfolio" template, which provides a modern and production-ready personal portfolio with blog functionality.

## Site Structure
- **Homepage**: Displays sections for About, Blog posts, Projects, Experience, Skills, and GitHub contributions
- **Blog**: Collection of markdown-based articles
- **Resume**: PDF available at `/static/Divesh_Rizal_Resume.pdf`

## Key Components
- **About**: Brief personal introduction
- **Projects**: Showcases personal projects including:
  - Bitly AI Chatbot: LLM-based chatbot with function calling
  - Reverse Lookup: Tool to reverse lookup words from descriptions
  - Bitly Card: Short link card generator with themes
  - Play Trivia: GPT4-based trivia game
- **Experience**: Work history including:
  - Bitly: Senior Software Engineer (Dec 2021 - Present)
  - Pegasystems: Systems Architect (Jul 2017 - Dec 2021)
- **Skills**: Technical skills in:
  - Languages & Frameworks: Golang, Python, JavaScript/TypeScript, NextJS, Node.js
  - Databases: PostgreSQL, MySQL, Google Bigtable, Redis
  - Other: Docker, GCP, AWS, CI/CD, Microservices, API design, Agile/Scrum
- **GitHub Contributions Calendar**: Visual display of GitHub activity

## Technical Details
- **Framework**: GatsbyJS (React-based static site generator)
- **Styling**: TailwindCSS
- **Content Management**: Combination of:
  - Configuration in `gatsby-config.js` for personal info and site sections
  - Markdown files in `content/blog` for blog posts
- **Deployment**: Configured for Vercel deployment (vercel.json present)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run format` - Format code with Prettier

## Repository Structure
- `src/` - React components and page templates
- `content/` - Markdown blog posts
- `static/` - Static assets like resume and images
- `gatsby-*.js` - Gatsby configuration files