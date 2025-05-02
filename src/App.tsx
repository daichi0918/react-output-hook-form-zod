import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { TodoTopPage } from './components/pages/TodoTopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoTopPage />} />
        <Route path="/create" element={<div>create</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
