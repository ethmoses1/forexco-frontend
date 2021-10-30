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
import Header from "./Navbar";

interface IPost {
  post: {
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
  };
}

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

const DisplayCard: FC<IPost> = ({post}) => {
  const classes = useStyles();
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
            <Typography gutterBottom variant="h5" component="div">
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
                {new Date(post.createdAt).toLocaleDateString()} <br />
                {new Date(post.createdAt).toLocaleTimeString("en-US", {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                })}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default DisplayCard;
