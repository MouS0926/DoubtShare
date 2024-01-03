import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoubtsAction } from '../Redux/Action/doubtActions';

export default function Alldoubts() {

const dispatch = useDispatch();
  const { doubts, loading, error } = useSelector((state) => state.fetchdoubtReducer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchDoubtsAction(token));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  if (doubts.length === 0) {
    return <div>No doubts created yet.</div>;
  }

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