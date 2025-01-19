const Buttons = ({ children, title }) => {
  if (title == null || title == "") {
    return <div></div>;
  }
  return (
    <div>
      <button className="bg-red-500 text-white p-2 border-2 rounded-lg mt-2">
        {title}
        Tag Buttons
        {children}
      </button>
    </div>
  );
};

export default Buttons;
