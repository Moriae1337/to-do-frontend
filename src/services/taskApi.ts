import { Task, CreateTaskType } from "@/types/tasks";
import { ENDPOINTS } from "@/config/config";

export async function createTask(task: CreateTaskType): Promise<Task> {
  const res = await fetch(`${ENDPOINTS.tasks}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
}

export async function fetchTasks(search?: string): Promise<Task[]> {
  const params = search ? `?search=${encodeURIComponent(search)}` : "";
  const res = await fetch(`${ENDPOINTS.tasks}/${params}`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export async function toggleTaskDone(id: string, done: boolean): Promise<Task> {
  const res = await fetch(ENDPOINTS.taskDone(id), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done }),
  });
  if (!res.ok) throw new Error("Failed to toggle task done");
  return res.json();
}

export async function deleteTask(id: string) {
  const res = await fetch(ENDPOINTS.taskById(id), { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete task");
}

export async function updateTaskPriority(
  id: string,
  priority: number
): Promise<Task> {
  const res = await fetch(ENDPOINTS.taskPriority(id), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priority }),
  });
  if (!res.ok) throw new Error("Failed to update priority");
  return res.json();
}
