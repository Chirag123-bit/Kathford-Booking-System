
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/login' element={<h1>Login page</h1>} />
        <Route path='/register' element={<h1>Register page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
