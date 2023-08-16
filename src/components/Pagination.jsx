

const Pagination = ({pages, setCurrentPage, currentPage}) => {
    return (
        <ul className="flex gap-5 text-2xl justify-center p-2 ">
            {
                pages.map((page) => (
                    <li className={`bg-[#062226]/60 grid items-center justify-center w-[60px] h-[60px] rounded-[6px] cursor-pointer ${currentPage === pages && "hover:bg-[#062226]"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>
                ))
            }
        </ul>
    )
};

export default Pagination