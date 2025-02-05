import { useState } from "react";

const Arraymap = () => {
  //   const [student, setStudent] = useState([]);
  //   const [input, setInput] = useState("");
  //   const [submitValue, setSubmitValue] = useState("");
  //   const inputValue = (e) => {
  //     setInput(e.target.value);
  //   };
  //   const submit = () => {
  //     setSubmitValue(input);
  //     setStudent([...student, input]);
  //   };

  //   const del = () => {
  //     setStudent(student.slice(0, -1));
  //   };
  //   const [input, setInput] = useState("");
  //   const [student, setStudent] = useState([]);

  //   const inputValue = (e) => {
  //     setInput(e.target.value);
  //   };
  //   const Submit = () => {
  //     setStudent([...student, input]);
  //   };
  //   const del = () => {
  //     setStudent(student.slice(0, -1));
  //   };

  //   const [input, setInput] = useState("");
  //   const [student, setStudent] = useState([]);
  //   const inputValue = (e) => {
  //     setInput(e.target.value);
  //   };
  //   const Submit = () => {
  //     setStudent([...student, input]);
  //   };

  //   const del = () => {
  //     setStudent(student.slice(0, -1));
  //   };
  //   console.log(student);
  const [input, setInput] = useState("");
  const [student, setStudent] = useState([]);
  const inputValue = (e) => {
    setInput(e.target.value);
  };
  const sub = () => {
    setStudent([...student, input]);
  };
  const del = () => {
    setStudent(student.slice(0, -1));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* <input
        type="text"
        className="border-2 border-black rounded-md "
        value={input}
        onChange={inputValue}
      />
      <div className="text-3xl ">
        {student.map((item, i) => (
          <div key={i}>{item} </div>
        ))}
      </div>
      <button onClick={submit} className="bg-green-500 rounded-md p-2">
        Submit
      </button>
      <button onClick={del} className="bg-red-500 rounded-md p-2">
        Delete
      </button> */}

      {/* <input
        type="text"
        value={input}
        onChange={inputValue}
        className="border-2 border-black p-2 rounded-md"
      />
      <h1>
        {student.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </h1>
      <button className="bg-green-400 p-2 rounded-md" onClick={Submit}>
        Submit
      </button>
      <button onClick={del} className="bg-red-400 p-2 rounded-md">
        Delete
      </button> */}
      {/* 
      <div className="flex flex-col gap-2 rounded-md">
        <input
          type="text"
          value={input}
          onChange={inputValue}
          className="p-2 border-2 rounded-md"
        />

        <button onClick={Submit} className="p-2 bg-green-500 rounded-md">
          Submit
        </button>
        <button className="p-2 bg-red-500 rounded-md" onClick={del}>
          Delete
        </button>
        {student.map((item, i) => (
          <h1 key={i}>{item}</h1>
        ))}
      </div> */}

      <div className="flex flex-col  gap-2">
        <input
          className="p-2 border-2 "
          type="text"
          value={input}
          onChange={inputValue}
        />
        <button onClick={sub} className="p-2 border-2 bg-green-500">
          Submit
        </button>
        <button onClick={del} className="p-2 border-2 bg-red-500">
          Delete
        </button>
        {student.map((item, i) => (
          <h1 key={i}>{item}</h1>
        ))}
      </div>
    </div>
  );
};

export default Arraymap;
