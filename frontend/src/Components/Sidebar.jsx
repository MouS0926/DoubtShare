import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    
<main className="flex">
      <div className="bg-gray-900  min-h-screen w-full pt-4 transition-all">
        <div className="text-center text-white p-6">
          <svg viewBox="0 0 248 31" className="w-auto hidden sm:block">
            {/* SVG Path Data */}
          </svg>
        </div>
        <ul className="mt-11">
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Dashboard</span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Doubts</span>
          </li>
          <Link to="/createdoubt">
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Create Doubts</span>
          </li>
          </Link>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Downloads</span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Shop</span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path Data */}
            </svg>
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors"> Trash</span>
          </li>
        </ul>
      </div>

      {/* <section className="flex-1 bg-gray-900 bg-opacity-20">
       
      </section> */}


    </main>




   
  )
}