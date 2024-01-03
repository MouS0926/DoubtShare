import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'
import Adddoubt from '../Components/Adddoubt'


export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/> } />
            <Route path="/dashboard" element={<Dashboard/> } />
            <Route path="/createdoubt" element={<Adddoubt/> } />

        </Routes>

    </div>
  )
}