import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>top</div>} />
        <Route path="/create" element={<div>create</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
