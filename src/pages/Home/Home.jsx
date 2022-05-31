import CardContainer from "../../components/CardContainer/CardContainer";
import HighLightCard from "../../components/HighLightCard/HighLightCard";

const data = [
  {
    id: 1,
    title: "some title one",
  },
  {
    id: 2,
    title: "some title two",
  },
  {
    id: 3,
    title: "some title three",
  },
];

const Home = () => {
  return (
    <CardContainer>
      {data.map((card) => {
        return <HighLightCard key={card.id} title={card.title} />;
      })}
    </CardContainer>
  );
};

export default Home;
