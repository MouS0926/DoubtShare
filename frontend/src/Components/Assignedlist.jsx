import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssignedDoubtsAction, fetchNotifiedDoubtsAction } from '../Redux/Action/tutorAction';
import { Link } from 'react-router-dom';

export default function Assignedlist() {
   let userId= localStorage.getItem('userId');
   const { assigned, loading, error } = useSelector((state) => state.assignedReducer);
    const dispatch=useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(fetchAssignedDoubtsAction(token,userId));
      }, [dispatch]);


      if (loading) {
        return <div>Loading...</div>; 
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
    
      if (assigned.length === 0) {
        return <div>No doubts .</div>;
      }

      console.log(assigned);



  return (
    <div>
<div class="flex flex-col overflow-x-auto">
  <div class="sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Subject</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Created At</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
          {assigned && assigned.map((el, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{el.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4">{el.description}</td>
                    <td className="whitespace-nowrap px-6 py-4">{new Date(el.createdAt).toLocaleString()}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ${getStatusColor(el.status)}`}>
                        {el.status}</span>

                    </td>
                    <td className="whitespace-nowrap px-6 py-4">

                        <Link to={`/doubt/${el._id}`}>View</Link>

                        <button  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Chat</button>
                    </td>
                   
                    

                  </tr>
                ))}
           
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'; 
      case 'Accepted':
        return 'bg-green-50 text-green-800 ring-green-600/20'; 
      case 'Closed':
        return 'bg-blue-50 text-blue-800 ring-blue-600/20'; 
      default:
        return '';
    }
  };