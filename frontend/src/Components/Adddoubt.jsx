import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Doubtform from './Doubtform'

export default function Adddoubt() {
  return (
    <div className="flex h-screen">
    {/* Left Section: Sidebar */}
    <div className="w-1/5">
      <Sidebar />
    </div>

    {/* Right Section */}
    <div className="w-4/5 flex flex-col m-0">
      {/* Top Section: Navbar */}
      <div className="h-16">
        <Navbar />
      </div>

      {/* Bottom Section: Mainbody */}
      <div className="flex-grow overflow-y-auto p-4">
        <Doubtform/>
      </div>
    </div>
  </div>
  )
}