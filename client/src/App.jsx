import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Login Imports
import LoginPage from './pages/login_pages/LoginPage'
import FacultyLoginPage from './pages/login_pages/FacultyLoginPage'
import CashierLoginPage from './pages/login_pages/CashierLoginPage'
import AdminLoginPage from './pages/login_pages/AdminLoginPage'

//Student Imports
import HomePage from './pages/student_pages/HomePage'
import StudentProfilePage from './pages/student_pages/StudentProfilePage'
import GradesPage from './pages/student_pages/GradesPage'
import BillingPage from './pages/student_pages/BillingPage'
import SchedulePage from './pages/student_pages/SchedulePage'

//Faculty Imports
import FacultyHomePage from './pages/faculty_pages/HomePage'

//Cashier Imports
import CashierHomePage from './pages/cashier_pages/HomePage'

//Admin Imports
import AdminHomePage from './pages/admin_pages/HomePage'

//Catch-All Imports
import Layout from "./components/Layout";

import StudentRegistrationPage from "./StudentRegistrationPage"
import UserRegistrationPage from './UserRegistrationPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/faculty" element={<FacultyLoginPage />} />
        <Route path="/faculty/home" element={<FacultyHomePage />} />

        <Route path="/cashier" element={<CashierLoginPage />} />
        <Route path="/cashier/home" element={<CashierHomePage />} />

        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/home" element={<AdminHomePage />} />

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

