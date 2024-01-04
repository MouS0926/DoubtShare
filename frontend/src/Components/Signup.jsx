import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from '../Redux/Action/userActions';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    subject: '',
    language: '',
    grade:""
   
  });

  const dispatch=useDispatch()
  const user = useSelector((state) => state.userReducer);
const loading=useSelector((state) => state.userReducer.loading);
 
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSignup = (e) => {
    e.preventDefault()
    dispatch(signupAction(formData));

    if (!user.error) {
      alert("Registered Successfully")
      navigate('/login'); // Redirect to login page using navigate
    }
  };
  // console.log(formData);
  return (
    <div>

<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
          <h1 className="text-3xl font-bold">
          DoubtShare
            </h1>
            
          </div>
          <div className=" flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Sign Up
                  
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form action="" onSubmit={handleSignup}>
              <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
    <select
        
        name="role"
       
        value={formData.role}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >

        <option value="">Sign Up as </option>
        <option value="tutor">Tutor</option>
        <option value="student">Student</option>
       
      </select>


      {formData.role === 'tutor' && (
                    <select
                    
                    name="subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData.subject}
                    onChange={handleChange}
                 >
            
                    <option value="">Select Subject</option>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Angular">Angular</option>
                    <option value="DSA">DSA</option>
                  </select>
                  )}

     
{formData.role === 'student' && (
                    <input
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Class Grade..."
                    />
                  )}


      <select
      
        name="language"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={formData.language}
        onChange={handleChange}
      >

        <option value="">Select Language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Bengali">Bengali</option>
       
      </select>

                <button   className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                 
                  <span className="ml-" >
                  {loading?"Signing Up...":" Sign Up"}
                  </span>
                </button>
               </form>
               <Link to="/login">Already Registered? Login Here</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')" }}
          ></div>
        </div>
      </div>
    </div>
        
    </div>
  )
}
