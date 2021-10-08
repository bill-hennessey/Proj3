import * as React from 'react';
import {useState} from 'react';
import {useMutation} from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import {pink} from '@mui/material/colors'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Auth from '../utils/auth';


import { ADD_COMMENT } from '../utils/mutations';

// const styles = {
//     background:{
//         background: 'black'
//     }
// }

export const Comment = () => {
  const [formState, setFormState] = useState({commentText:''});
	const [addComment, { error, data }] = useMutation(ADD_COMMENT); 


    console.log(Auth.getUser().data._id)



const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
	
	const handleAddComment = async (event) => {
        event.preventDefault();
        console.log(formState)
        let userId = Auth.getUser().data._id;

        try {
      const { data } = await addComment({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      commentText: '',
    });
	}
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
            <Icon icon="mdi:cow" />
          </Avatar>
            <Box
            component="form"
            sx={{
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleAddComment}
            >
                <h1>hello</h1>
      <TextField onChange={handleChange}            
 id="filled-basic" name="commentText" label="Filled" variant="filled" value={formState.commentText}
/>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Comment
            </Button>

    </Box>

    </>
    )
}
