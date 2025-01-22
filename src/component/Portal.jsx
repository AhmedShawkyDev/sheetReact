import { useSetAtom } from "jotai";
import Overlays from "./Overlays";
import { uiAtom } from "./JotaiState";
const Portal = () => {
  const setUi = useSetAtom(uiAtom);
  const open = () => {
    setUi((prev) => {
      return { ...prev, modal: true };
    });
  };
  return (
    <>
      <Overlays />
      <div className="text-3xl mt-10 flex flex-col ">
        Get Over Here --------------------------*
        <button onClick={open} className="bg-red-500 p-2 rounded-lg mt-3">
          Toggle Button
        </button>
      </div>
    </>
  );
};

export default Portal;
