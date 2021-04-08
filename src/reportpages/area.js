//Map start
import React from "react";
import BangkokMap from "../components/bangkokmap";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import VerticalMenu from "../components/sidemenu";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: "100%",
    },
    sideMenu: {
        minWidth: "22%",
    },
    content: {
        alignSelf :"center",
        marginLeft: "6em",
        marginTop: "5em"
    },

}))


export default function Area() {

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.sideMenu}>
                <VerticalMenu/>
            </Grid>
            <Grid item className={classes.content}>
                <h2>กรุงเทพมหานคร / Bangkok</h2>

                <BangkokMap mapWidth="650px"/>
            </Grid>

        </Grid>
    )


}