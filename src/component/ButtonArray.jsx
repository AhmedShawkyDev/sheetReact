const ButtonArray = () => {
  const arr = [
    {
      id: 1,
      name: "ahmed",
      age: 20,
    },
    {
      id: 2,
      name: "mohamed",
      age: 21,
    },
    {
      id: 3,
      name: "ali",
      age: 22,
    },
  ];
  return (
    <>
      {arr.map((item) => {
        return (
          <button
            key={item.id}
            className="bg-red-500 border-2 border-black h-16 rounded w-20"
          >
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </button>
        );
      })}
    </>
  );
};

export default ButtonArray;
