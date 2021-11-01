/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import classes from "./ArticlePage.style";
import Header from "../Navbar/Navbar";

const ArticlePage: FC = (props: any) => {
  const article_id = props.match.params.id;
  console.log(props)
  const FETCH_POST_QUERY = gql`
    query ($article_id: ID!) {
      getPost(postId: $article_id) {
        id
        title
        body
        cover
        authorname
        authorcountry
        image
        createdAt
      }
    }
  `;
  const { data } = useQuery(FETCH_POST_QUERY, { variables: { article_id } });
  return (
    <div>
      <Header />
      <Container maxWidth="md" css={classes.container}>
        <h2 css={classes.title}>
          Article by {data && data.getPost.authorname}
        </h2>
        <div>
          <img
            src={data && data.getPost.cover}
            alt="article page images"
            css={classes.img}
          ></img>
        </div>
        <div css={classes.div}>
          <div style={{ marginTop: "1vh" }}>
            <Typography>
              <span css={classes.date}>
                {data && new Date(data.getPost.createdAt).toDateString()}
              </span>
            </Typography>
            <h1>{data && data.getPost.title}</h1>
          </div>
          <div>
            <p>
              <span>{data && data.getPost.body}</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ArticlePage;
