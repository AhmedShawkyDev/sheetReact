// import { useState } from "react";
// let nextId = 5;
// const Array = () => {
//   const [deviceInput, setDeviceInput] = useState("");
//   const [devices, setDevices] = useState([
//     { id: 1, name: "Iphone" },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Computer" },
//   ]);
//   const handelChange = (e) => {
//     setDeviceInput(e.target.value);
//   };
//   const handelAdd = () => {
//     setDevices([...devices, { id: nextId, name: deviceInput }]);
//     nextId = nextId + 1;
//   };
//   const handelDelete = (id) => {
//     const newDevices = devices.filter((device) => {
//       return device.id !== id;
//     });
//     setDevices(newDevices);
//   };
//   const devArr = devices.map((item) => {
//     return (
//       <li key={item.id}>
//         {" "}
//         {item.name}
//         <button
//           className="bg-red-500 rounded-lg ml-2 p-2 "
//           onClick={() => {
//             handelDelete(item.id);
//           }}
//         >
//           Delete
//         </button>
//       </li>
//     );
//   });
//   return (
//     <div className="flex flex-col">
//       <div>{devArr}</div>
//       <div>
//         <label htmlFor="device">Device Name :</label>
//         <input
//           type="text"
//           value={deviceInput}
//           onChange={handelChange}
//           className="border-2 "
//         />
//         <button className="bg-slate-500 rounded-lg " onClick={handelAdd}>
//           {" "}
//           add
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Array;
// import { useState } from "react";
// let nextId = 4;
// const Array = () => {
//   const [deviceInput, setDeviceInput] = useState("");
//   const [devices, setDevices] = useState([
//     { id: 1, name: "Iphone" },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Computer" },
//   ]);
//   const handelChange = (e) => {
//     setDeviceInput(e.target.value);
//   };
//   const handelAdd = () => {
//     setDevices([...devices, { id: nextId, name: deviceInput }]);
//     nextId = nextId + 1;
//   };
//   const handelDel = (id) => {
//     const newDevices = devices.filter((device) => {
//       return device.id !== id;
//     });
//     setDevices(newDevices);
//   };
//   const devArr = devices.map((item) => {
//     return (
//       <li key={item.id}>
//         {item.name}
//         <button
//           onClick={() => {
//             handelDel(item.id);
//           }}
//           className="bg-slate-500 rounded-lg "
//         >
//           Delete
//         </button>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <div>{devArr}</div>
//       <div className="flex flex-col">
//         <label htmlFor="device">Device Name : </label>
//         <input
//           type="text"
//           value={deviceInput}
//           onChange={handelChange}
//           className="border-2"
//         />
//         <button onClick={handelAdd} className="bg-slate-500 ">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Array;
// import { useState } from "react";
// let nextId = 4;
// const Array = () => {
//   const [deviceInput, setDeviceInput] = useState("");
//   const [devices, setDevices] = useState([
//     { id: 1, name: "Iphone" },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Computer" },
//   ]);
//   const handelChange = (e) => {
//     setDeviceInput(e.target.value);
//   };
//   const handelAdd = () => {
//     setDevices([...devices, { id: nextId, name: deviceInput }]);
//     nextId = nextId + 1;
//   };
//   const handelDel = (id) => {
//     const newDevices = devices.filter((device) => {
//       return device.id !== id;
//     });
//     setDevices(newDevices);
//   };
//   const devArr = devices.map((item) => {
//     return (
//       <li key={item.id} className="m-5 ">
//         {" "}
//         {item.name}
//         <button
//           className="bg-slate-500 rounded-md ml-2"
//           onClick={() => {
//             handelDel(item.id);
//           }}
//         >
//           Delete
//         </button>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <div> {devArr}</div>
//       <div className="flex gap-3">
//         <label htmlFor="device">Device Name : </label>
//         <input
//           type="text"
//           className=" border-2"
//           value={deviceInput}
//           onChange={handelChange}
//         />
//         <button onClick={handelAdd} className="bg-slate-500 rounded-md p-2">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Array;
// import { useState } from "react";

// let nextId = 4;
// const Array = () => {
//   const [deviceInput, setDeviceInput] = useState("");
//   const [devices, setDevices] = useState([
//     { id: 1, name: "Iphone" },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Computer" },
//   ]);
//   const handelDel = (id) => {
//     const newDevices = devices.filter((device) => {
//       return device.id !== id;
//     });
//     setDevices(newDevices);
//   };
//   const handelChange = (e) => {
//     setDeviceInput(e.target.value);
//   };
//   const handelAdd = () => {
//     setDevices([...devices, { id: nextId, name: deviceInput }]);
//     nextId = nextId + 1;
//   };
//   const devArr = devices.map((item) => {
//     return (
//       <li key={item.id}>
//         {" "}
//         {item.name}
//         <button
//           className=" bg-slate-500 rounded-md p-2"
//           onClick={() => {
//             handelDel(item.id);
//           }}
//         >
//           Del
//         </button>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <div> {devArr}</div>
//       <label htmlFor="device"> Device Name :</label>
//       <input
//         type="text"
//         value={deviceInput}
//         onChange={handelChange}
//         className="border-2"
//       />
//       <button onClick={handelAdd} className="bg-slate-500 rounded-md p-2">
//         Add
//       </button>
//     </div>
//   );
// };

// export default Array;
import { useState } from "react";
let nextId = 4;
const Array = () => {
  const [deviceInput, setDeviceInput] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "Iphone" },
    { id: 2, name: "Mac" },
    { id: 3, name: "Computer" },
  ]);
  const handelChange = (e) => {
    setDeviceInput(e.target.value);
  };
  const handelAdd = () => {
    setDevices([...devices, { id: nextId, name: deviceInput }]);
    nextId = nextId + 1;
  };
  const handelDel = (id) => {
    const newDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(newDevices);
  };
  // const handelEdit = (id) => {
  //   const newDevices = devices.map((item) => {
  //     if (item.id == id) {
  //       let newDevice = { ...item, name: item.name + "0" };
  //       return newDevice;
  //     } else {
  //       return item;
  //     }
  //   });
  //   setDevices(newDevices);
  // };
  const handelEdit = (id) => {
    const newDevices = devices.map((item) => {
      if (item.id == id) {
        let newDevice = { ...item, name: item.name + "0" };
        return newDevice;
      } else {
        return item;
      }
    });
    setDevices(newDevices);
  };
  const devArr = devices.map((item) => {
    return (
      <li key={item.id}>
        {item.name}
        <button
          className="bg-slate-500 rounded-md p-1 ml-1"
          onClick={() => {
            handelDel(item.id);
          }}
        >
          Del
        </button>
        {/* <button
          onClick={() => {
            handelEdit(item.id);
          }}
          className="bg-slate-500 rounded-md p-1 ml-1"
        >
          Edit
        </button> */}
        <button
          onClick={() => {
            handelEdit(item.id);
          }}
          className="bg-slate-500 rounded-md p-1 ml-1 "
        >
          Edit
        </button>
      </li>
    );
  });
  return (
    <div>
      <div>{devArr}</div>

      <label htmlFor="device">Device : </label>
      <input
        onSubmit={(e) => {
          e.preventDefault();
        }}
        type="text"
        className="border-2"
        value={deviceInput}
        onChange={handelChange}
      />
      <button onClick={handelAdd} className="bg-slate-500 rounded-md p-1 ml-1">
        Add
      </button>
    </div>
  );
};

export default Array;
