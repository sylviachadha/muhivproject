import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Plot from "react-plotly.js";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: 0,
        margin: 0
    },
    root: {
        minWidth: 180,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        fontSize: 20,
        color: "brown"
    },
    h4: {
        color: "#3f72af"
    },

}))

export default function Dashboard() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const Gauge1data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: 17.9, number: {suffix: "%"},
            title: {text: "Tested by RTRI"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];

    const Gauge2data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: 8.8, number: {suffix: "%"},
            title: {text: "RTRI Recent"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];

    const Gauge3data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: 25, number: {suffix: "%"},
            title: {text: "Reclassified Longterm"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];

    const Gauge4data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: 5.5, number: {suffix: "%"},
            title: {text: "RITA Recent"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];


    return (
        <Grid container className={classes.mainContainer} direction={"column"}>
            <Grid item className={classes.maingrid1}>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            4321
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            Total Test
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            318
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            New HIV +ve
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            57
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            Tested by RTRI
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            5
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RTRI Recent
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            52
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RTRI Longterm
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            4
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            VL Result Complete
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            1
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            Reclassified Longterm
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            3
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RITA Recent
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            52
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RITA Longterm
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            402
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            Total HIV +ve
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge1data}
                                            layout={{
                                                width: 300, height: 180, margin: {t: 0, b: 0},
                                                paper_bgcolor: "#eaeaea"
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge2data}
                                            layout={{
                                                width: 300, height: 180, margin: {t: 0, b: 0},
                                                paper_bgcolor: "#eaeaea"
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge3data}
                                            layout={{
                                                width: 300, height: 180, margin: {t: 0, b: 0},
                                                paper_bgcolor: "#eaeaea"
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge4data}
                                            layout={{
                                                width: 300, height: 180, margin: {t: 0, b: 0},
                                                paper_bgcolor: "#eaeaea"
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Grid container>
                                    <Grid item>
                                        "Hospital"
                                    </Grid>
                                    <Grid item>
                                        "Age"
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    "Risk"
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.maingrid3}>
                <Grid container>
                    <Grid item>
                        "%newhiv"
                    </Grid>
                    <Grid item>
                        "Gender"
                    </Grid>
                    <Grid item>
                        "Marital Status"
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}