import styled from "styled-components";
import { colors, fontSizes, margins, devices } from "../../theme/theme";

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

  ${devices.mobile} {
    width: 100%;
  }

  ${devices.laptop} {
    width: 19rem;
  }
`;

const HighLightCard = ({ title }) => {
  return <Card>{title}</Card>;
};

export default HighLightCard;
