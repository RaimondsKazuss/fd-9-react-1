import Nav from "./Nav/Nav";
import GlobalStyle from "./GlobalStyle";
import HighLightCard from "./HighLightCard/HighLightCard";
import CardContainer from "./CardContainer/CardContainer";

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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <CardContainer>
        {data.map((card) => {
          return <HighLightCard key={card.id} title={card.title} />;
        })}
      </CardContainer>
    </>
  );
};

export default App;
