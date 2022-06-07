import { useContext } from "react";
import styled from "styled-components";
import { colors, margins, zIndexes } from "../../theme/theme";
import ModalContext from "../../context/ModelContext";
import iconX from "../../assets/icons/icon-x.svg";
import Login from "./Login";

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

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Backdrop>
      <FormContainer>
        <CloseButton onClick={closeModal} />
        <Login />
      </FormContainer>
    </Backdrop>
  );
};

export default Auth;
