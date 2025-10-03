"use client";

import * as Dialog from "@radix-ui/react-dialog";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import * as styles from "@/styles/taskFormModal";

interface TaskFormModalProps {
  onTaskCreated: () => void;
}

export default function TaskFormModal({ onTaskCreated }: TaskFormModalProps) {
  const [open, setOpen] = useState(false);

  const handleTaskCreated = () => {
    onTaskCreated();
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="default" size="sm">
          Add Task
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />

        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Title className="text-lg font-bold mb-4">
            New Task
          </Dialog.Title>

          <TaskForm onTaskCreated={handleTaskCreated} />

          <Dialog.Close asChild aria-label="Close modal">
            <button className={styles.button}>✕</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
