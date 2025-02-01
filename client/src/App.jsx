import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import StudentProfilePage from './student_pages/StudentProfilePage'
import GradesPage from './student_pages/GradesPage'
import BillingPage from './student_pages/BillingPage'
import SchedulePage from './student_pages/SchedulePage'
import Layout from "./components/Layout";
import UserRegistrationPage from "./UserRegistrationPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/studentprofile" element={<StudentProfilePage />} />
          <Route path="/studentgrades" element={<GradesPage />} />
          <Route path="/studentbilling" element={<BillingPage />} />
          <Route path="/studentschedule" element={<SchedulePage />} />
          <Route path="/userregistration" element={<UserRegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App

