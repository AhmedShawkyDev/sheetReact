import Header from "./src/component/Header";
import Index from "./src/Index";
const Home = () => {
  return (
    <>
      <Header />
      <Index pageName="Home Page" mostafa="hello" color="red" good="true" />
    </>
  );
};

export default Home;
