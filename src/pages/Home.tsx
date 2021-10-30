/** @jsxImportSource @emotion/react */
import React, { FC, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery, gql } from "@apollo/client";
import Header from "../components/Navbar";
import classes from "./Home.style";
import DisplayCard from "../components/DisplayCard";
import DisplayTitle from "../components/DisplayTitle";
import DisplayOldTitle from "../components/DisplayOldTitles";
interface Post {
  id: string;
  title: string;
  body: string;
  authorname: string;
  authorcountry: string;
  catagoryname: string;
  image: string;
  cover: string;
  username: string;
  createdAt: string;
}
const Home: FC = () => {
  const FETCH_POSTS_QUERY = gql`
    {
      getPosts {
        id
        title
        cover
        body
        authorname
        authorcountry
        image
        createdAt
      }
    }
  `;
  const { data } = useQuery(FETCH_POSTS_QUERY);
  const [more, setMore] = useState(false);

  const renderBlog = (restrict?: boolean) => {
    if (restrict) {
      return (
        data &&
        data.getPosts.map((post: Post, index: number) => {
          if (index > 9 && index < 15) {
            return <DisplayCard post={post} />;
          }
          return null;
        })
      );
    } else {
      return (
        data &&
        data.getPosts.map((post: Post, index: number) => {
          if (index < 10) {
            return <DisplayCard post={post} />;
          }
          return null;
        })
      );
    }
  };
  const renderTitles = () => {
    return (
      data &&
      data.getPosts.map((post: Post, index: number) => {
        if (index < 5) {
          return <DisplayTitle post={post} />;
        }
        return null;
      })
    );
  };
  const renderOldTitles = () => {
    return (
      data &&
      data.getPosts.map((post: Post, index: number) => {
        if (index > 4) {
          return <DisplayOldTitle post={post} />;
        }
        return null;
      })
    );
  };
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Typography>Latest Articles</Typography>
        <Box style={{ display: "flex" }}>
          <Grid container spacing={3} css={classes.grid}>
            {renderBlog()}
            {more ? (
              renderBlog(true)
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => setMore(true)}
                css={classes.button}
              >
                Get more articles...
              </button>
            )}
          </Grid>
          <Box css={classes.box}>
            <h3 css={classes.titles}>Latest titles </h3>
            {renderTitles()}
            <h3 css={classes.titles}>Older titles</h3>
            {renderOldTitles()}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default Home;
