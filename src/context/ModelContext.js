import { createContext } from "react";

const ModalContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export default ModalContext;
