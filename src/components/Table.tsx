import  { useState } from 'react';
import TableButton from './TableButton';
import TableData from './TableData';
import TableHead from './TableHead';

export default function Table({ title, subtitle, data }: { title: string, subtitle: string, data: any[] }) {
  const [currentPage, setCurrentPage] = useState(0); 
  
  const handlePageChange = (newPage: number) => setCurrentPage(newPage);
  
  return (
      <>
      <table className="w-full table-auto border-collapse select-none overflow-hidden text-base border-y border-y-pure-black dark:border-y-pure-white">
            <TableHead title={title} /> 
            <TableData tableBodyData={data} currentPage={currentPage} />
      </table>
      <div
      className="flex w-full justify-end gap-1 py-2 px-4 border-b border-b-pure-black dark:border-b-pure-white"
    >
        {data.map((_: any, i: number) =>
          <TableButton id={i} currentPage={currentPage} setCurrentPage={handlePageChange} key={i} />)
        }
        </div>
      </>
  )
}
