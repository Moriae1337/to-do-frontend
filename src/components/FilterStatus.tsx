"use client";

import { Button } from "@/components/ui/button";

interface FilterStatusProps {
  filter: "all" | "done" | "undone";
  onChange: (filter: "all" | "done" | "undone") => void;
}

export default function FilterStatus({ filter, onChange }: FilterStatusProps) {
  const buttons: { label: string; value: "all" | "done" | "undone" }[] = [
    { label: "All", value: "all" },
    { label: "Done", value: "done" },
    { label: "Undone", value: "undone" },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          variant={filter === btn.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(btn.value)}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
}
