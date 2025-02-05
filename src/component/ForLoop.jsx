const ForLoop = () => {
  //   for (let i = 0; i <= 30; i++) {
  //     console.log(`10 x ${i} = ${i * 10}`);
  //   }

  //   const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
  //   console.log(numbers);

  //   const numbers = Array.from({ length: 30 }, (e, i) => i + 1);
  //   console.log(numbers);
  //   let name = "Ahmed Shawky Mohamed";
  //   for (let x = 0; x <= 19; x++) {
  //     console.log(name[x]);
  //   }
  let names = ["Ahmed", "Shawky", "Mohamed", "Saad", "ali", "amr", "mustafa"];
  for (let x = 0; x < names.length; x++) {
    const name = names[x];
    if (name.filter((nam) => nam.includes("S"))) {
      console.log(name);
    }
  }
  return (
    // <div>
    //   {numbers.map((items, i) => (
    //     <h1 key={i}>
    //       7x {items} = {items * 7}
    //     </h1>
    //   ))}
    // </div>
    <>
      {names.map((item, i) => (
        <h1 key={i}>{item}</h1>
      ))}
    </>
  );
};
export default ForLoop;
