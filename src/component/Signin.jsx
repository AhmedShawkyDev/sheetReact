import axios from "axios";

const Signin = () => {
  const Posh = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem("token", token);
        console.log("token received", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center mt-56  ">
        <div className=" rounded-lg gap-3 flex flex-col w-[500px] h-[500px] bg-slate-400 justify-center items-center">
          <div className="text-7xl mb-9 text-red-700">Sign-In </div>

          <div className="text-3xl text-white">E-Mail :</div>
          <input type="email" className="rounded" />
          <div className="text-3xl text-white">Password:</div>
          <input type="password" className="rounded" />
          <button
            onClick={Posh}
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
