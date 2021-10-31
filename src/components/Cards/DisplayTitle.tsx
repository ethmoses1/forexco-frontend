import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface IProps {
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
const DisplayTitle: FC<IProps> = ({ post }) => {
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
};
export default DisplayTitle;
