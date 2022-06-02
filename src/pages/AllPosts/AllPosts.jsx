import { Link } from "react-router-dom";
import styled from "styled-components";
import CardContainer from "../../components/CardContainer/CardContainer";
import {
  colors,
  fontSizes,
  margins,
  devices,
  paddings,
} from "../../theme/theme";
import { posts } from "../../data/data";

const PostContainer = styled(CardContainer)`
  ${devices.mobile} {
    max-width: unset;
    width: 100%;
  }

  ${devices.laptop} {
    max-width: 64rem;
    width: 100%;
  }
`;

const Post = styled(Link)`
  width: 19rem;
  min-height: 19rem;
  margin: 0 auto ${margins.sm};
  padding: ${paddings.sm};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid #ff0ff0;
  box-sizing: border-box;

  ${devices.mobile} {
    width: 100%;
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 9.5rem;
  background: url(${(props) => props && props.image}) center/cover no-repeat;
`;

const PostContent = styled.div`
  color: ${colors.darkBlue};

  h3 {
    font-size: ${fontSizes.md};
    font-weight: 700;
  }

  p {
    font-size: ${fontSizes.sm};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: ${margins.sm};
  }

  hr {
    border-bottom: none;
    border-top-width: 1px;
    border-top-color: ${colors.lightBlue};
    color: ${colors.lightBlue};
  }
`;

const Initials = styled.div`
  float: left;
  width: 3rem;
  height: 3rem;
  color: ${colors.darkBlue};
  text-transform: uppercase;
  background: ${colors.lightBlue};
  border-radius: 50%;
  padding: 0 ${paddings.xs};
  margin-right: ${margins.sm};
  box-sizing: border-box;
  font-size: ${fontSizes.md};
  line-height: 3rem;
  text-align: center;
`;

const AuthorContainer = styled.div`
  display: inline-flex;
  height: 3rem;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  span {
    display: block;
    font-size: ${fontSizes.xs};
  }
`;

const AuthorName = styled.div`
  font-size: ${fontSizes.sm};
  margin-bottom: ${margins.xs};
`;

const createInitials = (name) => {
  const parts = name.split(" ");
  return `${parts[0].slice(0, 1)}${parts[1].slice(0, 1)}`;
};

const AllPosts = () => {
  return (
    <PostContainer>
      {posts.map((post) => {
        const initials = createInitials(post.author);
        return (
          <Post key={post.id} to="/">
            <PostImage image={post.bg} />
            <PostContent>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <hr />
              <div>
                <Initials>{initials}</Initials>
                <AuthorContainer>
                  <AuthorName>{post.author}</AuthorName>
                  <span>{post.date}</span>
                </AuthorContainer>
              </div>
            </PostContent>
          </Post>
        );
      })}
    </PostContainer>
  );
};

export default AllPosts;
