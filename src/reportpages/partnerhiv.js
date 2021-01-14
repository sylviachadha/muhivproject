import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import VerticalMenu from "../components/sidemenu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Plot from "react-plotly.js";

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

export default function PartnerHiv() {

    const classes = useStyles();

    const x2Value = ['Not contacted', 'HIV +ve', 'HIV -ve'];

    const y2Value = [20, 25, 40];
    const y2Value2 = [24, 16, 30];

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
        title: "Partner HIV Result",
        xaxis: {title: 'HIV Status'},
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}