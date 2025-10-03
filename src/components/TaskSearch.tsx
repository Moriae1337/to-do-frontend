"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TaskSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function TaskSearch({
  search,
  onSearchChange,
}: TaskSearchProps) {
  return (
    <div className="w-full max-w-md mb-4">
      <Label htmlFor="task-search">Search Tasks</Label>
      <Input
        id="task-search"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
