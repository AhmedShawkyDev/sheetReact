import { createPortal } from "react-dom";
import Modal from "./Modal";
import { uiAtom } from "./JotaiState";
import { useAtom } from "jotai";

const mountElement = document.getElementById("overlays");
const Overlays = () => {
  const [ui] = useAtom(uiAtom);
  return createPortal(
    <>{ui.modal && <Modal />}</>,

    mountElement
  );
};

export default Overlays;
