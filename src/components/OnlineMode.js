import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        height: 200,
    },
    title: {
        fontWeight:800,
        margin: "10px 0",
    },
});

const OnlineMode = () => {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2">
                    Online Mode
                </Typography>
                <Typography variant="body3" component="p">
                Is this application connected to the internet?
                </Typography>
            </CardContent>
            <CardActions>
            <Switch
                className={classes.action}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </CardActions>
        </Card>
    );
}

export default OnlineMode

