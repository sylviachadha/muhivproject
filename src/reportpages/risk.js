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
        // borderBottom: "3px solid #cdd0cb",
        width: "80%"
    },
}))

export default function Risk() {

    const classes = useStyles();

    const Pie1Data = [{
        type: "pie",
        values: [500000, 100000, 80000, 5000, 2000, 1388000],
        labels: ['Heterosexual', 'MSM/TG', 'Injection Drug Use', 'Blood Transfusion', 'Perinatal'],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
    }]

    const Pie1Layout = {
        height: 450,
        width: 550,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: true,
        title: "Transmission Risk"
    }

    const values = [
        ['Heterosexual', 'MSM/TG', 'Injection Drug Use', 'Blood Transfusion', 'Perinatal', 'Unknown', '<b>TOTAL</b>'],
        [1200000, 100000, 80000, 5000, 2000, 1000, 1388000]]

    const TableData = [{
        type: 'table',
        header: {
            values: [["<b>Risk</b>"], ["<b>HIV Transmission</b>"]],
            align: ["left", "center"],
            line: {width: 1, color: '#506784'},
            fill: {color: '#119DFF'},
            font: {family: "Arial", size: 17, color: "white"}
        },
        cells: {
            values: values,
            align: ["left", "center"],
            line: {color: "#506784", width: 1},
            fill: {color: ['#08f6e3', 'white']},
            font: {family: "Arial", size: 15, color: ["#506784"]}
        }
    }]

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
                                            data={Pie1Data}
                                            layout={Pie1Layout}
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