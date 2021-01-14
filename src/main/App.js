import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header  from "/Users/sylviachadha/WebstormProjects/muhivproject/src/components/header";
import Grid from "@material-ui/core/Grid";
import home from "/Users/sylviachadha/WebstormProjects/muhivproject/src/pages/home";
import dashboard from "../pages/dashboard";
import report from "../pages/report";


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
                        </Switch>
                    </Grid>
                </Grid>
            </BrowserRouter>
    );
}

export default App;
