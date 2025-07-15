# 📝 TODO 웹 애플리케이션

React + TypeScript + Tailwind CSS로 제작된 모던한 TODO 웹 애플리케이션입니다.

## ✨ 주요 기능

- ✅ TODO 항목 생성, 수정, 삭제, 완료 상태 토글
- 🎯 우선순위 설정 (낮음, 중간, 높음)
- 🔍 제목 기반 검색 기능
- 📊 상태별 필터링 (전체, 미완료, 완료)
- 📈 다양한 정렬 옵션 (생성일순, 우선순위순, 제목순)
- 🌙 다크모드/라이트모드 지원
- 📱 반응형 디자인 (모바일 우선)
- 💾 로컬 스토리지 기반 데이터 저장

## 🛠️ 기술 스택

- **프론트엔드**: React 18 + TypeScript
- **스타일링**: Tailwind CSS
- **상태 관리**: React Context + useReducer
- **빌드 도구**: Vite
- **패키지 관리**: npm

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:5173
   ```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── TodoForm.tsx    # TODO 추가 폼
│   ├── TodoItem.tsx    # 개별 TODO 항목
│   ├── TodoList.tsx    # TODO 목록
│   ├── TodoFilters.tsx # 필터 및 검색
│   └── ThemeToggle.tsx # 테마 토글
├── context/            # React Context
│   └── TodoContext.tsx # TODO 상태 관리
├── types/              # TypeScript 타입 정의
│   └── todo.ts
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 전역 스타일
```

## 🎨 UI/UX 특징

- **모바일 우선 디자인**: 모든 화면 크기에서 최적화된 사용자 경험
- **직관적인 인터페이스**: 사용자가 쉽게 이해하고 사용할 수 있는 UI
- **접근성 고려**: 키보드 네비게이션 및 스크린 리더 지원
- **부드러운 애니메이션**: 사용자 상호작용에 대한 자연스러운 피드백
- **다크모드**: 눈의 피로를 줄이는 다크 테마 지원

## 🔧 개발 가이드

### 컴포넌트 추가

새로운 컴포넌트를 추가할 때는 `src/components/` 폴더에 생성하고, TypeScript 타입을 명시적으로 정의합니다.

### 스타일링

Tailwind CSS 클래스를 사용하여 스타일링하며, 커스텀 스타일이 필요한 경우 `src/index.css`에 추가합니다.

### 상태 관리

모든 TODO 관련 상태는 `TodoContext`에서 관리되며, 새로운 상태가 필요한 경우 Context를 확장합니다.

## 📋 요구사항 구현 현황

- [x] TODO 항목 CRUD 기능
- [x] 우선순위 설정
- [x] 상태 관리 (미완료/완료)
- [x] 필터링 및 정렬
- [x] 검색 기능
- [x] 반응형 디자인
- [x] 다크모드 지원
- [x] 접근성 고려
- [ ] 백엔드 연동 (향후 구현 예정)
- [ ] 사용자 인증 (향후 구현 예정)

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요. 