import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid} from "@material-ui/core";
import DateSelection from "../components/dateselection";
import {Typography} from "@material-ui/core";


import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const useStyles = makeStyles(theme => ({
    toolbar: {
        padding: ".2em 0 .7em 0",
        position:"fixed",
        margin: 0,
        backgroundColor: '#e8eae6',
    },
    mainContainer2: {
        padding: 0,
        margin: 0
    },
    Typo: {},
    button: {
        color: 'yellow'
    },
}))

export default function Toolbar(props) {


    const handleRadioChange = (event) => {
        props.setRadioValue(event.target.value);
    };


    const classes = useStyles();


    return (
        <Grid container className={classes.toolbar} alignItems={"center"} direction={"row"} xs={12}>
            <Grid item xs={7}>
                <Grid container alignItems={"center"} justify={"space-around"}>
                    <Grid item>
                        <Typography className={classes.Typo} variant="h5">
                            Select Date
                        </Typography>
                    </Grid>
                    <Grid item>
                        <DateSelection
                            startDate={props.startDate}
                            setStartDate={props.setStartDate}
                            endDate={props.endDate}
                            setEndDate={props.setEndDate}
                        >
                        </DateSelection>
                    </Grid>

                    <Grid item className={classes.button}>
                        <Button variant="contained" onClick={props.handleGoClick}>
                            Go
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={5}>
                <FormControl component="fieldset">
                    <RadioGroup row value={props.radioValue} onChange={handleRadioChange}>
                        <FormControlLabel value="recent" control={<Radio color="primary"/>} label="Recent"/>
                        <FormControlLabel value="longTerm" control={<Radio color="primary"/>} label="LongTerm"/>
                        <FormControlLabel value="all" control={<Radio color="primary"/>} label="All"/>
                    </RadioGroup>
                </FormControl>
            </Grid>

        </Grid>
    );
}

Date.prototype.yyyymmdd = function () {
    const mm = this.getMonth() + 1; // getMonth() is zero-based
    const dd = this.getDate();

    return [this.getFullYear(), "-",
        (mm > 9 ? '' : '0') + mm, "-",
        (dd > 9 ? '' : '0') + dd
    ].join('');
};
