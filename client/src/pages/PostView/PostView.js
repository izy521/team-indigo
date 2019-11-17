import './PostView.css'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Avatar, Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, TextField } from '@material-ui/core'

import profileImage from '../../assets/images/profile-pic-placeholder.png'

const users=[
    { username: 'Steven Colbert',
      answer: 'League' },
    { username: 'Dana Carvey',
      answer: 'Overwatch' },
    { username: 'Liev Schreiber',
      answer: 'League' }
]

const tags=[
    'Gaming',
    '2019'
]

const options=[
    'League',
    'Overwatch'
]

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    avatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    avatarSidebar: {
        margin: 10,
    },
    formControl: {
        margin: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
  }));

const PostView = props => {
    const classes = useStyles()
    const [option, setOption] = useState('league')

    const handleChange = event => {
        const { value } = event.target
        setOption(value);
    }

    return (
        <Container className={classes.root} maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {users.map(user => {
                        return (
                            <Grid container>
                                <Grid item xs={6} sm={5} md={3}>
                                    <Avatar alt="Profile Pic Placeholder" src={profileImage} className={classes.avatarSidebar} />
                                </Grid>
                                
                                <Grid item xs={6} sm={7} md={9}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <label>{user.username}</label>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>{user.answer}</label>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={7} sm={6} md={4} lg={3}>
                            <Avatar alt="Profile Pic Placeholder" src={profileImage} className={classes.avatar} />
                        </Grid>
                        <Grid item xs={5} sm={6} md={8} lg={9}>
                            <div id='tags'>
                                <label>Tags</label>
                                {tags.map(el => {
                                    return (
                                        <Button
                                        key={el}
                                        value='tag'
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        size="medium" >
                                            {el}
                                        </Button>
                                    )
                                })}
                            </div>
                            <div id='question'>
                                <h2>Which game is better?</h2>
                            </div>
                            <div id='description'>
                                <h3>Let's vote on which game is more popular!</h3>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Voting options</FormLabel>
                                <RadioGroup aria-label="voting-option" name="option" value={option} onChange={handleChange}>
                                    {options.map(el => {
                                        return (
                                            <FormControlLabel value={el.toLowerCase()} control={<Radio />} label={el} />
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="large" >
                            Vote
                        </Button>
                    </Grid>
                    <Grid container>
                        <Grid item xs={8}>
                            <TextField
                            id="outlined"
                            label="Write a comment"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PostView