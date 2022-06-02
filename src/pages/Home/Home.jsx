import CardContainer from "../../components/CardContainer/CardContainer";
import HighLightCard from "../../components/HighLightCard/HighLightCard";
import { posts } from "../../data/data";

const getHighLightPosts = () => {
  return posts.slice(posts.length - 3);
};

const Home = () => {
  const postData = getHighLightPosts();

  return (
    <CardContainer>
      {postData.map((card) => {
        return <HighLightCard key={card.id} data={card} />;
      })}
    </CardContainer>
  );
};

export default Home;
