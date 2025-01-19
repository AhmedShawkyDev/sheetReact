import Footer from "./src/component/Footer";
import Header from "./src/component/Header";
import Index from "./src/Index";

const Css = () => {
  return (
    <div>
      <Header />
      <Index pageName="Css Page" new="hello " color="yellow" good="false" />
      <Footer />
    </div>
  );
};

export default Css;
