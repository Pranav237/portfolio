export interface TimelineItem {
  id: string;
  title: string;
  year: string;
  bgColor: string;      // drives background tint
  yearColor: string;    // year text color
  image?: string;
  content: string[];
}
