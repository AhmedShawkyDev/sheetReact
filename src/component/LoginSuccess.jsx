const LoginSuccess = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <div className="flex justify-center mt-56  ">
      <div className=" rounded-lg gap-3 flex flex-col w-[900px] h-[200px] bg-slate-400 justify-center items-center text-blue-950 text-3xl">
        Log-In Success
      </div>
    </div>
  );
};

export default LoginSuccess;
