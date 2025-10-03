export const API_BASE = process.env.NEXT_PUBLIC_BASE_URL!;

export const ENDPOINTS = {
  tasks: `${API_BASE}/tasks`,
  taskDone: (id: string) => `${API_BASE}/tasks/${id}/done`,
  taskPriority: (id: string) => `${API_BASE}/tasks/${id}/priority`,
  taskById: (id: string) => `${API_BASE}/tasks/${id}`,
};
