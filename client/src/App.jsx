import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login_pages/LoginPage'
import HomePage from './pages/student_pages/HomePage'
import StudentProfilePage from './pages/student_pages/StudentProfilePage'
import GradesPage from './pages/student_pages/GradesPage'
import BillingPage from './pages/student_pages/BillingPage'
import SchedulePage from './pages/student_pages/SchedulePage'
import Layout from "./components/Layout";
import StudentRegistrationPage from "./StudentRegistrationPage"
import UserRegistrationPage from './UserRegistrationPage'
import FacultyLoginPage from './pages/login_pages/FacultyLoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cashier" element={<FacultyLoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/studentprofile" element={<StudentProfilePage />} />
          <Route path="/studentgrades" element={<GradesPage />} />
          <Route path="/studentbilling" element={<BillingPage />} />
          <Route path="/studentschedule" element={<SchedulePage />} />
        </Route>
        <Route path="/studentregistration" element={<StudentRegistrationPage />} />
        <Route path="/userregistration" element={<UserRegistrationPage />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App

