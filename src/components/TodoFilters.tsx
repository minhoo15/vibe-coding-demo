import React from 'react';
import { FilterType, SortType } from '../types/todo';
import { useTodo } from '../context/TodoContext';

export function TodoFilters() {
  const { state, setFilter, setSort, setSearch } = useTodo();

  return (
    <div className="card p-4 mb-6">
      <div className="space-y-4">
        {/* 검색 */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            검색
          </label>
          <input
            id="search"
            type="text"
            value={state.searchTerm}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="제목으로 검색..."
            className="input"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 필터 */}
          <div>
            <label htmlFor="filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              상태 필터
            </label>
            <select
              id="filter"
              value={state.filter}
              onChange={(e) => setFilter(e.target.value as FilterType)}
              className="input"
            >
              <option value="all">전체</option>
              <option value="pending">미완료</option>
              <option value="completed">완료</option>
            </select>
          </div>

          {/* 정렬 */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              정렬
            </label>
            <select
              id="sort"
              value={state.sortBy}
              onChange={(e) => setSort(e.target.value as SortType)}
              className="input"
            >
              <option value="createdAt">생성일순</option>
              <option value="priority">우선순위순</option>
              <option value="title">제목순</option>
            </select>
          </div>
        </div>

        {/* 통계 */}
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          <span>
            총 {state.todos.length}개 중 {state.todos.filter(t => t.status === 'pending').length}개 미완료
          </span>
          <span>
            {state.todos.filter(t => t.status === 'completed').length}개 완료
          </span>
        </div>
      </div>
    </div>
  );
} 