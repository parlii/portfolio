---
title: "Bitlens: Supercharging My VS Code Workflow"
date: '2024-08-01T12:00:00.00Z'
description: 'How I built a VS Code extension to boost productivity and learned a ton along the way'
---
I’ve always been passionate about optimizing workflows and finding ways to be more productive, and when I realized that my daily work could benefit from a more integrated experience in Visual Studio Code (VS Code), I knew I had to build something. This is the story of how I created Bitlens, a VS Code extension that enhances productivity by providing a dedicated panel for managing services and offering useful code lens features for Go files. I’ve also learned a ton along the way, experimenting with different tools, and making ample use of GitHub Copilot to assist me.

## Inspiration and the Initial Idea

The idea for Bitlens started when I found myself constantly switching between terminal windows, searching through logs, and running repetitive curl commands while debugging APIs and managing services. I wanted a tool that could simplify these tasks and bring everything into my favorite code editor—VS Code.

I started off with a rough idea: **a VS Code extension with a custom activity bar panel for managing services and generating curl commands directly from code files**. I had no idea how deep the rabbit hole would go, but I was excited to dive in!

## Setting Up the Project

I began by scaffolding a new VS Code extension project using the `yo code` generator. It was a good starting point and provided a basic structure to build upon. From there, I started integrating the different features I had envisioned.

### Leveraging GitHub Copilot

One of the most interesting parts of this journey was the heavy use of [GitHub Copilot](https://github.com/features/copilot). It became an essential partner as I worked through the extension development. It suggested code snippets, helped me refactor code, and often provided hints for approaches I hadn’t considered. When adding new commands or implementing functionality like "Search GCP Logs by Line", Copilot was there to provide valuable insights.

## The Evolution of Bitlens

As I delved deeper into the project, Bitlens began to take shape. What started as a simple idea to manage services and generate curl commands grew into something much more comprehensive. I found myself adding features I hadn't initially planned, each one born from a real-world need I encountered in my daily work.

One of the most satisfying moments was when I implemented the code lens features for Go files. Seeing those little actionable links appear above my code, offering to generate curl commands or search logs, felt like a small triumph. It was as if my editor was now anticipating my needs, saving me countless clicks and context switches.

![BitLens](/static/bitlens.png)

## Overcoming Challenges

Of course, the journey wasn't without its hurdles. I vividly remember the day I spent hours debugging an issue with the auto-update feature. It was frustrating, but the sense of accomplishment when I finally cracked it was unparalleled. These challenges pushed me to dig deeper into VS Code's architecture and API, expanding my knowledge far beyond what I had anticipated.

Managing dependencies was another learning curve. I discovered the importance of keeping libraries up-to-date the hard way, when a seemingly minor update broke a key feature. It taught me valuable lessons about version control and the delicate balance of maintaining a stable yet current codebase.

## The Joy of User Feedback

As Bitlens started to take shape, I began sharing it with colleagues. Their feedback was invaluable, often highlighting use cases I hadn't considered. It was both humbling and exciting to see how others used the tool, sometimes in ways I hadn't envisioned. This collaborative aspect of development, even for a personal project, was incredibly rewarding.

## Reflections and Future Plans

Looking back, I'm amazed at how far Bitlens has come from its initial concept. What started as a personal productivity tool has evolved into something that's enhancing the workflow of my entire team. It's a reminder of how powerful it can be to scratch your own itch – you never know where it might lead.

As for the future, I have a growing list of ideas for new features and improvements. I'm excited to continue evolving Bitlens, possibly even open-sourcing it to allow others to contribute and benefit from it. The journey of creating Bitlens has not only resulted in a useful tool but has also been a profound learning experience, pushing me to grow as a developer and problem-solver.

To anyone out there with an idea for a tool or extension, I say go for it. The process of bringing an idea to life, of solving real problems you face in your work, is incredibly rewarding. You'll face challenges, certainly, but each one is an opportunity to learn and improve.

As I continue to refine and expand Bitlens, I'm grateful for the journey it's taken me on. It's a testament to the power of curiosity, perseverance, and the desire to make our daily work just a little bit easier. Here's to the next feature, the next challenge, and the continuous evolution of our tools and ourselves as developers.

Happy coding, and may your workflows be ever more efficient! 🚀
----