import axios from "axios";

const Auth = () => {
  //   axios
  //     .post("https://reqres.in/api/login", {
  //       email: "eve.holt@reqres.in",
  //       password: "pistol",
  //     })
  //     .then((response) => {
  //       let token = response.data.token;
  //       localStorage.setItem("token", token);
  //       console.log("token received", token);
  //       createNewUser();
  //     });

  //   const createNewUser = () => {
  //     let token = localStorage.getItem("token");
  //     let config = {
  //       header: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     axios
  //       .post(
  //         "https://reqres.in/api/users",
  //         {
  //           name: "Ahmed",
  //           job: "leader",
  //         },
  //         config
  //       )
  //       .then((response) => {
  //         token = response.data.token;
  //         console.log(response);
  //       });
  //   };

  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    })
    .then((response) => {
      let token = response.data.token;
      localStorage.setItem("token", token);
      createNewUser();
    });

  const createNewUser = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        "https://reqres.in/api/users",
        {
          name: "Ahmed",
          job: "leader",
        },
        config
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="text-6xl text-red-500">
      Get Over Here --------------------**
    </div>
  );
};

export default Auth;
