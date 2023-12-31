

export default function TableButton({ id, currentPage, setCurrentPage }) {
    return (
        <button
            data-buttontb={id}
            onClick={(e) => setCurrentPage(e.target.dataset.buttontb)}
            className={`${Number(currentPage) === id && 'bg-pure-black text-pure-white dark:bg-pure-white dark:text-pure-black'} italic text-sm md:text-base border  px-4 rounded-full border-pure-black dark:border-pure-white select-none hover:bg-pure-black/20`
}
      >{id + 1}</button>
  )
}
