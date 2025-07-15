import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../context/TodoContext';

export function TodoList() {
  const { getFilteredAndSortedTodos } = useTodo();
  const todos = getFilteredAndSortedTodos();

  if (todos.length === 0) {
    return (
      <div className="card p-8 text-center">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          할 일이 없습니다
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          새로운 할 일을 추가해보세요!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
} 