import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [signInput, setSignInput] = useState({
    email: "",
    password: "",
  });
  const emailInput = (e) => {
    setSignInput({ ...signInput, email: e.target.value });
  };
  const passWordInput = (e) => {
    setSignInput({ ...signInput, password: e.target.value });
  };

  const Click = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: signInput.email,
        password: signInput.password,
      })
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem("token", token);

        window.location = "./loginSuccess";
        console.log("token received", token);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.error);
      });
  };
  return (
    <>
      <div className="flex justify-center mt-56  ">
        <div className=" rounded-lg gap-3 flex flex-col w-[500px] h-[500px] bg-slate-400 justify-center items-center">
          <div className="text-7xl mb-9 text-amber-100">Sign-In </div>

          <div className="text-3xl text-white">E-Mail :</div>
          <input
            type="email"
            className="rounded p-2"
            value={signInput.email}
            onChange={emailInput}
          />
          <div className="text-3xl text-white">Password:</div>
          <input
            type="password"
            className="rounded p-2"
            value={signInput.password}
            onChange={passWordInput}
          />
          <button
            onClick={Click}
            className="px-5 py-1 border w-[100px] rounded-md bg-yellow-600 text-white "
          >
            Sign-In
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
