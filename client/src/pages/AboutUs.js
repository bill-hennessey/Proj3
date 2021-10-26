import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import { Icon } from "@iconify/react";
import { pink } from "@mui/material/colors";

import cow from "../../src/imgbin_cow-png.png";

//  creator data
const contributorData = [
  {
    imgLink: "https://avatars.githubusercontent.com/u/85851903?v=4",
    name: "Patrick Brown",
    gitLink: "https://github.com/patrickbrown-io",
    liLink: "https://www.linkedin.com/in/patrick-brown-9930a365/",
  },
  {
    imgLink: "https://avatars.githubusercontent.com/u/87505077?v=4",
    name: "Bill Hennessey",
    gitLink: "https://github.com/bill-hennessey",
    liLink: "https://www.linkedin.com/in/bill-hennessey-a6578ba1/",
  },
  {
    imgLink: "https://avatars.githubusercontent.com/u/12400251?v=4",
    name: "Kevin Kim",
    gitLink: "https://github.com/KimShiHyun",
    liLink: "https://www.linkedin.com/in/kevinshihyunkim/",
  },
  {
    imgLink: "https://avatars.githubusercontent.com/u/87586398?v=4",
    name: "Alex Lopez",
    gitLink: "https://github.com/alexito24",
    liLink: "https://www.linkedin.com/in/heriberto-lopez-b04762217/",
  },
];

// styles
const styles = {
  mainheader: {
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    color: "rgb(233,30,99)",
  },
  buttons: {
    color: "rgb(233,30,99)",
  },
  spanStyle: {
    color: "rgb(233,30,99)",
    fontWeight: "bolder",
  },

  cow: {
    maxWidth: "400px",
    position: "fixed",
    bottom: 0,
    right: 0,
  },
};

export function AboutUs() {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
        <Icon icon="mdi:cow" />
      </Avatar>
      <Typography style={styles.mainheader}>
        <h2>About Us</h2>
        <p>
          Our final group project,
          <span style={styles.spanStyle}> moovie </span>
          is a performant and scalable MERNG stack application that showcases
          what we've learned over the course of Denver University's Full-Stack
          Certificate Program. We hope you enjoy our application!
        </p>
      </Typography>

      <Grid
        container
        spacing={{ p: 10, m: 10, gap: 50 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {contributorData.map((user) => (
          <Card
            justifyContent="center"
            alignItems="center"
            sx={{ pb: 0, maxWidth: 345 }}
          >
            <CardMedia
              component="img"
              href={user.gitLink}
              height="194"
              image={user.imgLink}
              alt={user.name}
            />

            <CardContent>
              <Typography card style={styles.header}>
                <h3>{user.name}</h3>
              </Typography>
              <Typography paragraph></Typography>
            </CardContent>

            <CardActions disableSpacing style={styles.header}>
              <IconButton
                aria-label="Github"
                style={styles.buttons}
                href={user.gitLink}
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                style={styles.buttons}
                href={user.liLink}
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <img src={cow} alt="I am a cow" style={styles.cow} />
    </>
  );
}
