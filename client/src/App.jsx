import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import StudentProfilePage from './student_pages/StudentProfilePage'
import GradesPage from './student_pages/GradesPage'
import BillingPage from './student_pages/BillingPage'
import SchedulePage from './student_pages/SchedulePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/studentprofile" element={<StudentProfilePage />}></Route>
      <Route path="/studentgrades" element={<GradesPage />}></Route>
      <Route path="/studentbilling" element={<BillingPage />}></Route>
      <Route path="/studentchedule" element={<SchedulePage />}></Route>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
