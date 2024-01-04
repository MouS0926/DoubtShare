import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoubtsAction } from '../Redux/Action/doubtActions';

export default function Alldoubts() {
  const [statusFilter, setStatusFilter] = useState('');

const dispatch = useDispatch();
  const { doubts, loading, error } = useSelector((state) => state.fetchdoubtReducer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchDoubtsAction(token,statusFilter));
  }, [dispatch,statusFilter]);


  console.log(doubts);
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  // console.log(statusFilter);
  return (
    <div>


<div className="relative">
  <select
    name="subject"
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="w-40 p-3 border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500"
  >
    <option value=""  selected>Select Status</option>
    <option value="Open">Open</option>
    <option value="Accepted">Accepted</option>
    <option value="Close">Close</option>
    
  </select>
  
</div>


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
          {doubts && doubts.map((doubt, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{doubt.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4">{doubt.description}</td>
                    <td className="whitespace-nowrap px-6 py-4">{new Date(doubt.createdAt).toLocaleString()}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <span class={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ${getStatusColor(doubt.status)}`}>
                        {doubt.status}</span>

                    </td>
{
    doubt.status=="Accepted" ?
    <td className="whitespace-nowrap px-6 py-4">
                    <button  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Chat</button>

                    </td>
                    :
                    <td className="whitespace-nowrap px-6 py-4">
                        <button disabled class="rounded-md cursor-not-allowed bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                             Chat</button>

                    </td>


}
                    
                   
                    

                  </tr>
                ))}
           

           {
            doubts.length === 0?
            "No doubts"
            :
            ""
           }
           
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