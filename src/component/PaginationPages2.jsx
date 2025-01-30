import { useState } from "react";

const PaginationPages2 = ({ handelPagination }) => {
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
    { page: num + 5 },
    { page: num + 6 },
    { page: num + 7 },
  ];

  return (
    <div className="flex bg-white rounded-lg items-center justify-center mt-32 gap-1">
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={(e) => {
            setCur(pg.page);
            handelPagination(e, i + 1);
          }}
          className={`p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white ${
            cur === pg.page ? "bg-red-500 text-white" : ""
          }`}
        >
          {pg.page}
        </button>
      ))}
    </div>
  );
};

export default PaginationPages2;
