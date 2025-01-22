import { createPortal } from "react-dom";
import Modal2 from "./Modal2";

const pppppppppppp = document.getElementById("overlays");
const Overlays2 = ({ isOpen, close }) => {
  return createPortal(<>{isOpen && <Modal2 close={close} />}</>, pppppppppppp);
};

export default Overlays2;
