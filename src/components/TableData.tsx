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
//  <tbody><tr className='text-center'><td>Probably my database isn't working right now, let me know and go to my <a href="https://github.com/lucasmblanco" target='_blank' className='font-bold'>Github</a> to view my projects</td></tr></tbody>