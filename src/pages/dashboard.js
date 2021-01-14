import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Plot from "react-plotly.js";

import {SVGMap} from "react-svg-map";
import BangkokSVG from '../components/bangkokmap';
import "../css/map.css";
import "react-svg-map/lib/index.css";

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
        fontSize: '1.5rem',
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

    const xValue = ['VCT Site1', 'VCT Site2', 'VCT Site3', 'VCT Site4', 'VCT Site5'];

    const yValue = [20, 14, 23, 50, 5];
    const yValue2 = [24, 16, 20, 30, 4];

    const trace0 = {
        x: xValue,
        y: yValue,
        type: 'bar',
        text: yValue.map(String),
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

    const trace1 = {
        x: xValue,
        y: yValue2,
        type: 'bar',
        text: yValue2.map(String),
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

    const Bar1Data = [trace0, trace1];

    const Bar1Layout = {
        width: 400,
        height: 400,
        title: "RTRI by Site",
        xaxis: {title: 'Hospitals'},
        yaxis: {title: 'No of HIV Cases'}
    };

    const x1Value = ['15-25', '15-35', '35-45', '45-55'];

    const y1Value = [20, 25, 40, 30];
    const y1Value2 = [24, 16, 30, 25];

    const trace01 = {
        x: x1Value,
        y: y1Value,
        type: 'bar',
        text: yValue.map(String),
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

    const trace11 = {
        x: x1Value,
        y: y1Value2,
        type: 'bar',
        text: yValue2.map(String),
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

    const Bar2Data = [trace01, trace11];

    const Bar2Layout = {
        width: 430,
        height: 350,
        title: "Age Group Impacted",
        xaxis: {title: 'Age group'},
        yaxis: {title: 'No of HIV Cases'}
    };

    const x2Value = ['Male', 'Female', 'Transgender'];

    const y2Value = [20, 25, 40];
    const y2Value2 = [24, 16, 30];

    const trace02 = {
        x: x2Value,
        y: y2Value,
        type: 'bar',
        text: yValue.map(String),
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
        text: yValue2.map(String),
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
        width: 420,
        height: 350,
        title: "Gender Impacted",
        xaxis: {title: 'Gender'},
        yaxis: {title: 'No of HIV Cases'}
    };

    const x3Value = ['Single', 'Married', 'Divorced'];

    const y3Value = [20, 25, 40];
    const y3Value2 = [24, 16, 30];

    const trace03 = {
        x: x3Value,
        y: y3Value,
        type: 'bar',
        text: yValue.map(String),
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

    const trace13 = {
        x: x3Value,
        y: y3Value2,
        type: 'bar',
        text: yValue2.map(String),
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

    const Bar4Data = [trace03, trace13];

    const Bar4Layout = {
        width: 420,
        height: 350,
        title: "Marital Status",
        xaxis: {title: 'Marital Status'},
        yaxis: {title: 'No of HIV Cases'}
    };

    const Pie1Data = [{
        values: [150, 280],
        labels: ['Recent', 'Long-Term'],
        type: 'pie'
    }];

    const Pie1Layout = {
        width: 400,
        height: 400,
        title: 'RITA by Percentage'
    };



    const Pie2Data = [{
        type: "pie",
        values: [500000, 100000, 80000, 5000, 2000, 1388000],
        labels: ['Heterosexual', 'MSM/TG', 'Injection Drug Use', 'Blood Transfusion', 'Perinatal'],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
    }]

    const Pie2Layout = {
        height: 520,
        width: 500,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: true,
        title: "Transmission Risk"
    }

    const values = [
        ['Heterosexual', 'MSM/TG', 'Injection Drug Use', 'Blood Transfusion', 'Perinatal', 'Unknown', '<b>TOTAL</b>'],
        [1200000, 100000, 80000, 5000, 2000, 1000, 1388000]]

    //Map start
    const [data, setData] = useState({
        pointedLocation: null,
        count: 0,
        focusedLocation: null,
        selectedLocations: [],
        tooltipStyle: {
            display: 'none'
        }
    });

    const [locationCount, setLocationCount] = useState([
        {location: "Bang Phlat", count: 10},
        {location: "Huai Khwang", count: 20},
        {location: "Wang Thong Lang", count: 30},
        {location: "Thawi Watthana", count: 40},
        {location: "Din Daeng", count: 50},
        {location: "Dusit", count: 60},
        {location: "Ratchathewi", count: 70},
        {location: "Vadhana", count: 80},
        {location: "Thon buri", count: 90},
        {location: "Sathon", count: 20},
        {location: "Bang Na", count: 30},
        {location: "Don Mueang", count: 200},
        {location: "Bang Kapi", count: 20},
        {location: "Lat Phrao", count: 20},

    ]);

    const countArray = locationCount.flatMap(x => [x.count])
    const median = calculateMedian(countArray)


    const handleLocationMouseOver = (e) => {
        const thaiLocation = getLocationName(e);
        const englishLocation = getLocationId(e);

        const locationRow = locationCount.find(element => element.location === englishLocation);
        if (locationRow !== undefined && locationRow.count > 0) {
            setData(prevState => ({
                ...prevState,
                count: locationRow.count
            }));
        } else {
            setData(prevState => ({
                ...prevState,
                count: 0
            }));
        }
        setData(prevState => ({
            ...prevState,
            pointedLocation: thaiLocation + "  -  " + englishLocation
        }));
    };


    const handleLocationMouseOut = () => {
        setData(prevState => ({
            ...prevState,
            pointedLocation: null,
            tooltipStyle: {display: 'none'},
        }));

    }

    const handleLocationMouseMove = (event) => {
        const tooltipStyle = {
            display: 'block',
            top: event.clientY + 10,
            left: event.clientX - 100
        };

        setData(prevState => ({
            ...prevState,
            tooltipStyle: tooltipStyle,
        }));
    }


    const getLocationClassName = (mapLocation, _) => {

        const locationRow = locationCount.find(element => element.location === mapLocation.id);
        let strengthClass = "color-strength1"

        if (locationRow !== undefined && locationRow.count > 0) {
            if (locationRow.count < median) {
                strengthClass = "color-strength2"
            } else {
                strengthClass = "color-strength3"
            }

        }
        return `svg-map ${strengthClass}`

    }
    //Map end


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
                                        <Card className={classes.root} variant="outlined">
                                            <CardContent>

                                                <Plot
                                                    data={Bar1Data}
                                                    layout={Bar1Layout}

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
                                                    data={Pie1Data}
                                                    layout={Pie1Layout}

                                                    // To disable trace
                                                    config={{displayModeBar: false, staticPlot: false}}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item  style={{marginTop:"2em",marginLeft:"6em"}}>
                                <Grid container>
                                    <p className={classes.title}>Hotspot Locations</p>
                                    <SVGMap
                                        map={BangkokSVG}
                                        locationClassName={getLocationClassName}
                                        onLocationMouseOver={handleLocationMouseOver}
                                        onLocationMouseOut={handleLocationMouseOut}
                                        onLocationMouseMove={handleLocationMouseMove}

                                    />
                                    <div className="svg-map-tooltip" style={data.tooltipStyle}>
                                        <div>Location:{data.pointedLocation}</div>
                                        <div>Count:{data.count}</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.maingrid3}>
                <Grid container>
                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>

                                <Plot
                                    data={Bar2Data}
                                    layout={Bar2Layout}

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
                                    data={Bar4Data}
                                    layout={Bar4Layout}

                                    // To disable trace
                                    config={{displayModeBar: false, staticPlot: false}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

// Map function for median
function getLocationName(event) {
    return event.target.attributes.name.value;
}

function getLocationId(event) {
    return event.target.id;
}

function calculateMedian(values) {
    if (values.length === 0) return 0;

    values.sort(function (a, b) {
        return a - b;
    });

    const half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}
// Map function