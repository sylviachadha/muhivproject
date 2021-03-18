import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header  from "../components/header";
import Grid from "@material-ui/core/Grid";
import home from "../pages/home";
import dashboard from "../pages/dashboard";
import report from "../pages/report";
import Overview from "../reportpages/overview"
import Gender from "../reportpages/gender";
import MaritalStatus from "../reportpages/maritalstatus"
import Risk from "../reportpages/risk"
import PartnerHiv from "../reportpages/partnerhiv"


function App() {
    const [value, setValue] = useState(0);

    return (
            <BrowserRouter>
                <Grid container direction={"column"}>
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
                            <Route path="/by-status" component={MaritalStatus} exact/>
                            <Route path="/by-risk" component={Risk} exact/>
                            <Route path="/by-outcome" component={PartnerHiv} exact/>
                        </Switch>
                    </Grid>
                </Grid>
            </BrowserRouter>
    );
}

export default App;
