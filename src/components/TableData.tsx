import React, { useRef } from 'react';
import TableEmptyBody from './TableEmptyBody.tsx';
import TableBody from './TableBody.tsx';


export default function TableData({ tableBodyData, currentPage }) {

  if (Array.isArray(tableBodyData) && !tableBodyData.length) {
    return <TableEmptyBody/>
  }

  return (
    <>
      {
      tableBodyData.map((data, i) => (
        <TableBody data={data} index={i} key={Math.random()} currentPage={currentPage} />
      ))
    } 
    </>
    
  )
}
//  