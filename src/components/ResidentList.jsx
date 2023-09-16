import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const initialPage = 1;

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const resident_per_page = 20;
  const totalPages = Math.ceil(residents.length / resident_per_page);

  const sliceStar = (currentPage - 1) * resident_per_page;
  const slicerEnd = sliceStar + resident_per_page;
  const residentsInPage = residents.slice(sliceStar, slicerEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [location]);

  return (
    <section>
      <section className="pt-10 p-2 grid gap-6 justify-center sm:grid-cols-3 max-w-[950px] mx-auto">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <section></section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default ResidentList;
