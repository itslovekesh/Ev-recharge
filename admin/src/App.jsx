import React, { useContext } from 'react'
import { ChargerContext } from './context/ChargerContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddCharger from './pages/Admin/AddCharger';
import ChargersList from './pages/Admin/ChargersList';
import Login from './pages/Login';
import ChargerAppointments from './pages/Charger/ChargerAppointments';
import ChargerDashboard from './pages/Charger/ChargerDashboard';
import ChargerProfile from './pages/Charger/ChargerProfile';

const App = () => {

  const { cToken } = useContext(ChargerContext)
  const { aToken } = useContext(AdminContext)

  return cToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-slots' element={<AllAppointments />} />
          <Route path='/add-charging_station' element={<AddCharger />} />
          <Route path='/charger-list' element={<ChargersList />} />
          <Route path='/charger-dashboard' element={<ChargerDashboard />} />
          <Route path='/charger-appointments' element={<ChargerAppointments />} />
          <Route path='/charger-profile' element={<ChargerProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App