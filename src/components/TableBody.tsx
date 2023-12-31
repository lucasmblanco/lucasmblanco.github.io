import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'
import Tech from './Tech.tsx';
import MemoExternalLink from './ExternalLink.tsx';

export default function tableBody({ data, index, currentPage }) {
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
    className="">
    {data.map((project) => (
   
         <tr  key={Math.random()} className="bg-transparent  transition-all group data-hover-effect ">
        {/* <td className=" py-6">
          <span className=" not-italic text-xxs">
            #{project.id}
          </span>
        </td> */}
        <td className="py-6 md:text-center">
          <span>{project.name}</span>
        </td>
        <td className="hidden    md:table-cell">
          <div className="flex gap-2 items-center">
            {project.tech.map((t) => (
              <Tech name={t} key={Math.random()}/>
            ))}
          </div>
        </td>
        <td className="">
          <a href={project.demo_link} target="_blank">
            <span className="hover:brightness-175 flex items-center ">
              Demo
              <MemoExternalLink/>
            </span>
          </a>
        </td>
        <td className="  ">
          <a href={project.source_link} target="_blank">
            <span className="hover:brightness-175 flex items-center ">
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
