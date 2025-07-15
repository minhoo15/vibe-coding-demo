# TODO 웹앱 설계도 및 다이어그램 (Mantine UI 적용)

## Mermaid 다이어그램

```mermaid
flowchart TD
  A[사용자] -->|입력| B[TodoForm]
  B -->|새 Todo 추가| C[TodoContext]
  C -->|상태 제공| D[TodoList]
  D -->|각 항목 렌더| E[TodoItem]
  C -->|상태 제공| F[TodoFilters]
  F -->|필터/검색/정렬| C
  C -->|상태 제공| G[ThemeToggle]
  G -->|다크/라이트 토글| H[UI 전체]
  C -->|상태 제공| H
  E -->|수정/삭제/완료| C

  subgraph UI[UI 전체 (Mantine 기반)]
    D
    F
    G
  end

  style A fill:#f9fafb,stroke:#3b82f6,stroke-width:2px
  style C fill:#f1f5f9,stroke:#2563eb,stroke-width:2px
  style H fill:#f3f4f6,stroke:#1e293b,stroke-width:2px
```

---

## 각 요소 설명

- **사용자**: 실제로 앱을 사용하는 사람
- **TodoForm**: 할 일 입력 및 추가 폼 (Mantine의 Form, TextInput, Button 등 활용)
- **TodoContext**: 앱의 상태(할 일 목록, 필터, 정렬 등) 중앙 관리
- **TodoList**: 할 일 목록을 렌더링 (Mantine의 Card, List, Group 등 활용)
- **TodoItem**: 개별 할 일 항목(수정/삭제/완료 가능, Mantine 컴포넌트 활용)
- **TodoFilters**: 필터, 검색, 정렬 UI (Mantine의 Select, TextInput 등 활용)
- **ThemeToggle**: 다크/라이트 모드 전환 (Mantine의 ColorSchemeProvider 활용)
- **UI 전체**: 모든 화면 요소(Theme 반영, Mantine 스타일 적용) 