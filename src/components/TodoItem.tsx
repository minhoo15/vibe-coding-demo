import React, { useState } from 'react';
import { Todo, Priority } from '../types/todo';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const priorityLabels = {
  low: '낮음',
  medium: '중간',
  high: '높음',
};

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    if (confirm('정말로 이 TODO를 삭제하시겠습니까?')) {
      deleteTodo(todo.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editTitle.trim()) {
      updateTodo(todo.id, { title: editTitle.trim() });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="card p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-colors ${
            todo.status === 'completed'
              ? 'bg-primary-600 border-primary-600'
              : 'border-gray-300 hover:border-primary-500'
          }`}
        >
          {todo.status === 'completed' && (
            <svg className="w-3 h-3 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onKeyDown={handleKeyPress}
                className="input text-sm"
                autoFocus
              />
              <div className="flex gap-2">
                <button onClick={handleSave} className="btn-primary text-sm px-3 py-1">
                  저장
                </button>
                <button onClick={handleCancel} className="btn-secondary text-sm px-3 py-1">
                  취소
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <h3
                className={`text-sm font-medium ${
                  todo.status === 'completed'
                    ? 'line-through text-gray-500'
                    : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {todo.title}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${priorityColors[todo.priority]}`}
                >
                  {priorityLabels[todo.priority]}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(todo.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="flex gap-1">
            <button
              onClick={handleEdit}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              title="수정"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              title="삭제"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 