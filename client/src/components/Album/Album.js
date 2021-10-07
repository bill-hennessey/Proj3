import * as React from "react";
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
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import {pink} from '@mui/material/colors'

import cow from "../../../src/pngegg.png";

const styles = {
  pink:{
    color:'#E91E63',
    fontWeight:'bolder'
  },
  brown:{
    color:'#3f000f',
    fontWeight:'light'
  },
  buttons:{
    background:'#E91E63'
  },
  img:{
    maxHeight:'250px',
    alignContent:'center'
  }
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Album() {
  return (
    <>
      <CssBaseline />
      <Avatar  sx={{ m: 1, bgcolor: pink[500] }}>
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
                          <img style={styles.img} src={cow} alt="I am a cow"/>

              <span style={styles.pink}>moo</span><span style={styles.brown}>vie</span>

            </Typography>
                          <br />
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Mooooove over Rotten Tomatoes. <br /> Browse new, trending and classic movies without a cluttered UI. Review movies and manage your movie lists to get watching.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/movies" style={styles.buttons}variant="contained">Search Moovies</Button>
              <Button href="/trending" style={styles.buttons}variant="contained">Trending Moovies</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ pt: 4, pb: 8 }} maxWidth="md">
          {/* End hero unit */}
          <h1>Popular Moovies</h1>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Save</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
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
