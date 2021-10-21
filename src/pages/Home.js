import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Home.css";

function Home() {
  return (
    <div>
      <Container maxWidth="xl" style={{ border: "1px solid blue" }}>
        <Box style={{ border: "1px solid blue", display: "flex" }}>
          {/* <h1> All articles</h1> */}

          <Grid
            container
            spacing={3}
            style={{ border: "1px solid red", width: "60%" }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard is the most amaxzing 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              hi
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              hi
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              hi
            </Grid>
          </Grid>
          <Box style={{ border: "1px solid green", width: "40%" }}>
            <h1>Latest titles</h1>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default Home;
