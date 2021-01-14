import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: 0,
        margin: 0
    }
}))

export default function Report() {

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer} direction={"column"}>
            Report
        </Grid>
    );
}