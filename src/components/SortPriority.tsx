"use client";

import { Button } from "@/components/ui/button";

interface SortPriorityProps {
  sort: "asc" | "desc" | null;
  onChange: (sort: "asc" | "desc" | null) => void;
}

export default function SortPriority({ sort, onChange }: SortPriorityProps) {
  const buttons: { label: string; value: "asc" | "desc" | null }[] = [
    { label: "Priority ↑", value: "asc" },
    { label: "Priority ↓", value: "desc" },
    { label: "None", value: null },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {buttons.map((btn) => (
        <Button
          key={btn.label}
          variant={sort === btn.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(btn.value)}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
}
