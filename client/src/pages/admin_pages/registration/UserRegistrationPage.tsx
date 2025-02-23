import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const UserRegistrationPage = () => {
    const [userid, setID] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/users', {userid, password, role
        })
            .then(result => {console.log(result)
                navigate('/')
            })
            .catch(err=> console.log(err)) 
    }

    return (
        <div className="flex items-center justify-center p-20">
            <div className="mx-auto w-1/5">
                <form onSubmit={handleSubmit}>          
                <div className="mb-5">
                    <label htmlFor="userid" className="mb-3 block text-base font-medium text-[#07074D]">
                        User ID
                    </label>
                    <input type="text" name="userid" id="userid" placeholder="User ID"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                        onChange={(e) => setID(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                        Password
                    </label>
                    <input type="text" name="password" id="password" placeholder="Password"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="role" className="mb-3 block text-base font-medium text-[#07074D]">
                        Role
                    </label>
                    <select 
                        name="role" 
                        id="role" 
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Cashier">Cashier</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                <div>
                    <button
                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Register
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistrationPage