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

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background: url(${(props) => props && props.image}) center/cover no-repeat
      ${colors.bg};
    opacity: 0.2;
  }

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

const HighLightCard = ({ data }) => {
  const { title, bg } = data;
  return <Card image={bg}>{title}</Card>;
};

export default HighLightCard;
