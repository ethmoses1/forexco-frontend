import React, { FC, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery, gql } from "@apollo/client";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import Header from "../components/Navbar";

import "./Home.css";
import DisplayCard from "../components/DisplayCard";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

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
  const classes = useStyles();
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

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  const truncate = (str: string) => {
    const max = 150;
    const suffix = "...";
    if (max > str.length) {
      return str;
    }

    return (
      str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(" ")) +
      suffix
    );
  };
  console.log(data);
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Typography>Latest Articles</Typography>
        <Box style={{ display: "flex" }}>
          {/* <h1> All articles</h1> */}

          <Grid
            container
            spacing={3}
            style={{ width: "75%", marginTop: "4vh" }}
          >
            {data &&
              data.getPosts.map((post: Post, index: number) => {
                if (index < 10) {
                  return <DisplayCard post={post} />;
                }
              })}
            {more ? (
              data &&
              data.getPosts.map((post: Post, index: number) => {
                if (index > 9 && index < 15) {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <Card key={post.id}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={post.cover ? post.cover : post.image}
                          alt="green iguana"
                        />
                        <NavLink
                          to={"/article-page/" + post.id}
                          style={{ textDecoration: "none" }}
                        >
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {truncate(post.body)}
                            </Typography>
                          </CardContent>
                        </NavLink>
                        <CardActions className={classes.cardActions}>
                          <Box className={classes.author}>
                            <Avatar src={post.image}></Avatar>
                            <Box ml={2}>
                              <Typography variant="subtitle2" component="p">
                                {/* {post.author} */}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                color="textSecondary"
                                component="p"
                              >
                                {new Date(post.createdAt).toLocaleDateString()}{" "}
                                <br />
                                {new Date(post.createdAt).toLocaleTimeString(
                                  "en-US",
                                  {
                                    hour12: true,
                                    hour: "numeric",
                                    minute: "numeric",
                                  }
                                )}
                              </Typography>
                            </Box>
                          </Box>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                }
              })
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  height: "4vh",
                  cursor: "pointer",
                  textAlign: "center",
                  marginTop: "20%",
                  marginLeft: "20px",
                }}
                onClick={() => setMore(true)}
              >
                Get more articles...
              </button>
            )}
          </Grid>
          <Box style={{ width: "25%", marginTop: "4vh", marginLeft: "25px" }}>
            <h3 className="old-titles">Latest titles </h3>
            {data &&
              data.getPosts.map((post: Post, index: number) => {
                if (index < 5) {
                  return (
                    <Grid item xs={12} sm={6} md={12}>
                      <Card
                        style={{
                          boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
                          marginBottom: "8px",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {post.title}
                        </Typography>
                        <p>By: {post.authorname}</p>
                      </Card>
                    </Grid>
                  );
                }
              })}
            {}

            <h3 className="old-titles">Older titles</h3>
            {data &&
              data.getPosts.map((post: Post, index: number) => {
                if (index > 4) {
                  return (
                    <Grid item xs={12} sm={6} md={12}>
                      <Card>
                        <NavLink
                          to={"/article-page/" + post.id}
                          style={{ textDecoration: "none" }}
                        >
                          {post.title}
                        </NavLink>
                      </Card>
                    </Grid>
                  );
                }
              })}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default Home;
