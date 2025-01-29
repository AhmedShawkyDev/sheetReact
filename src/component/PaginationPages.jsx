import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// const PaginationPages = () => {
//   const [num, setNum] = useState(1);
//   const [cur, setCur] = useState(1);
//   const pages = [
//     { page: num },
//     { page: num + 1 },
//     { page: num + 2 },
//     { page: num + 3 },
//     { page: num + 4 },
//     { page: num + 5 },
//   ];
//   const next = () => {
//     setNum(num + 1);
//   };
//   const prev = () => {
//     num > 1 && setNum(num - 1);
//   };
//   return (
//     <>
//       <div className="flex bg-white rounded-lg items-center justify-center mt-32 gap-1">
//         <button
//           onClick={prev}
//           className="p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white"
//         >
//           <FaArrowLeft className="my-1 " />
//         </button>
//         {pages.map((pg, i) => (
//           <button
//             onClick={() => setCur(pg.page)}
//             key={i}
//             className={`p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white ${
//               cur == pg.page && "bg-red-500 text-white"
//             }`}
//           >
//             {pg.page}
//           </button>
//         ))}
//         <button
//           onClick={next}
//           className="p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white"
//         >
//           <FaArrowRight className="my-1 " />
//         </button>
//       </div>
//     </>
//   );
// };

// export default PaginationPages;

const PaginationPages = ({ handlePagination }) => {
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
    { page: num + 8 },
  ];
  const next = () => {
    setNum(num + 1);
  };
  const prev = () => {
    num > 1 && setNum(num - 1);
  };
  return (
    <div className="flex bg-white rounded-lg items-center justify-center mt-32 gap-1">
      <button
        className="p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white"
        onClick={() => {
          prev();
        }}
      >
        <FaArrowLeft className="my-1 " />
      </button>
      {pages.map((pg, i) => (
        <button
          className={`p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white ${
            cur == pg.page && "bg-red-500 text-white"
          }`}
          onClick={(e) => {
            setCur(pg.page);
            handlePagination(e, i + 1);
          }}
          key={i}
        >
          {pg.page}
        </button>
      ))}
      <button
        className="p-2 border-2 border-red-500 m-0 rounded-lg hover:bg-red-500 hover:text-white"
        onClick={next}
      >
        <FaArrowRight className="my-1 " />
      </button>
    </div>
  );
};

export default PaginationPages;
