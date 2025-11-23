export interface TimelineItem {
  id: string;
  title: string;
  year: string;
  orbColor: string;
  bgColor: string;
  glassColor: string;
  yearColor: string;
  blobColors: [string, string, string];  // <-- FIXED
  content: string[];
}
