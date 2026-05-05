import { useState } from "react";
import { Preview } from "./Prewiev";
import { Columns } from "./Columns";
import { BoardBlock } from "./Boards";

const boards = [
  {
    id: 1,
    title: "Dream Workspace",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "Minimal Mood",
    image: "https://images.unsplash.com/photo-1526481280695-3c687fd5432c",
  },
  {
    id: 3,
    title: "Dark Aesthetic Setup",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 4,
    title: "Creative Chaos",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
  {
    id: 5,
    title: "Cozy Corner",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 6,
    title: "Startup Energy",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];
const columns = [
  {
    id: "todo",
    title: "TODO",
  },
  {
    id: "doing",
    title: "DOING",
  },
  {
    id: "done",
    title: "DONE",
  },
];

const dashboardCards = [
  {
    id: "todo",
    title: "Project Overview",
    subtitle: "Current status of all projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    type: "analytics",
    tag: "Work",
    color: "blue",
  },
  {
    id: "todo",
    title: "Design Inspiration",
    subtitle: "Fresh UI ideas for your next project",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    type: "creative",
    tag: "Design",
    color: "purple",
  },
  {
    id: "todo",
    title: "Daily Tasks",
    subtitle: "What you need to finish today",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    type: "tasks",
    tag: "Productivity",
    color: "green",
  },
  {
    id: "doing",

    title: "Team Activity",
    subtitle: "What your team is working on",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    type: "social",
    tag: "Team",
    color: "orange",
  },
  {
    id: "done",

    title: "Learning Progress",
    subtitle: "Your courses and achievements",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    type: "education",
    tag: "Study",
    color: "indigo",
  },
  {
    id: "doing",

    title: "Market Trends",
    subtitle: "Latest updates in tech & business",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    type: "analytics",
    tag: "Insights",
    color: "red",
  },
];

export const Workspace = () => {
  const [boardID, setBoardID] = useState<number | null>(null);

  const definedBoard = boards.find((item) => item.id === boardID);

  return (
    <section className="w-full h-screen">
      {boardID ? (
        <BoardBlock definedBoard={definedBoard}>
          <Columns columns={columns} tasks={dashboardCards} />
        </BoardBlock>
      ) : (
        <Preview board={boards} setBoardID={setBoardID} />
      )}
    </section>
  );
};
