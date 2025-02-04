// import MainSide from "./MainSide";
// import Show from "./Show";
// import SideMenu from "./SideMenu";
// import { useState } from "react";
// import { useState } from "react";
// import Auth from "./Auth";
// import LoginSuccess from "./LoginSuccess";
// import Signin from "./Signin";
// import PaginationPages from "./PaginationPages";
// import PaginationTitle from "./PaginationTitle";
// import PaginationPages2 from "./PaginationPages2";
// import PaginationTitle2 from "./PaginationTitle2";
// import Portal2 from "./Portal2";
// import Async from "./Async";
// import State from "./State";
// import Scoreboard from "./Scoreboard";
// import PostsArray from "./PostsArray";
// import SideMenu from "./SideMenu";
// import Array from "./Array";
// import Count from "./Count";
// import PrayTimer from "./PrayTimer";
// import Tessssssst from "./Tessssssst";
// import Promises from "./Promises";
// const showSideMenu = true;
// function AppSideMenu() {
//   if (showSideMenu == true) {
//     return <SideMenu />;
//   }

import { useState } from "react";

// }
export default function First() {
  const [student, setStudent] = useState([]);
  const [input, setInput] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const inputValue = (e) => {
    setInput(e.target.value);
  };
  const submit = () => {
    setSubmitValue(input);
    setStudent([...student, input]);
  };

  const del = () => {
    const deleted = student.pop();
    setSubmitValue(deleted);
  };
  // const copyStudent = [...student];
  // const deleted = copyStudent.pop();
  // console.log(deleted);
  // const names = ["Ali", "Ahmed", "Sara", "Salma", "Amr"];
  // const filteredNames = names.filter((num) => num.includes("m"));
  // console.log(filteredNames);
  // const names = ["Ali", "Ahmed", "Sara", "Salma", "Amr"];
  // const filteredNames = names.filter((num) => num.includes("A"));
  // console.log(filteredNames);
  // students.push(" shawky");
  // students[3] = " mostafa";
  // students.pop();
  // students.pop();
  // students.pop();
  // students.pop();
  // students.pop();
  // const arr = [3, 2, 1, 5, 4];
  // arr.push(6);
  // arr.pop();
  // arr.shift();
  // arr.unshift(6);
  // arr.slice(1, 3);
  // arr.sort();
  // arr.indexof(4);
  // console.log(arr);
  // const [count, setCount] = useState(0);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  //   console.log(newCount);
  // };
  // const DecrementCount = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  //   console.log(newCount);
  // };
  // const [count, setCount] = useState(0);
  // const increase = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  // const increase = () => {
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  // };
  // const decrease = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // };
  // const double = (arr) => {
  //   return arr.concat(arr);
  // };
  // console.log(double([1, 2, 3]));
  // let number1 = 10;
  // let number2 = 4;
  // let Sum = number1 + number2;
  // let Sub = number1 - number2;
  // let Mult = number1 * number2;
  // let Div = number1 / number2;
  // let Mod = number1 % number2;
  // const Hello = document.getElementById("Hello").innerHTML;
  // let capStr = Hello.toUpperCase();
  // let replace = capStr.replace("O", "Y");
  // let reverse = replace.split("").reverse().join("");
  // const [change, setChange] = useState("");
  // const [output, setOutput] = useState("");
  // const changeText = (e) => {
  //   setChange(e.target.value);
  // };
  // const changeTextToCaps = () => {
  //   const Upper = change.toUpperCase();
  //   setOutput(Upper);
  // };
  // const changeTextToLetter = () => {
  //   const changeLetter = change.replace("o", "y").toUpperCase();
  //   setOutput(changeLetter);
  // };
  // const changeTextToReverse = () => {
  //   const reverse = change.split("").reverse().join("").toUpperCase();
  //   setOutput(reverse);
  // };
  // const changeShow = () => {
  //   setOutput(change);
  // };
  // const changeClear = () => {
  //   console.log("true");
  // };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-56 ">
        <input
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
        <button onClick={submit} className="bg-yellow-500 rounded-md p-2">
          Submit
        </button>
        <button onClick={del} className="bg-red-500 rounded-md p-2">
          Delete
        </button>
        {/* <MainSide /> 
        <AppSideMenu />
        <Show /> */}
        {/* <PostsArray />
        <SideMenu /> */}
        {/* <State /> */}
        {/* <Scoreboard /> */}
        {/* <Array /> */}
        {/* <Promises /> */}
        {/* <Tessssssst /> */}
        {/* <Async /> */}
        {/* <Auth /> */}
        {/* <Signin /> */}
        {/* <LoginSuccess /> */}
        {/* <PaginationPages /> */}
        {/* <PaginationPages2 /> */}
        {/* <PaginationTitle2 /> */}
        {/* <button
          onClick={() => {
            count > 0 && decrease();
          }}
          className="bg-red-600 p-3 text-white rounded-lg"
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          onClick={increase}
          className="bg-red-600 p-3  text-white  rounded-lg"
        >
          +
        </button> */}
        {/* <input
          className="border-2"
          type="text"
          value={change.text}
          onChange={changeText}
        />
        <button className="bg-slate-400" onClick={changeShow}>
          Show
        </button>
        <button className="bg-slate-400" onClick={changeTextToCaps}>
          Caps
        </button>
        <button className="bg-slate-400" onClick={changeTextToLetter}>
          Replace
        </button>
        <button className="bg-slate-400" onClick={changeTextToReverse}>
          Reverse
        </button>
        <button className="bg-slate-400" onClick={changeClear}>
          true
        </button>
        <div className="text-5xl text-red-500">{output}</div>
        <h1>{Hello}</h1>
        <h1>{capStr}</h1>
        <h1>{replace}</h1>
        <h1>{reverse}</h1>
        <h1 className="text-slate-500">
          Sum is : <span className="text-red-500">{Sum}</span>
        </h1>
        <h1 className="text-slate-500">
          Sub is : <span className="text-red-500">{Sub}</span>
        </h1>
        <h1 className="text-slate-500">
          Mult is : <span className="text-red-500">{Mult}</span>
        </h1>
        <h1 className="text-slate-500">
          Div is : <span className="text-red-500">{Div}</span>
        </h1>
        <h1 className="text-slate-500">
          Mod is : <span className="text-red-500">{Mod}</span>
        </h1> */}
      </div>
    </>
  );
}
// let number1 = 10;
// let number2 = 4;
// let Sum = number1 + number2;
// let Sub = number1 - number2;
// let Mult = number1 * number2;
// let Div = number1 / number2;
// let Mod = number1 % number2;
// First number is :10
// Second number is :4
// Sum is : 14
// Sub is : 6
// Mult is : 40
// Div is : 2,5
// Mod is : 2
// console.log(`Sum is : ${Sum}`);
// console.log(`Sum is : ${Sub}`);
// console.log(`Sum is : ${Mult}`);
// console.log(`Sum is : ${Div}`);
// console.log(`Sum is : ${Mod}`);
// const obj = { a: 1, b: 2, c: 3 };
// const arr = Object.entries(obj);
// console.log(arr);
// const keys = Object.keys(obj);
// console.log(keys);
// const values = Object.values(obj);
// console.log(values);
// let str = "Hello World";
// let capsAll = str.toUpperCase();
// let replaceO = capsAll.replace("O", "Y");
// let reverse = replaceO.split("").reverse().join("");
// Hello World
// HELLO WORLD
// HELLY WORLD
// DLROW YLLEH
// console.log(str);
// console.log(capsAll);
// console.log(replaceO);
// console.log(reverse);
// postions .. static relative absolute fixed sticky
