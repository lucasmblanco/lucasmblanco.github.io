import { useLayoutEffect, useRef } from 'react'
// import enemy from "../images/weird.png";
// import gsap from 'gsap';
// import horizontalLoop from '../utils/gsapHelperFunctions';

export default function TableHead({ title, subtitle }) {
  
  // const textRef = useRef<(HTMLParagraphElement | null)[]>([null])


  useLayoutEffect(() => {
    
   

    // const loop = horizontalLoop(text, {paused: false,repeat: -1,});
    
    // gsap.to(imageRef.current, {
    //   repeat: -1,
    //   x: -360,
    //   ease: "steps(8)",
    //   duration: 1,
    // });

  }, [])

  return (
      <thead>
           <tr className="header text-center">
        <th
          className="   px-2 text-center py-6 border-b border-b-pure-black dark:border-b-pure-white font-normal font-inconsolata"
          colSpan={5}>
           <p  className=" uppercase scroll-text ">{title}</p>
            {/* <div className="relative block w-[45px] scale-150 overflow-hidden">
              <img className="character block max-w-none" alt="" src={enemy.src} ref={imageRef}/>
            </div> */}
           
             
              {/* <p  className="text-2xl uppercase md:text-6xl text-pink-400 dark:text-lime-500 scroll-text">{title}</p> */}
           
         
        </th>
      </tr>
    </thead>
  )
}
