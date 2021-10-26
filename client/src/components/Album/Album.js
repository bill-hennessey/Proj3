import * as React from "react";
import { useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import { pink } from "@mui/material/colors";
import { useState, useEffect } from "react";

import { QUERY_COMMENT } from "../../utils/queries";
import cow from "../../../src/pngegg.png";
// import { Movie } from "../../pages/Movie";

const styles = {
  pink: {
    color: "#E91E63",
    fontWeight: "bolder",
  },
  brown: {
    color: "#3f000f",
    fontWeight: "light",
  },
  buttons: {
    background: "#E91E63",
  },
  img: {
    maxHeight: "250px",
    alignContent: "center",
    objectFit:'contain',
  },
};

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let comments = [];

export function Album() {
  const [movies, setMovies] = useState("");

  const { loading, data } = useQuery(QUERY_COMMENT);
  const comments = data?.comments || [];

  // const getPoster = async (comment) => {
  //   const url = `https://www.omdbapi.com/?s=${comment}&apikey=95c5c4f`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   const poster = await responseJson.Search[0].Poster;
  //   console.log(poster);

  //   if (poster) {
  //     setMovies(poster);
  //   }
  // };
  // console.log(poster);
  // useEffect(() => {
  //   getPoster(comments);
  // });

  // console.log(getPoster("titanic"));
  // const commmentData = (event) => {
  //   try {
  //     const {comments} = data;
  //     console.log(comments)
  //   } catch {

  //   }
  // }
  //   useEffect(() => {
  //     // Update the localStorage count variable using the setItem method
  //     //myCount = key, value in that key = count
  //   console.log(comments)
  //   return comments;
  //  },);

  return (
    <>
      <CssBaseline />
      <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
        <Icon icon="mdi:cow" />
      </Avatar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <img style={styles.img} src={cow} alt="I am a cow" />

              <span style={styles.pink}>moo</span>
              <span style={styles.brown}>vie</span>
            </Typography>
            <br />
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Mooooove over Rotten Tomatoes. <br /> Browse new, trending and
              classic movies without a cluttered UI. Review movies and manage
              your movie lists to get watching.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/movies" style={styles.buttons} variant="contained">
                Search Moovies
              </Button>

            </Stack>
          </Container>
        </Box>
          <br />
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              paragraph
            >
              New Reviews
            </Typography>


        {/* <h1>New Reviews</h1> */}

        <Container sx={{ px: 2, pt: 4, pb: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {comments.map((comment) => (
              <Grid xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    objectFit:'contain'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <img src={comment.Poster} />
                    <Typography gutterBottom variant="h5" component="h2">
                      {comment.Title}
                    </Typography>

                    {/* <p>{comment.user.lastName}</p> */}
                    <Typography>{comment.commentText}</Typography>
                    <p>
                      {comment.user.map((user) => (
                        <p>
                          {" "}
                          <span style={styles.pink}>Author</span> : {user.firstName}{" "}
                          {user.lastName.charAt(0).toUpperCase()}
                        </p>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}

      {/* End footer */}
    </>
  );
}
