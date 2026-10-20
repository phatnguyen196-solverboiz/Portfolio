# AI Log - Tuần 5

- **Nhiệm vụ**: Tách giao diện Portfolio thành các component React (Header, Hero, TagFilter, ProjectList, ProjectCard, ContactForm, Footer) và thiết kế state tối thiểu theo Thinking in React.
- **Công cụ**: AI Assistant
- **Kết quả**: Cấu trúc component sạch, state `activeTag` và `query` đặt tại `App`, form controlled với validation độc lập cho các trường `name`, `email`, `message`.

# AI Log - Tuần 6

- **Nhiệm vụ**: Hoàn thiện Portfolio v2 (React, Tailwind CSS v4, custom hook `useRepos` gọi API GitHub có cache 10 phút, `useLocalStorage` quản lý theme dark/light, và Modal `<dialog>` chi tiết dự án truy cập được bằng bàn phím).
- **Công cụ**: AI Assistant
- **Kết quả**:
  - Cài đặt Tailwind CSS v4 qua `@tailwindcss/vite` và cấu hình `@custom-variant dark`.
  - Viết `getRepos` (cache `localStorage` 10 phút) và custom hook `useRepos` hỗ trợ đầy đủ 3 trạng thái (loading/error/empty) với component `RepoSkeleton`.
  - Component `ThemeToggle` dùng hook `useLocalStorage` đồng bộ trạng thái giao diện với `document.documentElement`.
  - Component `ProjectDialog` sử dụng thẻ chuẩn `<dialog>` hỗ trợ đầy đủ phím Esc và Tab accessibility.
  - Build thành công không có warning hay error (`vite build`, `oxlint`).
