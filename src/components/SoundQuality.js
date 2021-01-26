import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

  const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        height: 200,
    },
    title: {
        fontWeight:800,
        margin: "10px 0",
    },
    formControl: {
      minWidth: 260,
    },
  });
  

  function SoundQuality(props) {
    const classes = useStyles();
    const [quality, setQuality] = React.useState(2);
  
    const handleChange = (event) => {
      const qualityLevel = event.target.value
      setQuality(qualityLevel);
      props.handleQualityState(qualityLevel)

    };


    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h3" color="textPrimary" gutterBottom>
          Sound Quality
        </Typography>
        <Typography variant="body2" component="p">
          Manually control the music quality in the event of poor connection.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value={1}>Poor</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
    )
}

export default SoundQuality;
