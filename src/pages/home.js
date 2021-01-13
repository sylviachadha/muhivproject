import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import dbimage from "../images/DB.svg"
import rpimage from "../images/Rep.svg"
import model from "../images/model.svg"
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: 0,
        margin: 0
    },
    grid1: {
        padding: 10,
        backgroundColor: "#eaeaea",
    },
    grid2: {
        padding: 30,
        backgroundColor: "white",
        borderBottom: '5px solid white',
        // justifyContent: "flex-end"
    },
    grid3: {
        padding: 30,
        backgroundColor: "white",
        borderBottom: '5px solid white',
    },
    grid4: {
        padding: 30,
        backgroundColor: "white",
        borderBottom: '5px solid white',
    },
    griditem1: {
        marginLeft: 300,
        marginRight: 50,
        backgroundColor: "#white",
    },
    griditem2: {
        padding: 10,
        backgroundColor: "white",
        marginLeft: 30,
    },
    griditem3: {
        marginLeft: 300,
        marginRight: 50,
        backgroundColor: "white",

    },
    h4:{
      paddingLeft:"0.5em"
    },
    leftContent: {
      borderRight : ".5em solid white"
    },
    rightContent:{
        borderLeft : ".5em solid white"
    },
    icon: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginRight:"4em",
        marginLeft:"3em"

    },
    icon1: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        marginRight:"10em",
        marginLeft:"10em"

    },
    logo: {
        width: 50,
        height: 50,
        marginRight:"4em",
        marginLeft:"3em"
    },
    vertical: {
        borderLeft: "6px solid white",
        height: "450px",
        position: "absolute",
        left: "50%"
    }

}))

export default function Home() {

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer} direction={"column"}>
            <Grid item className={classes.grid1}>
                <Grid container>
                    <Grid item>
                        <Typography className={classes.h4} variant={"h4"}>
                            Services
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img
                            className={classes.logo}
                            alt="Dashboard icon"
                            src={dbimage}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            className={classes.logo}
                            alt="Dashboard icon"
                            src={rpimage}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            className={classes.logo}
                            alt="Dashboard icon"
                            src={model}
                        />
                    </Grid>
                </Grid>


            </Grid>
            <Grid item className={classes.grid2}>
                {/*<Grid item className={classes.vertical}>*/}
                {/*</Grid>*/}

                <Grid container>
                    <Grid item className={classes.griditem1}>
                        <Grid container direction={"column"}>
                            <Grid item >
                                <Typography variant={"h4"}>
                                    1. Dashboard
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"subtitle1"}>
                                    Check for Summarised and concise information
                                </Typography>
                                <Typography variant={"subtitle1"}>
                                    Key metrics in one glance view, real time monitoring
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <img
                            className={classes.icon}
                            alt="Dashboard icon"
                            src={dbimage}
                        />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item className={classes.grid3}>

                <Grid container>
                    <Grid item className={classes.griditem3}>
                        <Grid container direction={"column"}>
                            <Grid item >
                                <Typography variant={"h4"}>
                                    2. Report
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"subtitle1"}>
                                    Check for Detailed information
                                </Typography>
                                <Typography variant={"subtitle1"}>
                                    Includes historic data analysis with Trend charts
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.griditem2}>
                        <img
                            className={classes.icon}
                            alt="Report icon"
                            src={rpimage}
                        />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item className={classes.grid4}>

                <Grid container>
                    <Grid item className={classes.griditem1}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Typography variant={"h4"}>
                                    3. Statistical Model
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"subtitle1"}>
                                    To infer about the population
                                </Typography>
                                <Typography variant={"subtitle1"}>
                                    Negative Binomial Distribution Model
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <img
                            className={classes.icon1}
                            alt="Models icon"
                            src={model}
                        />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}