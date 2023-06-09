
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
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { loadUser } from './Action/userAction';
import store from './Store';
import User from './components/Admin/User';
import Hotels from './components/Admin/Hotel';
import Accomodations from './components/Admin/Accomodation';
import Booking from './components/Admin/Booking';

function App() {


  const { isAuthenticated, user, loading } = useSelector((state) => state.user)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])



  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/acc/:id' element={<Details />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/listings' element={<Listings />} />

        <Route path='/bookings' element={<Bookings />} />

        <Route path='/admin/user' element={<User />} />
        <Route path='/admin/hotel' element={<Hotels />} />
        <Route path='/admin/accomodation' element={<Accomodations />} />
        <Route path='/admin/booking' element={<Booking />} />
      </Routes>
      <ToastContainer autoClose={500} />
    </BrowserRouter>
  );
}

export default App;
