export interface Task {
  id: string;
  title: string;
  done: boolean;
  priority: number;
  due_date?: string;
  category?: string;
}

export interface CreateTaskType {
  title: string;
  description?: string;
  priority?: number;
  done?: boolean;
  due_date?: string;
  category?: string;
}
