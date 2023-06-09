
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Details from './components/Home/Details';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profilepage';
import Listings from './pages/Listings';
import Bookings from './pages/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/acc' element={<Details />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/listings' element={<Listings />} />

        <Route path='/bookings' element={<Bookings />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
