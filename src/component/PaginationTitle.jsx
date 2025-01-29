import { useState } from "react";
import PaginationPages from "./PaginationPages";
const pageSize = 2; //عدد البوستات ف الصفحه اللي انا المفروض اعرضها---------*
const PaginationTitle = () => {
  const [data, setData] = useState([
    { id: 1, title: "title-1" },
    { id: 2, title: "title-2" },
    { id: 3, title: "title-3" },
    { id: 4, title: "title-4" },
    { id: 5, title: "title-5" },
    { id: 6, title: "title-6" },
    { id: 7, title: "title-7" },
    { id: 8, title: "title-8" },
    { id: 9, title: "title-9" },
    { id: 10, title: "title-10" },
    { id: 11, title: "title-11" },
    { id: 12, title: "title-12" },
    { id: 13, title: "title-13" },
    { id: 14, title: "title-14" },
    { id: 15, title: "title-15" },
  ]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const handlePagination = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    console.log("aa", from, to);
    setPagination({ ...pagination, from, to });
  };
  return (
    <div>
      <div className="text-3xl flex flex-col justify-center items-center mt-11 text-yellow-600 gap-10">
        {data.slice(pagination.from, pagination.to).map(({ id, title }) => (
          <h1 key={id}>{title}</h1>
        ))}
      </div>
      <PaginationPages
        handlePagination={handlePagination}
        count={Math.ceil(data.length / pageSize)}
      />
    </div>
  );
};

export default PaginationTitle;
