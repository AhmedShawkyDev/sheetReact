import Title from "./Title";

const MainSide = () => {
  const paragraph1 =
    "lorem ipsum dolor sit amet consectetur adipiscing elit sit amet consectetur adipiscing elit";
  const paragrap2 =
    "loremqweqweqeq ipsumqweqweqweqwe dolor sit amet consectetur adipiscing elit sit amet consectetur adipiscing elit";
  const para3 = "lorem lorem lorem lorem";
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Title
          personName="ahmed"
          Email="ahmed@gmail.com"
          age="32"
          color="red"
          content={paragraph1}
          concon={para3}
        >
          <h1 className="text-3xl font-bold mx-auto my-auto">
            welcome to my world{" "}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            quos sunt, iure amet, dolorum eaque illum sequi libero perferendis
            error sit velit impedit facere in harum voluptatibus omnis cumque
            corporis.
          </p>
        </Title>
        <Title
          personName="mohamed"
          Email="mohamed@gmail.com"
          age="33"
          color="yellow"
          content={paragrap2}
        >
          <p>Get Over Here ----------------------------------------</p>
        </Title>
        <Title
          personName="mostafa"
          Email="mostafa@gmail.com"
          age="34"
          color="blue"
        />
        <Title personName="amr" Email="amr@gmail.com" age="35" color="green" />
      </div>
    </>
  );
};

export default MainSide;
