import React, { useRef } from 'react';

import TableBody from './TableBody.tsx';


export default function TableData({ tableBodyData, currentPage }) {
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
