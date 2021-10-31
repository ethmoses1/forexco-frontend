import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";

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
const DisplayOldTitle: FC<IProps> = ({ post }) => {
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
};
export default DisplayOldTitle;
