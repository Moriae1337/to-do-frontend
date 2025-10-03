"use client";

import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import FilterStatus from "./FilterStatus";
import SortPriority from "./SortPriority";
import { fetchTasks } from "@/services/taskApi";
import { Task } from "@/types/tasks";
import * as styles from "@/styles/taskList";
import {
  toggleTask,
  removeTask,
  changeTaskPriority,
  filterTasks,
  sortTasks,
} from "@/utils/taskUtils";

interface TaskListProps {
  search?: string;
}

export default function TaskList({ search }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks(search);
      setTasks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [search]);

  const handleToggle = async (id: string, done: boolean) => {
    try {
      setTasks(await toggleTask(tasks, id, done));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setTasks(await removeTask(tasks, id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangePriority = async (id: string, priority: number) => {
    try {
      setTasks(await changeTaskPriority(tasks, id, priority));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  const displayedTasks = sortTasks(filterTasks(tasks, filter), sort);

  return (
    <div className={styles.div}>
      <FilterStatus filter={filter} onChange={setFilter} />
      <SortPriority sort={sort} onChange={setSort} />

      {displayedTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          priority={task.priority}
          due_date={task.due_date}
          category={task.category}
          onToggle={() => handleToggle(task.id, !task.done)}
          onDelete={() => handleDelete(task.id)}
          onChangePriority={handleChangePriority}
        />
      ))}
    </div>
  );
}
