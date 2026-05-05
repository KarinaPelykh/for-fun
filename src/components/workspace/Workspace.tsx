import { useState } from "react";
import { Preview } from "./Prewiev";
import { Columns } from "./Columns";
import { BoardBlock } from "./Boards";
import { DragDropProvider, type DragEndEvent } from "@dnd-kit/react";

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

const dashboardTask = [
  {
    id: "1",
    title: "Project Overview",
    subtitle: "Current status of all projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    type: "analytics",
    tag: "Work",
    color: "blue",
    status: "todo",
  },
  {
    id: "2",
    title: "Design Inspiration",
    subtitle: "Fresh UI ideas for your next project",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    type: "creative",
    tag: "Design",
    status: "todo",
    color: "purple",
  },
  {
    id: "3",
    title: "Daily Tasks",
    subtitle: "What you need to finish today",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    type: "tasks",
    tag: "Productivity",
    status: "todo",
    color: "green",
  },
  {
    id: "4",
    title: "Team Activity",
    subtitle: "What your team is working on",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    type: "social",
    tag: "Team",
    status: "doing",
    color: "orange",
  },
  {
    id: "5",
    title: "Learning Progress",
    subtitle: "Your courses and achievements",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    type: "education",
    tag: "Study",
    status: "done",
    color: "indigo",
  },
  {
    id: "6",
    title: "Market Trends",
    subtitle: "Latest updates in tech & business",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    type: "analytics",
    tag: "Insights",
    status: "doing",
    color: "red",
  },
];

export const Workspace = () => {
  const [boardID, setBoardID] = useState<number | null>(null);

  const [tasks, setTasks] = useState(dashboardTask);

  const activeBoard = boards.find((item) => item.id === boardID) ?? boards[0];

  const handleDragEvent = (event: DragEndEvent) => {
    const { operation } = event;

    const taskId = operation.source?.id as string;

    const newTaskID = operation.target?.id as string;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newTaskID } : task,
      ),
    );
  };

  return (
    <section className="w-full h-screen">
      {boardID ? (
        <DragDropProvider onDragEnd={handleDragEvent}>
          <BoardBlock activeBoard={activeBoard}>
            <Columns columns={columns} tasks={tasks} />
          </BoardBlock>
        </DragDropProvider>
      ) : (
        <Preview board={boards} setBoardID={setBoardID} />
      )}
    </section>
  );
};
