import React from 'react'

export default function Doubtform() {
  return (
    <div>

<div className="max-w-md mx-auto mt-8 p-8 bg-blue-100 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create Doubt</h2>

      {/* Select Tag */}
      <div className="mb-6">
        <label htmlFor="selectField" className="block text-gray-700 text-sm font-medium mb-2">Select Subject</label>
        <div className="relative">
          <select id="selectField" name="subject" className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500">
          <option value="" disabled selected>Select Subject</option>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Angular">Angular</option>
                    <option value="DSA">DSA</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Description</label>
        <textarea id="description" name="description" rows="4" className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"></textarea>
      </div>

      {/* Submit Button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full" type="button">
        Submit
      </button>
    </div>




    </div>
  )
}
