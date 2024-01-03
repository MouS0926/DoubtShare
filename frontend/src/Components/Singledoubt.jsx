import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Singledoubt() {
const {doubtId}=useParams()
    
const [doubtdetails,setDoubtdetails]=useState({})
const [loading,setLoading]=useState(false)
const token=localStorage.getItem("token")
const [accepted, setAccepted] = useState(false);


const apiUrl=`https://doubtshare-api.onrender.com`

useEffect(()=>{
    setLoading(true)
    axios.get(`${apiUrl}/doubt/${doubtId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((res)=>{
        setLoading(false)
        setDoubtdetails(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })


},[doubtId,accepted])


const handleAcceptDoubt = () => {
   
    axios
      .post(`${apiUrl}/doubt/accept/${doubtId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
      
        setAccepted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

console.log(doubtdetails);
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

      {/* single doubt section */}
      <div className="flex-grow overflow-y-auto p-4">
        


{
    doubtdetails && 
   

<div class="max-w-xl mx-auto bg-white text-gray-800 rounded-md overflow-hidden shadow-md">
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-2 text-left text-gray-500">Doubt</h2>
    
    <p class="text-lg mb-4 text-left">
      <span class="text-blue-600 font-bold">Created By:</span> {doubtdetails.username}
    </p>
    <p class="text-lg mb-4 text-left">
      <span class="text-blue-600 font-bold">Created At:</span>{new Date(doubtdetails.createdAt).toLocaleString()}
    </p>
    <p class="text-lg mb-4 text-left">
      <span class="text-blue-600 font-bold">Subject:</span> {doubtdetails.subject}
    </p>
    <p class="text-lg mb-4 text-left">
      <span class="text-blue-600 font-bold">Description:</span> {doubtdetails.description}
    </p>
    {
                            doubtdetails.status=="Open"
                            ?
                            <button onClick={handleAcceptDoubt}  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Accept</button>
                        :
                        <button disabled class="rounded-md cursor-not-allowed bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Accepted</button>
                        }
  </div>
</div>





   
}


      </div>

    </div>
  </div>
  )
}
