export const timeline = [
  {
    id: "moment-1",
    title: "Hello, World!",
    year: "2017",
    bgColor: "#0073ffff",
    yearColor: "#ffff52ff",
    image: "/content/babycoding.png",
    content: [
      "Began programming."
    ]
  },

  {
    id: "moment-2",
    title: "Algorithmic Thinking",
    year: "2020",
    bgColor: "#584e41ff",
    yearColor: "#483a2bff",
    image: "/content/mastermind.png",
    content: [
      "Designed and built a full game system in Python with Tkinter, strengthening data structures, state management, and UI-driven logic."
    ]
  },

  {
    id: "moment-3",
    title: "Robotics Software Engineering",
    year: "2022",
    bgColor: "#3d0068ff",
    yearColor: "#5eff00ff",
    image: "/content/robotics.png",
    content: [
      "Shipped competition-critical Java software for autonomous navigation, vision tracking, gyroscopic control, and omnidirectional drive systems."
    ]
  },

  {
    id: "moment-4",
    title: "Full-Stack Web Engineering",
    year: "2023",
    bgColor: "#000000ff",
    yearColor: "#e0a44fff",
    image: "/content/squirrel.png",
    content: [
      "Built and deployed a full-stack website for the Squirrel Watching Club at Purdue, owning frontend, backend, and deployment."
    ]
  },

  {
    id: "moment-5",
    title: "Healthcare Mobile App (EPICS)",
    year: "2023",
    bgColor: "#848484ff",
    yearColor: "#ff6a00ff",
    image: "/content/NKF.png",
    content: [
      "Built a diet-tracking mobile application for the National Kidney Foundation, focusing on accessibility, data validation, and real-world healthcare constraints."
    ]
  },

  {
    id: "moment-6",
    title: "Nonprofit Platform Engineering (EPICS)",
    year: "2023",
    bgColor: "#016badff",
    yearColor: "#d8dcdfff",
    image: "/content/LTHC.png",
    content: [
      "Led development of mobile and web platforms for Lafayette Transitional Housing Center, shipping production systems used by staff and residents."
    ]
  },

  {
    id: "moment-7",
    title: "SWE Intern @ ACE IoT",
    year: "2024",
    bgColor: "#0e1519ff",
    yearColor: "#daff24ff",
    image: "/content/ACE.png",
    content: [
      "Built internal dashboards and admin platforms using Vue.js, improving operational workflows and system visibility."
    ]
  },

  {
    id: "moment-8",
    title: "Distributed Systems & AI",
    year: "2025",
    bgColor: "#0b132b",
    yearColor: "#0d89c3ff",
    image: "/content/BB.png",
    content: [
      "Built BookBuddy, a distributed system using Cloudflare Workers, Durable Objects, and KV to deliver AI-powered book recommendations at scale."
    ]
  },

  {
    id: "moment-9",
    title: "Embedded Robotics Systems",
    year: "2025",
    bgColor: "#16031F",
    yearColor: "#ffaaf9ff",
    image: "/content/sumobot.png",
    content: [
      "Programmed an autonomous sumo robot in C, implementing FSMs, real-time sensor processing, and adversarial navigation strategies."
    ]
  },

  {
    id: "moment-10",
    title: "SWE Co-op @ GE Appliances",
    year: "2025",
    bgColor: "#0067bcff",
    yearColor: "#d1e0ffff",
    image: "/content/ge.png",
    content: [
      "Implemented diagnostic message handling and ERD parsing to enable appliance diagnostics in SmartHQ, while refactoring legacy systems for cross-version firmware compatibility."
    ]
  },

  {
    id: "moment-11",
    title: "AI Product Engineering",
    year: "2025",
    bgColor: "#323e32ff",
    yearColor: "#f5f5f5",
    image: "/content/SW.png",
    content: [
      "Built SpeakWise, an AI-powered speaking coach that analyzes audio and video to deliver feedback on tone, pacing, filler words, and body language."
    ]
  },

  {
    id: "moment-12",
    title: "Destination Zero: Facility Decarbonization Dashboard",
    year: "2026",
    bgColor: "#9B2335",
    yearColor: "#faf5eb",
    image: "/content/xtern_challenge.png",
    content: [
      "Architected a multi-agent LangGraph pipeline backed by OpenRouter LLMs along with MCP, Firestore checkpointing, and SSE streaming for Destination Zero, a facility decarbonization workflow dashboard."
    ]
  }
] as const;

export type TimelineItem = typeof timeline[number];
