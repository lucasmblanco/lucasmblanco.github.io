import  { useState } from 'react';
import TableButton from './TableButton.tsx';
import TableData from './TableData.tsx';
import TableHead from './TableHead.tsx';

export default function Table({ title, subtitle, data }) {
  const [currentPage, setCurrentPage] = useState(0); 
  
  const handlePageChange = (newPage) => setCurrentPage(newPage);
  
  return (
      <>
      <table className="w-full table-auto border-collapse select-none overflow-hidden text-base border-y border-y-pure-black dark:border-y-pure-white">
            <TableHead title={title} subtitle={subtitle} /> 
            <TableData tableBodyData={data} currentPage={currentPage} />
      </table>
      <div
      className="flex w-full justify-end gap-1 py-2 px-4 border-b border-b-pure-black dark:border-b-pure-white"
    >
        {data.map((_, i) =>
          <TableButton id={i} currentPage={currentPage} setCurrentPage={handlePageChange} key={i} />)
        }
        </div>
      </>
  )
}
