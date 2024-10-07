import TableEmptyBody from './TableEmptyBody';
import TableBody from './TableBody';

interface TableDataProps {
  tableBodyData: Array<{ [key: string]: any }>;
  currentPage: number;
}

export default function TableData({ tableBodyData, currentPage }: TableDataProps) {

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