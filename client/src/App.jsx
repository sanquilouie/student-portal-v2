import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import StudentProfilePage from './student_pages/StudentProfilePage'
import GradesPage from './student_pages/GradesPage'
import BillingPage from './student_pages/BillingPage'
import SchedulePage from './student_pages/SchedulePage'
import Layout from "./Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITHOUT Navbar */}
        <Route path="/" element={<LoginPage />} />

        {/* Routes WITH Navbar (Wrapped in Layout) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/studentprofile" element={<StudentProfilePage />} />
          <Route path="/studentgrades" element={<GradesPage />} />
          <Route path="/studentbilling" element={<BillingPage />} />
          <Route path="/studentschedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App

