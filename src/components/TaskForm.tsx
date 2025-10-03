"use client";

import { useState } from "react";
import { createTask } from "@/services/taskApi";
import { CreateTaskType } from "@/types/tasks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface TaskFormProps {
  onTaskCreated: () => void;
}

const PRIORITY_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(5);
  const [done, setDone] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority(5);
    setDone(false);
    setDueDate("");
    setCategory("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      const task: CreateTaskType = {
        title,
        description: description || undefined,
        priority,
        done,
        due_date: dueDate ? new Date(dueDate).toISOString() : undefined,
        category: category || undefined,
      };
      await createTask(task);
      resetForm();
      onTaskCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md"
    >
      <Label htmlFor="task-title">Title</Label>
      <Input
        id="task-title"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />

      <Label htmlFor="task-desc">Description</Label>
      <Textarea
        id="task-desc"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
      />

      <Label htmlFor="task-priority">Priority</Label>
      <Select
        value={priority.toString()}
        onValueChange={(v) => setPriority(Number(v))}
      >
        <SelectTrigger id="task-priority" className="w-24">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          {PRIORITY_OPTIONS.map((num) => (
            <SelectItem key={num} value={num.toString()}>
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={done}
          onCheckedChange={(checked) => setDone(Boolean(checked))}
          disabled={loading}
          id="task-done"
        />
        <Label htmlFor="task-done">Done</Label>
      </div>

      <Label htmlFor="task-due">Due Date</Label>
      <Input
        id="task-due"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        disabled={loading}
      />

      <Label htmlFor="task-category">Category</Label>
      <Input
        id="task-category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={loading}
      />

      <Button type="submit" disabled={loading} className="mt-2">
        Add Task
      </Button>
    </form>
  );
}
