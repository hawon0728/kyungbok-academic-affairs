import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h1>경복대학교 교무처 포털</h1>;
}

function CreditApproval() {
  return <h2>학점인정 신청 페이지</h2>;
}

function CurriculumReview() {
  return <h2>교육과정 심의자료 등록 페이지</h2>;
}

function AdminMenu() {
  return <h2>관리자 메뉴</h2>;
}

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-800 text-white flex gap-4">
        <Link to="/">홈</Link>
        <Link to="/credit">학점인정 신청</Link>
        <Link to="/review">교육과정 심의자료</Link>
        <Link to="/admin">관리자</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<CreditApproval />} />
          <Route path="/review" element={<CurriculumReview />} />
          <Route path="/admin" element={<AdminMenu />} />
        </Routes>
      </div>
    </Router>
  );
}
