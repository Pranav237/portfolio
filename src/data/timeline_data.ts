export const timeline = [
  {
    id: "moment-0",
    title: "I am born",
    year: "2005",
    bgColor: "#a7d1d9ff",
    yearColor: "#9DC6FF",
    image: "/content/born.png",
    content: ["Not much to see here."]
  },

  {
    id: "moment-1",
    title: "First coding",
    year: "2017",
    bgColor: "#0073ffff",
    yearColor: "#ffff52ff",
    image: "/content/babycoding.png",
    content: ["Wrote my first code at 12: print(\"Hello World\")"]
  },

  {
    id: "moment-2",
    title: "A fun project",
    year: "2020",
    bgColor: "#584e41ff",
    yearColor: "#483a2bff",
    image: "/content/mastermind.png",
    content: ["Built Mastermind with Python & Tkinter, learned a lot about DSA. HMU if you can beat this game."]
  },

  {
    id: "moment-3",
    title: "Java @ FRC",
    year: "2022",
    bgColor: "#3d0068ff",
    yearColor: "#5eff00ff",
    image: "/content/robotics.png",
    content: ["Used Java to develop features for a competition robot. Did stuff like vision tracking, autonomous navigation, loop control, gyroscopic navigation, omnidirectional drive, etc."]
  },

  {
    id: "moment-4",
    title: "Squirrel Watching!?",
    year: "2023",
    bgColor: "#000000ff",
    yearColor: "#e0a44fff",
    image: "/content/squirrel.png",
    content: ["Built a full-stack website for the Squirrel Watching Club of Purdue."]
  },

  {
    id: "moment-5",
    title: "EPICS Mobile & Web",
    year: "2023",
    bgColor: "#1A0F05",
    yearColor: "#FFCF91",
    image: "/content/EPICS.png",
    content: ["Built end-to-end and industry grade mobile and web apps for nonprofits using Flutter and React."]
  },

  {
    id: "moment-6",
    title: "SWE Intern @ ACE IoT",
    year: "2024",
    bgColor: "#0e1519ff",
    yearColor: "#daff24ff",
    image: "/content/ACE.png",
    content: ["Built admin dashboards and platforms using Vue.js."]
  },

  {
    id: "moment-7",
    title: "Embedded Robotics",
    year: "2025",
    bgColor: "#16031F",
    yearColor: "#ffaaf9ff",
    image: "/content/sumobot.png",
    content: ["Programmed an autonomous sumo bot in C. Wrote FSMs and algorithms for navigation and battle strategies. Used IR sensors for edge and opponent detection."]
  },

  {
    id: "moment-8",
    title: "SWE Co-op @ GE Appliances",
    year: "2025",
    bgColor: "#0067bcff",
    yearColor: "#d1e0ffff",
    image: "/content/ge.png",
    content: ["Implemented diagnostic message handling and parsed ERD data to enable diagnostics integration within the SmartHQ Service application. Additionally, I redesigned and refactored legacy code to improve reliability and cross-version compatibility with existing PAC firmware."]
  }
] as const;

export type TimelineItem = typeof timeline[number];
