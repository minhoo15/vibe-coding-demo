import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              📝 TODO 앱
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              할 일을 관리하고 생산성을 높여보세요
            </p>
          </header>

          <main>
            <TodoForm />
            <TodoFilters />
            <TodoList />
          </main>

          <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 TODO 앱. React + TypeScript + Tailwind CSS로 제작되었습니다.</p>
          </footer>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App; 