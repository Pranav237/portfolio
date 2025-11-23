export const timeline = [
  {
    id: "moment-0",
    title: "I am born",
    year: "2005",
    orbColor: "#6EC3FF",
    bgColor: "#07111A",
    glassColor: "#6EC3FF",
    blobColors: ["#6EC3FF", "#244B7A", "#A7E0FF"] as const,
    yearColor: "#9DC6FF",
    content: ["Not much to see here."]
  },
  {
    id: "moment-1",
    title: "First coding",
    year: "2014",
    orbColor: "#5AB1FF",
    bgColor: "#0A1320",
    glassColor: "#5AB1FF",
    blobColors: ["#5AB1FF", "#233A7C", "#B7D6FF"] as const,
    yearColor: "#A4CCFF",
    content: [
      "Wrote my first program in Python. It printed Hello World."
    ]
  },
  {
    id: "moment-2",
    title: "Java @ FRC",
    year: "2016",
    orbColor: "#FF6478",
    bgColor: "#15070C",
    glassColor: "#FF6478",
    blobColors: ["#FF6478", "#7B2340", "#FF9AA6"] as const,
    yearColor: "#FF9DB0",
    content: [
      "Learned Java on a robotics team — autonomy, control systems, vision, drivetrains."
    ]
  },
  {
    id: "moment-3",
    title: "Squirrel Watching!?",
    year: "2021",
    orbColor: "#B88A4A",
    bgColor: "#1A1208",
    glassColor: "#B88A4A",
    blobColors: ["#B88A4A", "#5A381E", "#FFDDAA"] as const,
    yearColor: "#E9CDA6",
    content: [
      "Built a full-stack website with Firebase & React for the Squirrel Watching Club."
    ]
  },
  {
    id: "moment-4",
    title: "EPICS Mobile & Web",
    year: "2022",
    orbColor: "#FF9E4A",
    bgColor: "#1A0F05",
    glassColor: "#FF9E4A",
    blobColors: ["#FF9E4A", "#7B3C1E", "#FFD7AA"] as const,
    yearColor: "#FFCF91",
    content: [
      "Developed mobile + web apps for local nonprofits using Flutter & React."
    ]
  },
  {
    id: "moment-5",
    title: "SWE Intern @ ACE IoT",
    year: "2023",
    orbColor: "#51D1A3",
    bgColor: "#04100C",
    glassColor: "#51D1A3",
    blobColors: ["#51D1A3", "#165846", "#A8F5D7"] as const,
    yearColor: "#92E4CF",
    content: [
      "Built Vue.js admin dashboards and CRUD interfaces."
    ]
  },
  {
    id: "moment-6",
    title: "Embedded Robotics",
    year: "2023",
    orbColor: "#D46CFF",
    bgColor: "#16031F",
    glassColor: "#D46CFF",
    blobColors: ["#D46CFF", "#6A2B90", "#F0C2FF"] as const,
    yearColor: "#E6B7FF",
    content: [
      "Programmed an autonomous sumo bot in C with IR sensors & control logic."
    ]
  },
  {
    id: "moment-7",
    title: "SWE Co-op @ GE Appliances",
    year: "2024",
    orbColor: "#7CB2FF",
    bgColor: "#0A1320",
    glassColor: "#7CB2FF",
    blobColors: ["#7CB2FF", "#26427C", "#AECFFF"] as const,
    yearColor: "#C7DAFF",
    content: [
      "Built Rev3 diagnostic handler, board-config UI, legacy C# maintenance."
    ]
  }
] as const;

export type TimelineItem = typeof timeline[number];
