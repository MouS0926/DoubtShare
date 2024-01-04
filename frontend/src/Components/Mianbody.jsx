import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoubtsAction } from '../Redux/Action/doubtActions';
import { HiMiniLockOpen,HiMiniLockClosed } from "react-icons/hi2";
import { IoBagCheckSharp } from "react-icons/io5";
export default function Mianbody() {

  const dispatch = useDispatch();
  const { doubts, loading, error } = useSelector((state) => state.fetchdoubtReducer);

  const [openCount, setOpenCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchDoubtsAction(token));
  }, [dispatch]);



  useEffect(() => {
    
    if (doubts && doubts.length > 0) {
      const openDoubts = doubts.filter((doubt) => doubt.status === 'Open');
      const acceptedDoubts = doubts.filter((doubt) => doubt.status === 'Accepted');
      const closedDoubts = doubts.filter((doubt) => doubt.status === 'Closed');

      setOpenCount(openDoubts.length);
      setAcceptedCount(acceptedDoubts.length);
      setClosedCount(closedDoubts.length);
    }
  }, [doubts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {/* Display counts in card form */}
      <div className="flex justify-around mt-4">
        <div className="bg-blue-100 p-4 rounded-md shadow-md flex items-center">
          <HiMiniLockOpen  className="w-8 h-8 text-blue-500 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">Open Doubts</h3>
            <p className="text-2xl font-bold">{openCount}</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-md shadow-md flex items-center">
        <IoBagCheckSharp  className="w-8 h-8 text-blue-500 mr-2"/>
          <div>
            <h3 className="text-xl font-semibold">Accepted Doubts</h3>
            <p className="text-2xl font-bold">{acceptedCount}</p>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-md shadow-md flex items-center">
        <HiMiniLockClosed  className="w-8 h-8 text-blue-500 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">Closed Doubts</h3>
            <p className="text-2xl font-bold">{closedCount}</p>
          </div>
        </div>
      </div>

      {/* Rest of your main body content */}
      {/* ... */}
    </div>
  )
}
