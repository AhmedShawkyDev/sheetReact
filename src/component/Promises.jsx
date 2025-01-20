const Promises = () => {
  // new Promise((resolve) => {
  //   setTimeout(() => {
  //     document.getElementById("title1").classList.remove("hidden");
  //     resolve();
  //   }, 2000);
  // })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title2").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title3").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title4").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title5").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title6").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })
  //   .then(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         document.getElementById("title7").classList.remove("hidden");
  //         resolve();
  //       }, 2000);
  //     });
  //   })

  //   .then(() => {
  //     console.log("Come Here --------------------*");
  //   });

  /////////////////////////// with async//////////////////////////////////////////
  const show = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title1").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title2").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title3").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title4").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title5").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title6").classList.remove("hidden");
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById("title7").classList.remove("hidden");
        resolve();
      }, 1000);
    });
  };
  show();
  return (
    <div className="flex flex-col mt-4">
      <h1 id="title1" className="hidden bg-red-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------
      </h1>
      <h1 id="title2" className="hidden bg-orange-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------2
      </h1>
      <h1 id="title3" className="hidden bg-yellow-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------3
      </h1>
      <h1 id="title4" className="hidden bg-green-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------4
      </h1>
      <h1 id="title5" className="hidden bg-blue-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------5
      </h1>
      <h1 id="title6" className="hidden bg-sky-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------6
      </h1>
      <h1 id="title7" className="hidden bg-purple-500 rounded-sm p-2 mt-2">
        {" "}
        Get Over Here ---------------7
      </h1>
    </div>
  );
};

export default Promises;
