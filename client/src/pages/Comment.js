import * as React from "react";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { createTheme } from "@mui/system";


import Auth from "../utils/auth";

import { ADD_COMMENT } from "../utils/mutations";

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#11cb5f',
//     },
//   },
// });

const Comment = ({ movie }) => {
  const [formState, setFormState] = useState({ commentText: "" });
  let [toggleComments, setToggleComments] = useState(false)

  const [addComment, { error, data }] = useMutation(ADD_COMMENT);
  

  // console.log(Auth.getUser().data._id)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // movie title
  // let params = useParams();
  // console.log(params)

  const handleAddComment = async (event) => {
    event.preventDefault();
    // console.log({...formState})
    let userId = Auth.getUser().data._id;

    // let Poster = {
    //   userId: Poster,
    // };

    // let Title = {
    //   Title: Title,
    // };

    // let variables = {
    //   userId: { ...userID },
    //   movieTitle: { ...realTitle },
    //   commentText: { ...formState },
    // };

    // console.log(Poster);
    // console.log(Title);
    // console.log()
    // console.log(variables);
    // let token = Auth.getToken();

    // console.log(userID)
    // console.log(formState)
    // console.log(realTitle)

    try {
      const { data } = await addComment({
        variables: {
          userId,
          ...movie,
          // Title: { ...Title },
          // Poster: { ...Poster },
          ...formState,
        },
      });
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      commentText: "",
    });
  };
  return (
    <>
      <Avatar onClick={()=>{setToggleComments(!toggleComments)}} sx={{ m: 1, bgcolor: pink[500] }}>
        <Icon icon="mdi:comment" />
      </Avatar>
      {toggleComments && <Box
        component="form"
        sx={{}}
        noValidate
        autoComplete="off"
        onSubmit={handleAddComment}
      >
        <h3>Leave a comment</h3>
        <TextField
          onChange={handleChange}
          id="filled-basic"
          name="commentText"
          label="Comment here"
          variant="filled"
          value={formState.commentText}
        />
        <Button
          color="secondary"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Comment
        </Button>
      </Box>}
    </>
  );
};

export default Comment;
