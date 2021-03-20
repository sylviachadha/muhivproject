import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import VerticalMenu from "../components/sidemenu";
import CardContent from "@material-ui/core/CardContent";
import Plot from "react-plotly.js";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: 0,
        margin: 0
    },
    sideMenu: {
        display: "inline-block",
        position: "absolute",
        height: "100%",
        width: "300px",
        backgroundColor: '#1f5f8b'
    },
    item: {
        marginLeft: 350
    },
    itemHeading: {
        marginLeft: 350,
        marginTop: 20,
        borderBottom: "3px solid #cdd0cb",
        width: "80%"
    },
}))

export default function Site() {

    const classes = useStyles();

    const x2Value = ['VCT Site1', 'VCT Site2', 'VCT Site3', 'VCT Site4'];

    const y2Value = [50, 14, 23, 20];
    const y2Value2 = [30, 16, 20, 24];

    const trace02 = {
        x: x2Value,
        y: y2Value,
        type: 'bar',
        text: y2Value.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "LT",
        opacity: 0.5,
        marker: {
            color: 'rgb(158,202,225)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const trace12 = {
        x: x2Value,
        y: y2Value2,
        type: 'bar',
        text: y2Value2.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "Recent",
        marker: {
            color: 'rgba(58,200,225,.5)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const Bar3Data = [trace02, trace12];

    const Bar3Layout = {
        width: 500,
        height: 400,
        title: "RTRI by Site",
        xaxis: {title: 'Hospitals'},
        yaxis: {title: 'No of HIV Cases'}
    };

    // Line chart / trend chart
    const line1Data = {
        x: ["Jan", "Feb", "Mar", "Apr","May"],
        y: [10, 15, 13, 17,22],
        type: 'scatter',
        name: 'VCT Site1'
    };

    const line2Data = {
        x: ["Jan", "Feb", "Mar", "Apr","May"],
        y: [16, 10, 11, 10, 18],
        type: 'scatter',
        name: 'VCT Site2'
    };

    const line3Data = {
        x: ["Jan", "Feb", "Mar", "Apr","May"],
        y: [18, 14, 16, 18,15],
        type: 'scatter',
        name: 'VCT Site3'
    };

    const line4Data = {
        x: ["Jan", "Feb", "Mar", "Apr","May"],
        y: [20, 12, 12, 12,13],
        type: 'scatter',
        name: 'VCT Site4'
    };

    const lineData1 = [line1Data, line2Data,line3Data,line4Data];

    const lineLayout1 = {
        width: 500,
        height: 400,
        title: "Site",
        xaxis: {title: 'Site'},
        yaxis: {title: 'No of HIV Cases'}
    };

    return (
        <Grid container className={classes.mainContainer} direction={"row"}>
            <Grid item className={classes.sideMenu}>
                <VerticalMenu></VerticalMenu>
            </Grid>
            <Grid item className={classes.itemHeading}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Grid container direction={"row"}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Plot
                                            data={Bar3Data}
                                            layout={Bar3Layout}

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
                                            data={lineData1}
                                            layout={lineLayout1}

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