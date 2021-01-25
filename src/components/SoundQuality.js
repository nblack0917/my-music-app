import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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

    formControl: {
        minWidth: 260,
    }
  });

  function SoundQuality() {
    const classes = useStyles();
    const [quality, setQuality] = React.useState(2);
  
    const handleChange = (event) => {
      setQuality(event.target.value);
    };


    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3" color="textPrimary" gutterBottom>
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
