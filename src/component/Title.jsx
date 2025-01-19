const Title = ({
  personName,
  Email,
  age,
  color,
  content = "No Thing",
  children,
  concon,
}) => {
  // console.log(props);
  // const name = props.personName;
  // const email = props.Email;
  // const age = props.age;
  // const color = props.color;
  // const content = props.content || "no content";
  // const child = props.children;
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className=" border-2 border-red-500 w-[500px] mt-2">
        <h1 className="text-3xl font-bold mx-auto my-auto  border-b-4  p-5">
          {personName}
        </h1>
        <h1 className="p-5 border-b-4">{Email}</h1>
        <h1 className="p-5 border-b-4">{age}</h1>
        <h1 className="p-5 border-b-4">{color}</h1>
        <p>{content}</p>
        <div> {children}</div>
        <div>{concon}</div>
      </div>
    </div>
  );
};

export default Title;
