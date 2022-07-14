import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import IndexComponent from './pages/IndexComponent';
import  Create from './pages/create';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexComponent />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
