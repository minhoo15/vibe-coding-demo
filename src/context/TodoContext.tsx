import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Todo, TodoFormData, FilterType, SortType } from '../types/todo';

interface TodoState {
  todos: Todo[];
  filter: FilterType;
  sortBy: SortType;
  searchTerm: string;
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'UPDATE_TODO'; payload: Todo }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterType }
  | { type: 'SET_SORT'; payload: SortType }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'LOAD_TODOS'; payload: Todo[] };

interface TodoContextType {
  state: TodoState;
  addTodo: (todoData: TodoFormData) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: FilterType) => void;
  setSort: (sort: SortType) => void;
  setSearch: (term: string) => void;
  getFilteredAndSortedTodos: () => Todo[];
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const initialState: TodoState = {
  todos: [],
  filter: 'all',
  sortBy: 'createdAt',
  searchTerm: '',
};

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending', updatedAt: new Date() }
            : todo
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'LOAD_TODOS':
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todoData: TodoFormData) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: todoData.title,
      priority: todoData.priority,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    const todo = state.todos.find(t => t.id === id);
    if (todo) {
      const updatedTodo = { ...todo, ...updates, updatedAt: new Date() };
      dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
    }
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const setFilter = (filter: FilterType) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const setSort = (sort: SortType) => {
    dispatch({ type: 'SET_SORT', payload: sort });
  };

  const setSearch = (term: string) => {
    dispatch({ type: 'SET_SEARCH', payload: term });
  };

  const getFilteredAndSortedTodos = (): Todo[] => {
    let filteredTodos = state.todos;

    // 필터링
    if (state.filter !== 'all') {
      filteredTodos = filteredTodos.filter(todo => todo.status === state.filter);
    }

    // 검색
    if (state.searchTerm) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // 정렬
    filteredTodos.sort((a, b) => {
      switch (state.sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'title':
          return a.title.localeCompare(b.title);
        case 'createdAt':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    return filteredTodos;
  };

  const value: TodoContextType = {
    state,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
    setSort,
    setSearch,
    getFilteredAndSortedTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
} 