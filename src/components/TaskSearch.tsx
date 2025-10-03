"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TaskSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
  debounceTime?: number;
}

export default function TaskSearch({
  search,
  onSearchChange,
  debounceTime = 300,
}: TaskSearchProps) {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(value);
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [value, debounceTime, onSearchChange]);

  useEffect(() => {
    setValue(search);
  }, [search]);

  return (
    <div className="w-full max-w-md mb-4">
      <Label htmlFor="task-search">Search Tasks</Label>
      <Input
        id="task-search"
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
