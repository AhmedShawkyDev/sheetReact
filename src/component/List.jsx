const List = () => {
  const arr = [
    { id: 1, name: "ahmed" },
    { id: 2, name: "mohamed" },
    { id: 3, name: "mostafa" },
    { id: 4, name: "ali" },
    { id: 5, name: "youssef" },
    { id: 6, name: "youssef" },
    { id: 7, name: "youssef" },
    { id: 8, name: "youssef" },
    { id: 9, name: "youssef" },
    { id: 10, name: "youssef" },
  ];
  return (
    <>
      {arr.map((item) => {
        return (
          <li key={item.id}>
            <h1>
              {item.id} :{item.name}
            </h1>
          </li>
        );
      })}
    </>
  );
};

export default List;
