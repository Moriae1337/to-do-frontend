"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskItemProps {
  id: string;
  title: string;
  done: boolean;
  priority?: number;
  due_date?: string;
  category?: string;
  onToggle: () => void;
  onDelete: () => void;
  onChangePriority?: (id: string, priority: number) => void;
}

import * as styles from "@/styles/taskItem";

const PRIORITY_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function TaskItem({
  id,
  title,
  done,
  priority = 5,
  due_date,
  category,
  onToggle,
  onDelete,
  onChangePriority,
}: TaskItemProps) {
  const handlePriorityChange = (value: string) => {
    const num = parseInt(value, 10);
    onChangePriority?.(id, num);
  };

  return (
    <Card className="w-full max-w-md mb-2">
      <CardContent className={styles.cardContent}>
        <div className="flex items-center gap-3">
          <Checkbox.Root
            className={styles.checkBoxRoot}
            checked={done}
            onCheckedChange={onToggle}
            aria-label={`Mark task "${title}" as done`}
          >
            <Checkbox.Indicator>
              <Check className="w-4 h-4 text-blue-500" />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <div className="flex flex-col">
            <CardTitle
              className={`text-sm font-semibold ${
                done ? "line-through text-gray-400" : ""
              }`}
            >
              {title}
            </CardTitle>

            {category && (
              <CardDescription className="text-xs text-gray-500">
                {category}
              </CardDescription>
            )}
            {due_date && (
              <CardDescription className="text-xs text-gray-500">
                Due: {new Date(due_date).toLocaleDateString()}
              </CardDescription>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={priority.toString()}
            onValueChange={handlePriorityChange}
          >
            <SelectTrigger className="w-16">
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

          <Button
            variant="destructive"
            size="sm"
            onClick={onDelete}
            aria-label={`Delete task "${title}"`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
