import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const loggedinUserrole = localStorage.getItem('userrole');


  return (
    
<main className="flex">
      <div className="bg-gray-900  min-h-screen w-full pt-4 transition-all">
        <div className="text-center text-white p-6">
          <svg viewBox="0 0 248 31" className="w-auto hidden sm:block">
            {/* SVG Path Data */}
          </svg>
        </div>
        <ul className="mt-11">

{ loggedinUserrole && loggedinUserrole=="student"
?
<>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG Path Data */}
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Dashboard</span>
        </li>

        <Link to="/alldoubts">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG Path Data */}
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Doubts</span>
        </li>
        </Link>

        <Link to="/createdoubt">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG Path Data */}
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Create Doubts</span>
        </li>
        </Link>
</>
:
''

}



{ loggedinUserrole && loggedinUserrole=="tutor"
?
<>

<li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG Path Data */}
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Dashboard</span>
        </li>

        <Link to="/notified">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Notified Doubts</span>
        </li>
        </Link>

        <Link to="/alldoubts">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       
        </svg>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Assigned Doubts</span>
        </li>
        </Link>
</>
:
""
}

         
        
        
        </ul>
      </div>

      {/* <section className="flex-1 bg-gray-900 bg-opacity-20">
       
      </section> */}


    </main>




   
  )
}
