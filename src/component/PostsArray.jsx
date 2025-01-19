const PostsArray = () => {
  const arr = [
    { id: 1, post: "encoding academy", des: "this is a description 1" },
    { id: 2, post: "hello", des: "this is a description 2" },
    { id: 3, post: "the third post", des: "this is a description 3" },
    { id: 4, post: "the 4 post ", des: "this is a description 4" },
    { id: 5, post: "5 post", des: "this is a description 5" },
    { id: 6, post: "6 post", des: "this is a description 6" },
    { id: 7, post: "7 post", des: "this is a description 7" },
    { id: 8, post: "8 post", des: "this is a description 8" },
    { id: 9, post: "9 post", des: "this is a description 9" },
    { id: 10, post: "10 post", des: "this is a description 10" },
  ];
  return (
    <>
      <div>
        {arr.map((item) => {
          return (
            <div
              className="flex flex-col  justify-center border-2 border-red-500 gap-6 m-5 pt-2 pb-2"
              key={item.id}
            >
              <h1 className="text-3xl font-bold text-yellow-600  ">
                {item.id}
              </h1>
              <hr />
              <h1 className="text-xl font-medium text-blue-500  ">
                {item.post}
              </h1>
              <hr />
              <p className="text-xl font-medium text-green-500">{item.des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostsArray;
