export const timeline = [
  {
    id: "moment-0",
    title: "I am born",
    year: "2005",
    bgColor: "#22361dff",
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
    content: ["Wrote my first program. It printed Hello World."]
  },

  {
    id: "moment-2",
    title: "First big project",
    year: "2020",
    bgColor: "#584e41ff",
    yearColor: "#483a2bff",
    image: "/content/mastermind.png",
    content: ["Training arc begins: tiny Nav at a keyboard."]
  },

  {
    id: "moment-3",
    title: "Java @ FRC",
    year: "2022",
    bgColor: "#3d0068ff",
    yearColor: "#5eff00ff",
    image: "/content/robotics.png",
    content: ["Learned Java on a robotics team: autonomy, vision, drivetrains."]
  },

  {
    id: "moment-4",
    title: "Squirrel Watching!?",
    year: "2023",
    bgColor: "#000000ff",
    yearColor: "#e0a44fff",
    image: "/content/squirrel.png",
    content: ["Built a full-stack website for the Squirrel Watching Club."]
  },

  {
    id: "moment-5",
    title: "EPICS Mobile & Web",
    year: "2023",
    bgColor: "#1A0F05",
    yearColor: "#FFCF91",
    image: "/content/EPICS.png",
    content: ["Built mobile + web apps for nonprofits using Flutter & React."]
  },

  {
    id: "moment-6",
    title: "SWE Intern @ ACE IoT",
    year: "2024",
    bgColor: "#0e1519ff",
    yearColor: "#daff24ff",
    image: "/content/ACE.png",
    content: ["Built Vue dashboards & CRUD platforms."]
  },

  {
    id: "moment-7",
    title: "Embedded Robotics",
    year: "2025",
    bgColor: "#16031F",
    yearColor: "#ffaaf9ff",
    image: "/content/sumobot.png",
    content: ["Programmed an autonomous sumo bot in C."]
  },

  {
    id: "moment-8",
    title: "SWE Co-op @ GE Appliances",
    year: "2025",
    bgColor: "#0067bcff",
    yearColor: "#d1e0ffff",
    image: "/content/ge.png",
    content: ["Built Rev3 diagnostics, board-config UI, C# maintenance."]
  }
] as const;

export type TimelineItem = typeof timeline[number];
