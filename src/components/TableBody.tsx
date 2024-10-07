import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'
import Tech from './Tech';
import MemoExternalLink from './ExternalLink';

export default function tableBody({ data, index, currentPage }: any) {
  const currentTable = useRef<HTMLTableSectionElement>(null);

  useLayoutEffect(() => {
    
    if (currentTable.current !== null) {
      gsap.from(currentTable.current, {
        x: 200, 
        opacity: 0,
        ease: "sine.inOut",
        duration: 1,
      })
    }
     
    
    return () => {
      if (currentTable.current !== null) { 
        gsap.to(currentTable.current, {
          x: -200,
          opacity: 0,
          ease: "sine.inOut",
          duration: 1,
        })
      }
    
    }
    
  }, [currentPage])

  return (
    Number(currentPage) === index && <tbody
    ref={currentTable}
    data-tb={index}
    >
    {data.map((project: any) => (
         <tr  key={Math.random()} className="bg-transparent  transition-all group data-hover-effect ">
        <td className="py-6 md:text-center">
          <span>{project.name}</span>
        </td>
        <td className="hidden    md:table-cell">
          <div className="flex gap-2 items-center">
            {project.tech.map((t: any) => (
              <Tech name={t} key={Math.random()}/>
            ))}
          </div>
        </td>
        <td >
          <a href={project.demo_link} target="_blank">
            <span className="hover:brightness-175 flex justify-end items-center md:justify-start">
              Demo
              <MemoExternalLink/>
            </span>
          </a>
        </td>
        <td className="  ">
          <a href={project.source_link} target="_blank">
            <span className="hover:brightness-175 flex justify-end items-center md:justify-start">
              Source
              <MemoExternalLink/>
            </span>
          </a>
        </td>
      </tr>
   
    ))}
  </tbody>
  )
}
