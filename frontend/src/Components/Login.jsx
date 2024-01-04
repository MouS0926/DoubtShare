import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, signupAction } from '../Redux/Action/userActions';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
    });

  const dispatch=useDispatch()
  
  const navigate = useNavigate();
  const user = useSelector((state) => state.loginReducer);
  const loading=useSelector((store)=>store.loginReducer.loading)
const userrole=localStorage.getItem("userrole")

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleLogin =  () => {
     dispatch(loginAction(formData));

  };



  useEffect(() => {
    if (!user.error ) {
      if (userrole === "student") {
        navigate('/dashboard');
      } else if (userrole === "tutor") {
        navigate('/notified');
      }
    }
  }, [user, userrole, navigate]);
 
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
                 Login
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form action="" >
              
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
   



                <button  onClick={handleLogin} type="button" className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                 
                  <span className="ml-" >{loading?"Logging In...":"Login"}</span>
                </button>
               </form>
               <Link to="/">Not Registered yet? Sign Up Here</Link>
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
