import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { TodoTopPage } from './components/pages/TodoTopPage';
import { TodoCreatePage } from './components/pages/TodoCreatePage';
import { TodoEditPage } from './components/pages/TodoEditPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoTopPage />} />
        <Route path="/create" element={<TodoCreatePage />} />
        <Route path="/edit/:id" element={<TodoEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
