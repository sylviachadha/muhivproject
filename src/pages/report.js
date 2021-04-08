import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import VerticalMenu from "../components/sidemenu";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Plot from "react-plotly.js";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "row"
    },
    sideMenu: {
        minWidth: "20%",
        maxWidth: "20%",
        backgroundColor: '#1f5f8b',
    },
    content: {
        marginLeft :"1em",

    },

    item: {
    },
    itemHeading: {
        marginTop: 20,
        borderBottom: "3px solid #cdd0cb",
        width: "80%"
    },
    text: {
        marginTop: 30,
        marginBottom: 50,
        fontWeight: "200"
    },
    root: {
        minWidth: 250,
        marginRight: 50
    },
    pos: {
        fontSize: 20,
        height: 170
    },
    h4: {
        color: "#3f72af",
    },

}))

export default function Report() {

    const classes = useStyles();

    const Gauge1data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: 90.1, number: {suffix: "%"},
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
            value: 30.4, number: {suffix: "%"},
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
            value: 5, number: {suffix: "%"},
            title: {text: "RITA Recent"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];

    return (

        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.sideMenu}>
                <VerticalMenu/>
            </Grid>
            <Grid item className={classes.content}>
                <Grid container className={classes.sideMenu2} direction={"column"}>
                    <Grid item className={classes.itemHeading}>
                        <Typography variant={'h6'}>
                            Overall Testing
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Grid container className={classes.text}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">

                                            318

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            Newly Diagnosed HIV +ve
                                            <br/>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            310

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            Tested by RTRI
                                            <br/>

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
                                                width: 320,
                                                height: 220,
                                                margin: {t: 0, b: 0},
                                                paper_bgcolor: "lavender",
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.itemHeading}>
                        <Typography variant={'h6'}>
                            Rapid Test for Recent Infection [RTRI] Result
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Grid container className={classes.text}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">

                                            70

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            RTRI Recent
                                            <br/>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            240

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            Longterm
                                            <br/>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge2data}
                                            layout={{
                                                width: 320,
                                                height: 220,
                                                margin: {t: 0, b: 0},
                                                paper_bgcolor: "lavender",
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.itemHeading}>
                        <Typography variant={'h6'}>
                            Viral Load Test Results
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Grid container className={classes.text}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">

                                            65

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            VL Result Complete
                                            <br/>

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
                                            <br/>
                                            Reclassified Longterm
                                            <br/>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge3data}
                                            layout={{
                                                width: 320,
                                                height: 220,
                                                margin: {t: 0, b: 0},
                                                paper_bgcolor: "lavender",
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.itemHeading}>
                        <Typography variant={'h6'}>
                            Recent Infection Testing Algorithm [RITA] Result
                        </Typography>

                    </Grid>
                    <Grid item className={classes.item}>
                        <Grid container className={classes.text}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">

                                            62

                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br/>
                                            RITA Recent
                                            <br/>

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
                                            <br/>
                                            Longterm
                                            <br/>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Gauge3data}
                                            layout={{
                                                width: 320,
                                                height: 220,
                                                margin: {t: 0, b: 0},
                                                paper_bgcolor: "lavender",
                                            }}

                                            // To disable trace
                                            config={{displayModeBar: false, staticPlot: false}}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}