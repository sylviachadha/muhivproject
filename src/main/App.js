import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "../components/header";
import Grid from "@material-ui/core/Grid";
import home from "../pages/home";
import dashboard from "../pages/dashboard";
import report from "../pages/report";
import Overview from "../reportpages/overview"
import Gender from "../reportpages/gender";
import MaritalStatus from "../reportpages/maritalstatus"
import Risk from "../reportpages/risk"
import PartnerHiv from "../reportpages/partnerhiv"
import Age from "../reportpages/age"
import Site from "../reportpages/site"
import Area from "../reportpages/area"

function App() {
    const [value, setValue] = useState(0);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Grid container direction={"column"} style={{height: "100%"}}>
                <Grid item>
                    <Header value={value} setValue={setValue}/>
                </Grid>
                <Grid item>
                    <Switch>
                        <Route exact path="/" component={home}/>
                        <Route exact path="/home" component={home}/>
                        <Route exact path="/dashboard" component={dashboard}/>
                        <Route exact path="/report" component={report}/>
                        <Route path="/overview" component={Overview} exact/>
                        <Route path="/by-gender" component={Gender} exact/>
                        <Route path="/by-status" component={MaritalStatus} exact/>
                        <Route path="/by-age" component={Age} exact/>
                        <Route path="/by-risk" component={Risk} exact/>
                        <Route path="/by-outcome" component={PartnerHiv} exact/>
                        <Route path="/by-site" component={Site} exact/>
                        <Route path="/by-area"   component={() => <Area/>} exact/>

                    </Switch>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
