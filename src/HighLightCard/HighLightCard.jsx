import styled from "styled-components";

const Card = styled.div`
  width: 19rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  background: #dbe2ef;
  color: #112d4e;
  margin: 0 auto 1rem;

  &:last-child {
    margin: 0 auto;
  }
`;

const HighLightCard = ({ title }) => {
  return <Card>{title}</Card>;
};

export default HighLightCard;
