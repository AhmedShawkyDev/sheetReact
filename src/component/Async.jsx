const Async = () => {
  const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    console.log(json[0].address.city);
  };
  getUser();
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
  };
  getPosts();
  return <div></div>;
};

export default Async;
