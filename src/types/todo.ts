export type Priority = 'low' | 'medium' | 'high';
export type Status = 'pending' | 'completed';

export interface Todo {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoFormData {
  title: string;
  priority: Priority;
}

export type FilterType = 'all' | 'pending' | 'completed';
export type SortType = 'createdAt' | 'priority' | 'title'; 