import { Task } from "@/types/tasks";
import {
  toggleTaskDone,
  deleteTask,
  updateTaskPriority,
} from "@/services/taskApi";

export const toggleTask = async (tasks: Task[], id: string, done: boolean) => {
  const updated = await toggleTaskDone(id, done);
  return tasks.map((t) => (t.id === id ? updated : t));
};

export const removeTask = async (tasks: Task[], id: string) => {
  await deleteTask(id);
  return tasks.filter((t) => t.id !== id);
};

export const changeTaskPriority = async (
  tasks: Task[],
  id: string,
  priority: number
) => {
  await updateTaskPriority(id, priority);
  return tasks.map((t) => (t.id === id ? { ...t, priority } : t));
};

export const filterTasks = (
  tasks: Task[],
  filter: "all" | "done" | "undone"
) => {
  if (filter === "done") return tasks.filter((t) => t.done);
  if (filter === "undone") return tasks.filter((t) => !t.done);
  return tasks;
};

export const sortTasks = (tasks: Task[], sort: "asc" | "desc" | null) => {
  if (sort === "asc")
    return [...tasks].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  if (sort === "desc")
    return [...tasks].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
  return tasks;
};
