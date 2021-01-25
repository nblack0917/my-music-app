import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 275,
      height: 200,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  function volumetext(volume) {
    return `${volume}%`;
  }

function MasterVolume() {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3" color="textPrimary" gutterBottom>
          Master Volume
        </Typography>
        <Typography variant="body2" component="p">
          Overrides all other sound settings in this application
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Slider
        defaultValue={20}
        getAriaValueText={volumetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={110}
      />
      </CardActions>
    </Card>
    )
}

export default MasterVolume;
