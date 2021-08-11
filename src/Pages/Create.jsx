import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      margin: "40px",
    },
    spacing: {
      margin: "10px 0",
    },
    title: {
      flexGrow: "1",
    },

    button: {
      padding: "16px",
      background: theme.palette.secondary.light,
      marginTop: "20px",
    },
  };
});

const { useState } = React;
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Create() {
  const classes = useStyles();
  const currentDate = new Date().toISOString().substring(0, 10);

  const [category, setCategory] = useState("work");
  const [date, setDate] = useState(currentDate);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title,
        category,
        details: note,
      }),
    }).then(() => setIsSubmitted(true));
    setCategory("");
    setDate(currentDate);
    setNote("");
    setTitle("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Typography variant="h4" color="textPrimary" className={classes.spacing}>
        Create new Notes
      </Typography>

      <Grid container spacing={2}>
        <Grid item className={classes.title}>
          <TextField
            className={classes.spacing}
            fullWidth
            id="title"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
            variant="outlined"
          />
        </Grid>

        <Grid item>
          <TextField
            className={classes.spacing}
            fullWidth
            id="title"
            onChange={(e) => setDate(e.target.value)}
            required
            type="date"
            value={date}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={12}>
        <Grid item xs={1}>
          <FormLabel component="legend" required>
            Category
          </FormLabel>
        </Grid>
        <Grid item>
          <RadioGroup
            aria-label="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            row
            value={category}
          >
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel
              value="finance"
              control={<Radio />}
              label="Finance"
            />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <TextField
        className={classes.spacing}
        fullWidth
        id="title"
        label="Notes"
        minRows={4}
        multiline
        onChange={(e) => setNote(e.target.value)}
        required
        value={note}
        variant="outlined"
      />
      <Button
        className={classes.button}
        color="secondary"
        fullWidth
        type="submit"
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
      <Snackbar open={isSubmitted} autoHideDuration={6000}>
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar>
    </form>
  );
}
