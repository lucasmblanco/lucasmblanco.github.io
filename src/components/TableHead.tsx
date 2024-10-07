export default function TableHead({ title }: { title: string }) {
return (
      <thead>
           <tr className="header text-center">
        <th
          className="   px-2 text-center py-2 md:py-4 border-b border-b-pure-black dark:border-b-pure-white font-normal font-inconsolata text-xs md:text-base"
          colSpan={5}>
           <p  className=" uppercase scroll-text ">{title}</p>
        </th>
      </tr>
    </thead>
  )
}
