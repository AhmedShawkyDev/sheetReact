import { createPortal } from "react-dom";
import Modal1 from "./Modal1";
const mountElement = document.getElementById("overlays");
const Overlays1 = ({ isOpen, close }) => {
  return createPortal(<>{isOpen && <Modal1 close={close} />}</>, mountElement);
};

export default Overlays1;
