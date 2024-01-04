import React from 'react'
import { Link } from 'react-router-dom'
import { RiDashboard2Line } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

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
<Link to="/dashboard">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
         <RiDashboard2Line style={{ color: 'white',fontSize: '25px' }}/>
         
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Dashboard</span>
        </li>
        </Link>

        <Link to="/alldoubts">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <FaList style={{ color: 'white',fontSize: '25px' }} />
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Doubts History</span>
        </li>
        </Link>

        <Link to="/createdoubt">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <IoMdAddCircle style={{ color: 'white',fontSize: '25px' }}/>
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

{/* <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
       
        <RiDashboard2Line style={{ color: 'white',fontSize: '25px' }}/>
       
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Dashboard</span>
        </li> */}

        <Link to="/notified">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <FaList style={{ color: 'white',fontSize: '25px' }}/>
        <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
         Notified Doubts</span>
        </li>
        </Link>

        <Link to="/assigned">
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
        <MdChecklist style={{ color: 'white',fontSize: '25px' }} />
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
