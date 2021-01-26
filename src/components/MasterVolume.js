import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


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
  
  function MasterVolume(props) {
    const classes = useStyles();
    
    const [volume, setVolume] = useState(20);

    const getVolume = (e, newVol) => {
      setVolume(newVol)
      console.log(newVol)
    }

    const handleVolume = () => {
      props.handleVolumeState(volume)
    }

    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h3" color="textPrimary" gutterBottom>
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
        // getAriaValueText={getVolume}
        value={volume}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={110}
        onClick={handleVolume}
        onChange={getVolume}
      />
      </CardActions>
    </Card>
    )
}

export default MasterVolume;
