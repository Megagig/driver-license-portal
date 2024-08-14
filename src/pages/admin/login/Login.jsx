import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const login = () => {
    const adminAuth = {
      admin: {id: 1, username: "acme", email: "acme@gmail.com"}
    };

    sessionStorage.setItem("adminAuth", JSON.stringify(adminAuth));
  }
  return (
    <div className='flex flex-col items-start gap-6'>
      <h1>Login</h1>

      <button className='bg-grey text-white p-2' onClick={login}>Login</button>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/dlc">DLC</Link>
    </div>
  )
}

export default Login