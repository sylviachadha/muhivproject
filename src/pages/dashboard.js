import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Plot from "react-plotly.js";

import {SVGMap} from "react-svg-map";
import BangkokSVG from '../components/bangkokmap';
import "../css/map.css";
import "react-svg-map/lib/index.css";
import Toolbar from "../components/toolbar";
import Avatar from '@material-ui/core/Avatar';
import BangkokMap from "../components/bangkokmap";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: 0,
        marginTop: "4em",
    },
    root: {
        minWidth: 180,
    },
    toolbar:{
      zIndex: "6"
    },
    content:{
      marginTop: "6em",
      marginLeft: ".2em"
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

    const viridisColorscale = ['#fdcc8a', '#e34a33', '#b30000'];


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [startDate, setStartDate] = useState(new Date('2020-01-18'));
    const [endDate, setEndDate] = useState(new Date()); // today's date
    const [radioValue, setRadioValue] = React.useState('all');


    const [gaugeData, setGaugeData] = React.useState({
        g1: getRandomValue(80, 92),
        g2: getRandomValue(5, 9),
        g3: getRandomValue(20, 30),
        g4: getRandomValue(4, 7),
    })

    const [statsData, setStatsData] = React.useState({
        s1: getRandomInt(4000, 5000),
        s2: getRandomInt(300, 400),
        s3: getRandomInt(80, 92),
        s4: getRandomInt(10, 20),
        s5: getRandomInt(7, 37),
        s6: getRandomInt(120, 160),
        s7: getRandomInt(80, 92),
        s8: getRandomInt(270, 600),
        s9: getRandomInt(100, 200),
        s10: getRandomInt(1300, 1500),
    })

    const [barData, setBarData] = useState({
        b1LT: [25, 16, 20, 30],
        b1Recent: [20, 14, 23, 35],

        b2LT: [24, 40, 16, 10],
        b2Recent: [20, 30, 25, 30],

        b3LT: [18, 22, 30],
        b3Recent: [15, 25, 37],

        b4LT: [20, 40, 25],
        b4Recent: [30, 50, 35],

        b5LT: [120, 100, 80, 20, 20],
        b5Recent: [271, 200, 178, 90, 88],

    })


    const handleGoClick = async () => {

        setGaugeData({
            g1: getRandomValue(80, 92),
            g2: getRandomValue(5, 9),
            g3: getRandomValue(20, 30),
            g4: getRandomValue(4, 7),
        })

        setStatsData({
            s1: getRandomInt(4000, 5000),
            s2: getRandomInt(300, 400),
            s3: getRandomInt(80, 92),
            s4: getRandomInt(10, 20),
            s5: getRandomInt(7, 37),
            s6: getRandomInt(120, 160),
            s7: getRandomInt(80, 92),
            s8: getRandomInt(270, 600),
            s9: getRandomInt(100, 200),
            s10: getRandomInt(1300, 1500),
        })

        setBarData(prevState => ({
            ...prevState,
            b1Recent: prevState.b1Recent.map(x => x + getRandomInt(-1, 3)),
            b1LT: prevState.b1LT.map(x => x + getRandomInt(-1, 3)),

            b2Recent: prevState.b2Recent.map(x => x + getRandomInt(-1, 3)),
            b2LT: prevState.b2LT.map(x => x + getRandomInt(-1, 3)),

            b3Recent: prevState.b3Recent.map(x => x + getRandomInt(-1, 3)),
            b3LT: prevState.b3LT.map(x => x + getRandomInt(-1, 3)),

            b4Recent: prevState.b4Recent.map(x => x + getRandomInt(-1, 3)),
            b4LT: prevState.b4LT.map(x => x + getRandomInt(-1, 3)),

            b5Recent: prevState.b5Recent.map(x => x + getRandomInt(-1, 3)),
            b5LT: prevState.b5LT.map(x => x + getRandomInt(-1, 3)),
        }));


    }


    const Gauge1data = [
        {
            domain: {x: [0, 1], y: [0, 1]},
            value: gaugeData.g1, number: {suffix: "%"},
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
            value: gaugeData.g2, number: {suffix: "%"},
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
            value: gaugeData.g3, number: {suffix: "%"},
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
            value: gaugeData.g4, number: {suffix: "%"},
            title: {text: "RITA Recent"},
            type: "indicator",
            mode: "gauge+number",
            delta: {reference: 100},
            gauge: {axis: {range: [null, 100]}}
        }
    ];


    function getBarData(recent, lt) {

        if (radioValue === "longTerm") {
            return {
                lt: lt,
                recent: []
            }

        } else if (radioValue === "recent") {
            return {
                lt: [],
                recent: recent
            }
        } else {
            return {
                lt: lt,
                recent: recent
            }
        }
    }

    // Site Location
    const bySiteX = ['VCT Site1', 'VCT Site2', 'VCT Site3', 'VCT Site4']
    const bySiteData = getBarData(barData.b1Recent, barData.b1LT)
    const bySiteLTData = bySiteData.lt
    const bySiteRecentData = bySiteData.recent


    const bySiteLongTerm = {
        x: bySiteX,
        y: bySiteLTData,
        type: 'bar',
        text: bySiteLTData.map(String),
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

    const bySiteRecent = {
        x: bySiteX,
        y: bySiteRecentData,
        type: 'bar',
        text: bySiteRecentData.map(String),
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

    const BySiteBarData = [bySiteRecent, bySiteLongTerm];

    const BySiteBarLayout = {
        width: 380,
        height: 380,
        title: "RTRI by Site",
        xaxis: {title: 'Hospitals'},
        yaxis: {title: 'No of HIV Cases'}
    };


    // Age Group
    const byAgeX = ['VCT Site1', 'VCT Site2', 'VCT Site3', 'VCT Site4']
    const byAgeData = getBarData(barData.b2Recent, barData.b2LT)
    const byAgeLTData = byAgeData.lt
    const byAgeRecentData = byAgeData.recent


    const byAgeLT = {
        x: byAgeX,
        y: byAgeLTData,
        type: 'bar',
        text: byAgeLTData.map(String),
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

    const byAgeRecent = {
        x: byAgeX,
        y: byAgeRecentData,
        type: 'bar',
        text: byAgeRecentData.map(String),
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

    const ByAgeBarData = [byAgeRecent, byAgeLT];

    const ByAgeBarLayout = {
        width: 450,
        height: 350,
        title: "By Age Group",
        xaxis: {title: 'Age group'},
        yaxis: {title: 'No of HIV Cases'}
    };

    // Gender
    const byGenderX = ['Male', 'Female', 'Transgender']
    const byGenderData = getBarData(barData.b3Recent, barData.b3LT)
    const byGenderLTData = byGenderData.lt
    const byGenderRecentData = byGenderData.recent


    const byGenderLT = {
        x: byGenderX,
        y: byGenderLTData,
        type: 'bar',
        text: byGenderLTData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "LT",
        opacity: 0.5,
        marker: {
            color: 'rgb(203,222,207)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const byGenderRecent = {
        x: byGenderX,
        y: byGenderRecentData,
        type: 'bar',
        text: byGenderRecentData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "Recent",
        marker: {
            color: 'rgb(134,226,114)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const BarByGenderData = [byGenderRecent, byGenderLT];

    const BarByGenderLayout = {
        width: 410,
        height: 350,
        title: "By Gender",
        xaxis: {title: 'Gender'},
        yaxis: {title: 'No of HIV Cases'}
    };

    // Marital Status
    const byMStatusX = ['Single', 'Married', 'Divorced'];
    const byMStatusData = getBarData(barData.b4Recent, barData.b4LT)

    const byMStatusLTData = byMStatusData.lt
    const byMStatusRecentData = byMStatusData.recent


    const byMStatusLT = {
        x: byMStatusX,
        y: byMStatusLTData,
        type: 'bar',
        text: byMStatusLTData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "LT",
        opacity: 0.5,
        marker: {
            color: 'rgb(211,206,219)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const byMStatusRecent = {
        x: byMStatusX,
        y: byMStatusRecentData,
        type: 'bar',
        text: byMStatusRecentData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "Recent",
        marker: {
            color: 'rgb(229,209,112)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const BarByMStatusData = [byMStatusRecent, byMStatusLT];

    const BarByMStatusLayout = {
        width: 420,
        height: 350,
        title: "Marital Status",
        xaxis: {title: 'Marital Status'},
        yaxis: {title: 'No of HIV Cases'}
    };


    // Pie Recent Infection
    const Pie1Data = [{
        values: [150, 200],
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
        values: [500000, 100000, 80000, 5000, 2000],
        labels: ['Heterosexual', 'MSM/TG', 'Injection Drug Use', 'Blood Transfusion', 'Perinatal'],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
    }]

    const Pie2Layout = {
        height: 350,
        width: 450,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: true,
        title: "Transmission Risk"
    }


    //Table start
    var tableValues = [
        ['Heterosexual', 'Blood Transfusion', 'IDU', 'MSM/TG', 'Perinatal', '<b>TOTAL</b>'],
        [500000, 5000, 80000, 100000, 2000, 689000]]

    var tableData = [{
        type: 'table',
        header: {
            values: [["<b>Risk</b>"], ["<b>HIV Transmission</b>"]],
            align: ["left", "center"],
            line: {width: 1, color: '#506784'},
            fill: {color: '#119DFF'},
            font: {family: "Arial", size: 16, color: "white"}
        },
        cells: {
            values: tableValues,
            align: ["left", "center"],
            line: {color: "#506784", width: 1},
            fill: {color: ['#25FEFD', 'white']},
            font: {family: "Arial", size: 14, color: ["#506784"]}
        }
    }]

    const tableLayout = {
        height: 350,
        width: 430,
        margin: {"t": 100, "b": 0, "l": 0, "r": 0},
        showlegend: true,
        title: "Risk Table"
    }


    //HIV Partner Test

    const byPartnerTestX = ['Contacted', 'Tested', 'HIV +ve', 'Recency +ve', 'On ART'];
    const byPartnerData = getBarData(barData.b5Recent, barData.b5LT)
    const byPartnerTestLTData = byPartnerData.lt
    const byPartnerTestRecentData = byPartnerData.recent

    const byPartnerTestLT = {
        x: byPartnerTestX,
        y: byPartnerTestLTData,
        type: 'bar',
        text: byPartnerTestLTData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "LT",
        opacity: 0.5,
        marker: {
            color: 'rgb(226,184,177)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const byPartnerTestRecent = {
        x: byPartnerTestX,
        y: byPartnerTestRecentData,
        type: 'bar',
        text: byPartnerTestRecentData.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        name: "Recent",
        marker: {
            color: 'rgb(212,72,67)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const BarByPartnerTestData = [byPartnerTestRecent, byPartnerTestLT];

    const BarByPartnerTestLayout = {
        width: 480,
        height: 350,
        title: "HIV Partner Test",
        xaxis: {title: 'HIV Recency'},
        yaxis: {title: "Index Client's Partner"}
    };




    return (
        <Grid container className={classes.mainContainer} direction={"column"}>
            <Grid item className={classes.toolbar} >
                <Toolbar startDate={startDate}
                         setStartDate={setStartDate}
                         endDate={endDate}
                         setEndDate={setEndDate}
                         radioValue={radioValue}
                         setRadioValue={setRadioValue}
                         handleGoClick={handleGoClick}/>
            </Grid>
            <Grid item className={classes.content}>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            {statsData.s1}
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
                                            {statsData.s2}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            New HIV +ve
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            {statsData.s3}
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
                                            {statsData.s4}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RTRI Recent
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            {statsData.s5}
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
                                            {statsData.s6}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            VL Result Complete
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            {statsData.s7}
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
                                            {statsData.s8}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">

                                            RITA Recent
                                            <br/>

                                        </Typography>
                                        <Typography className={classes.h4} variant="h4" component="h2">
                                            <br/>
                                            {statsData.s9}
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
                                            {statsData.s10}
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
                                                    data={BySiteBarData}
                                                    layout={BySiteBarLayout}

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
                            <Grid item>
                                <BangkokMap mapWidth="40em"/>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item >
                <Grid container>
                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>

                                <Plot
                                    data={ByAgeBarData}
                                    layout={ByAgeBarLayout}

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
                                    data={Pie2Data}
                                    layout={Pie2Layout}

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
                                    data={BarByMStatusData}
                                    layout={BarByMStatusLayout}

                                    // To disable trace
                                    config={{displayModeBar: false, staticPlot: false}}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container>
                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>

                                <Plot
                                    data={BarByGenderData}
                                    layout={BarByGenderLayout}

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
                                    data={tableData}
                                    layout={tableLayout}

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
                                    data={BarByPartnerTestData}
                                    layout={BarByPartnerTestLayout}

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


Date.prototype.yyyymmdd = function () {
    const mm = this.getMonth() + 1; // getMonth() is zero-based
    const dd = this.getDate();

    return [this.getFullYear(), "-",
        (mm > 9 ? '' : '0') + mm, "-",
        (dd > 9 ? '' : '0') + dd
    ].join('');
};

function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
