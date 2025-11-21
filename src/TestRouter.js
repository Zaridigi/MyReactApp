import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function TestRouter() {
  return (
    <BrowserRouter>
      <div style={{ 
        padding: '20px', 
        border: '3px solid green',
        margin: '20px',
        backgroundColor: '#f0f8ff'
      }}>
        <h1 style={{color: 'darkblue'}}>✅ ТЕСТ ROUTER v7</h1>
        
        <nav style={{ marginBottom: '20px' }}>
          <Link 
            to="/" 
            style={{ marginRight: '15px', color: 'blue', textDecoration: 'underline' }}
          >
            Главная
          </Link>
          <Link 
            to="/about" 
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            О нас
          </Link>
        </nav>
        
        <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px' }}>
          <Routes>
            <Route path="/" element={<div>🏠 <strong>Главная страница</strong> - Router работает!</div>} />
            <Route path="/about" element={<div>📖 <strong>Страница О нас</strong> - Навигация работает!</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}