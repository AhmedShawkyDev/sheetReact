import "./Modal.css";
const Modal2 = ({ close }) => {
  return (
    <div className="modal ">
      <div className="modal-content">
        <button onClick={close} className="close-btn">
          X
        </button>
        <h1 className="text-red-500">Modal</h1>
        <p className="text-2xl text-yellow-50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          ducimus. Perspiciatis ipsum iusto saepe assumenda amet ducimus
          pariatur, laboriosam dolorum nihil reprehenderit voluptates, animi,
          corrupti laudantium alias facere omnis totam!
        </p>
      </div>
    </div>
  );
};

export default Modal2;
