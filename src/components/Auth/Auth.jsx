import { useContext, useState } from "react";
import styled from "styled-components";
import { colors, margins, paddings, zIndexes } from "../../theme/theme";
import ModalContext from "../../context/ModelContext";
import iconX from "../../assets/icons/icon-x.svg";
import Login from "./Login";
import Register from "./Register";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.modal};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  position: relative;
  width: 19rem;
  min-height: 19rem;
  background: ${colors.bg};
  padding: ${paddings.md};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${margins.xs};
  right: ${margins.xs};
  width: 1.25rem;
  height: 1.25rem;
  background: url(${iconX}) center/contain no-repeat;
`;

const Auth = () => {
  const { setIsOpen } = useContext(ModalContext);
  // "login" , "register" , "forgot"
  const [formType, setFormType] = useState("login");
  let chosenForm;

  const formChangeHandler = (formTypeName) => setFormType(formTypeName);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (formType === "login") {
    chosenForm = <Login formChangeHandler={formChangeHandler} />;
  } else if (formType === "register") {
    chosenForm = <Register formChangeHandler={formChangeHandler} />;
  } else {
    chosenForm = <div>forgot password form</div>;
  }

  return (
    <Backdrop>
      <FormContainer>
        <CloseButton onClick={closeModal} />
        {chosenForm}
      </FormContainer>
    </Backdrop>
  );
};

export default Auth;
