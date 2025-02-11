import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";

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
import AdminCashierPage from './pages/admin_pages/users/CashierPage'
import AdminFacultyPage from './pages/admin_pages/users/FacultyPage'
import AdminStudentsPage from './pages/admin_pages/users/StudentsPage'
import UserRegistrationPage from './pages/admin_pages/registration/UserRegistrationPage'
import StudentRegistrationPage from './pages/admin_pages/registration/StudentRegistrationPage'
import FacultyRegistrationPage from './pages/admin_pages/registration/FacultyRegistrationPage'
import CashierRegistrationPage from './pages/admin_pages/registration/CashierRegistrationPage'
import SubjectsPage from './pages/admin_pages/SubjectsPage';

//Catch-All Imports
import Layout from "./components/Layout";


import AdminSideBar from "./components/Admin_Sidebar"


function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/faculty" element={<FacultyLoginPage />} />
        <Route path="/faculty/home" element={<FacultyHomePage />} />

        <Route path="/cashier" element={<CashierLoginPage />} />
        <Route path="/cashier/home" element={<CashierHomePage />} />

        <Route path="/admin" element={<AdminLoginPage />} />
        <Route element={<AdminSideBar />}>
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/cashier" element={<AdminCashierPage />} />
          <Route path="/admin/faculty" element={<AdminFacultyPage />} />
          <Route path="/admin/students" element={<AdminStudentsPage />} />
          <Route path="/admin/cashier_registration" element={<CashierRegistrationPage />} />
          <Route path="/admin/faculty_registration" element={<FacultyRegistrationPage />} />
          <Route path="/admin/students_registration" element={<StudentRegistrationPage />} />
          <Route path="/admin/subjects" element={<SubjectsPage />} />
        </Route>

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
      <ToastContainer />
    </BrowserRouter>   
  )
}

export default App

