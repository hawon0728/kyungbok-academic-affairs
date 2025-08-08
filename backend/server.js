import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 학점인정 신청 API
app.post('/api/credit', (req, res) => {
  res.json({ message: '\ud559점인정 신청이 접수되었습니다.' });
});

// 심의자료 업로드 API
app.post('/api/review', (req, res) => {
  res.json({ message: '\uc2ec의자료가 등록되었습니다.' });
});

// 관리자 승인 API
app.post('/api/admin/approve', (req, res) => {
  res.json({ message: '\uc2b9인 완료' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
