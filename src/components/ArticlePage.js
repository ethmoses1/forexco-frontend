import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Header from "./Navbar";

function ArticlePage(props) {
  const article_id = props.match.params.id;
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
  const [title, setTitle] = useState("");
  console.log(props.match.params.id);
  // console.log(data && data.getPost.authorcountry)

  // useEffect(() => {
  //     if(data){
  //         setTitle(data.getPost.authorcountry)
  //     }

  // }, [title])
  return (
    <div>
      <Header />
      <Container
        style={{ border: "1px solid white", height: "100vh", marginTop: "5vh" }} maxWidth="md"
      >
        <h2 style={{ marginTop: "5vh", textAlign: "center"}}>
          Article by { data && data.getPost.authorname}
        </h2>
        <div style={{ textAlign: "center"}}>
        <img src={data && data.getPost.cover} alt="article photo" style={{width: "100%", height: "400px"}} ></img>
        </div>
        <div style={{ padding: "0px 10px 0px" }}>
        <div style={{ marginTop: "1vh"}}>
          <Typography>
            <span style={{fontSize: "1rem"}}>
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
}
export default ArticlePage;
