import styled from "styled-components";
import { colors, fontSizes, margins } from "../../theme/theme";

const Card = styled.div`
  width: 19rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.md};
  font-weight: 700;
  background: ${colors.bg};
  color: ${colors.darkBlue};
  margin: 0 auto ${margins.sm};

  &:last-child {
    margin: 0 auto;
  }
`;

const HighLightCard = ({ title }) => {
  return <Card>{title}</Card>;
};

export default HighLightCard;
