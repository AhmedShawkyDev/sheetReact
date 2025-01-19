import { useState } from "react";

const State = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    color: "",
    content: "",
    isStudent: false,
    info: "",
    country: "",
    status: "",
    colors: "",
  });

  const handelName = (e) => {
    setFormInput({ ...formInput, name: e.target.value });
  };
  const handelAge = (e) => {
    setFormInput({ ...formInput, age: e.target.value });
  };
  const handelEmail = (e) => {
    setFormInput({ ...formInput, email: e.target.value });
  };
  const handelColor = (e) => {
    setFormInput({ ...formInput, color: e.target.value });
  };
  const handelContent = (e) => {
    setFormInput({ ...formInput, content: e.target.value });
  };
  const handelChecked = (e) => {
    setFormInput({ ...formInput, isStudent: e.target.checked });
  };
  const handelInfo = (e) => {
    setFormInput({ ...formInput, info: e.target.value });
  };
  const handelCountry = (e) => {
    setFormInput({ ...formInput, country: e.target.value });
  };
  const handelStatus = (e) => {
    setFormInput({ ...formInput, status: e.target.value });
  };
  const handelSelect = (e) => {
    setFormInput({ ...formInput, colors: e.target.value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        value={formInput}
        className="mt-5 flex flex-col"
      >
        <label htmlFor="name">Name : </label>
        <input
          value={formInput.name}
          onChange={handelName}
          className="border-2"
        />
        <label htmlFor="age"> Age : </label>
        <input
          type="text"
          value={formInput.age}
          onChange={handelAge}
          className="border-2"
        />
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          value={formInput.email}
          onChange={handelEmail}
          className="border-2"
        />
        <label htmlFor="color">Color :</label>
        <input
          type="text"
          value={formInput.color}
          onChange={handelColor}
          className="border-2"
        />
        <label htmlFor="content">Content :</label>
        <input
          type="text"
          value={formInput.content}
          onChange={handelContent}
          className="border-2"
        />
        <label htmlFor="student"> Are You Student : </label>
        <input
          type="checkbox"
          checked={formInput.isStudent}
          onChange={handelChecked}
          className="border-2"
        />
        <label htmlFor="textarea">Info :</label>
        <input
          type="text"
          value={formInput.info}
          onChange={handelInfo}
          className="border-2"
        />
        <select
          name=""
          id=""
          onChange={handelCountry}
          value={formInput.country}
        >
          <option>Egypt</option>
          <option>Ksa</option>
          <option>Uae</option>
        </select>
        <select onChange={handelSelect} value={formInput.colors}>
          <option>Red</option>
          <option>yellow</option>
          <option>Black</option>
          <option>Green</option>
        </select>
        <input
          type="radio"
          value="student"
          name="status"
          onChange={handelStatus}
        />
        Student
        <input
          type="radio"
          value="teacher"
          onChange={handelStatus}
          name="status"
        />
        Teacher
        <input
          type="radio"
          value="manger"
          onChange={handelStatus}
          name="status"
        />
        Manger
        <input type="radio" value="dev" onChange={handelStatus} name="status" />
        Dev
        <input
          type="radio"
          value="dealer"
          onChange={handelStatus}
          name="status"
        />
        Dealer
        <button
          onClick={() => {
            console.log(formInput);
          }}
          className="bg-orange-500 rounded-md mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default State;
