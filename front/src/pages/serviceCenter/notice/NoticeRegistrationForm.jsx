import React, { useState } from 'react';
import jwtAxios from 'pages/user/jwtUtil';
import { SERVER_URL } from '../../../api/serverApi';
import { useNavigate } from 'react-router-dom';

const NoticeRegistrationForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('notice'); // 공지사항 유형 상태
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await jwtAxios.post(`${SERVER_URL}/notice/user/noticeRegistration`, {
        noticeTitle: title,
        noticeContent: content,
        noticeType: type
      });
      
      if (response.status === 200) {
        setMessage('등록 완료되었습니다.');
        setTitle('');
        setContent('');
        setType('notice');
        navigate('/admin/notice'); // 등록 완료 후 이동할 페이지 경로
      }
    } catch (error) {
      console.error('Error registering notice:', error);
      setMessage('공지사항 등록에 실패했습니다.');
    }
  };

  return (
    <div>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="type">유형:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="notice">공지</option>
            <option value="event">이벤트</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default NoticeRegistrationForm;
