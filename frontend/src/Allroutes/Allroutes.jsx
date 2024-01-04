import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'
import Adddoubt from '../Components/Adddoubt'
import DoubtlistComponent from '../Components/DoubtlistComponent'
import NotifiedComponent from '../Components/NotifiedComponent'
import Singledoubt from '../Components/Singledoubt'
import AssignedComponent from '../Components/AssignedComponent'
import Chatcomponent from '../Components/Chatcomponent'


export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/login" element={<Login/> } />
            <Route path="/dashboard" element={<Dashboard/> } />
            <Route path="/createdoubt" element={<Adddoubt/> } />
            <Route path="/alldoubts" element={<DoubtlistComponent/> } />
            <Route path="/notified" element={<NotifiedComponent/> } />
            <Route path="/assigned" element={<AssignedComponent/> } />
            <Route path="/doubt/:doubtId" element={<Singledoubt/> } />

            {/* <Route path="/chat" element={<Chatcomponent/> } /> */}
        </Routes>

    </div>
  )
}
