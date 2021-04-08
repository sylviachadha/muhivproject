import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import dbimage from "../images/DB.svg"
import rpimage from "../images/Rep.svg"
import model from "../images/model.svg"
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    main: {
        padding: 0,
        margin: 0,
        flexGrow: 1,

    },
    services: {
        padding: "1em",
        backgroundColor: "#eaeaea",
        width: "100%"
    },
    serviceTitle: {
        flexBasis: "20%",
    },
    pageContent: {
        marginTop: "3em",
    },
    pageContentLeft: {
        flexBasis: "50%",
        marginBottom: "5em"
    },
    h4: {
        paddingLeft: "0.5em"
    },
    icons: {
        width: "10em",
        height: "6em",
    },
    smallIcons: {
        width: "5em",
        height: "3em",
        marginRight: "2em"

    },


}))

export default function Home() {

    const classes = useStyles(

    );

    return (
        <Grid container className={classes.main}>

            <Grid item className={classes.services} xs={12}>
                <Grid container>
                    <Grid item className={classes.serviceTitle}>
                        <Typography className={classes.h4} variant={"h4"}>
                            Services
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container justify={"space-evenly"}>
                            <Grid item>
                                <Tooltip placement="bottom" title="Dashboard">
                                    <Button component={Link} to="/dashboard">
                                        <img
                                            className={classes.smallIcons}
                                            alt="Dashboard"
                                            src={dbimage}
                                        /> </Button>
                                </Tooltip>
                            </Grid>

                            <Grid item>
                                <Tooltip placement="bottom" title="Report">
                                    <Button component={Link} to="/overview">
                                        <img
                                            className={classes.smallIcons}
                                            alt="Report"
                                            src={rpimage}
                                        /></Button>
                                </Tooltip>
                            </Grid>

                            <Grid item>
                                <Tooltip placement="bottom" title="Model">
                                    <Button component={Link} to="/model">
                                        <img
                                            className={classes.smallIcons}
                                            alt="Model"
                                            src={model}
                                        /></Button>
                                </Tooltip>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
            <Grid container className={classes.pageContent} justify={"center"}>
                <Grid item className={classes.pageContentLeft}>
                    <Button component={Link} to="/dashboard">
                        <Typography variant={"h4"}>
                            1. Dashboard
                        </Typography>
                    </Button>
                    <Typography variant={"subtitle1"}>
                        Check for Summarised and concise information
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Key metrics in one glance view, real time monitoring
                    </Typography>
                </Grid>
                <Grid item>
                    <Tooltip placement="right" title="Dashboard">
                        <Button component={Link} to="/dashboard">
                            <img
                                className={classes.icons}
                                alt="Dashboard icon"
                                src={dbimage}
                            /> </Button>
                    </Tooltip>

                </Grid>

                <Grid item className={classes.pageContentLeft}>

                    <Button component={Link} to="/overview">
                        <Typography variant={"h4"}>
                            2. Report
                        </Typography>
                    </Button>

                    <Typography variant={"subtitle1"}>
                        Check for Detailed information
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Includes historic data analysis with Trend charts
                    </Typography>
                </Grid>
                <Grid item>
                    <Tooltip placement="right" title="Report">
                        <Button component={Link} to="/overview">
                            <img
                                className={classes.icons}
                                alt="Report"
                                src={rpimage}
                            /> </Button>
                    </Tooltip>
                </Grid>


                <Grid item className={classes.pageContentLeft}>

                    <Button component={Link} to="/model">
                        <Typography variant={"h4"}>
                            3. Statistical Model
                        </Typography>
                    </Button>

                    <Typography variant={"subtitle1"}>
                        To infer about the population
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Negative Binomial Distribution Model
                    </Typography>
                </Grid>
                <Grid item>

                    <Tooltip placement="right" title="Model">
                        <Button component={Link} to="/model">
                            <img
                                className={classes.icons}
                                alt="Model"
                                src={model}
                            /> </Button>
                    </Tooltip>

                </Grid>

            </Grid>


        </Grid>
    );
}
