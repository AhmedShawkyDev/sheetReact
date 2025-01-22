import { useState } from "react";
import Overlays2 from "./Overlays2";

const Portal2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Overlays2 isOpen={isOpen} close={close} />
      <div className="text-3xl mt-10 flex flex-col ">
        Get Over Here --------------------------*
        <button onClick={open} className="bg-red-500 p-2 rounded-lg mt-3">
          Toggle Button
        </button>
      </div>
    </>
  );
};

export default Portal2;
