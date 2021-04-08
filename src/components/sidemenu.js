import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#364f6b','#5588a3'
        position: "fixed",
        marginTop: "3.22em",
        marginBottom: "3.22em",
        height: "100%",
        width: "23%",
        backgroundColor: '#1f5f8b',
        color: 'white',
        zIndex: "3",
        fontSize: 20,
        listItemText: {
            fontSize: '5em',//Insert your required size
        }
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function VerticalMenu() {
    const classes = useStyles();


    const [openRecency, setOpenRecency] = React.useState(true);
    const handleRecencyClick = () => setOpenRecency(!openRecency);

    const [openDemographic, setOpenDemographic] = React.useState(true);
    const handleDemographicClick = () => setOpenDemographic(!openDemographic);

    const [openBehaviour, setOpenBehaviour] = React.useState(true);
    const handleBehaviourClick = () => setOpenBehaviour(!openBehaviour);


    const [openGeographic, setOpenGeographic] = React.useState(true);
    const handleGeographicClick = () => setOpenGeographic(!openGeographic);


    const [openPartnerTest, setOpenPartnerTest] = React.useState(true);
    const handlePartnerTest = () => setOpenPartnerTest(!openPartnerTest);


    return (
        <List component="nav" className={classes.root}>

            <ListItem button onClick={handleRecencyClick}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Recency Report"/>
                {openRecency ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openRecency} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component={Link} to="/overview" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Overview"/>
                    </ListItem>

                </List>
            </Collapse>

            <ListItem button onClick={handleDemographicClick}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Demographic"/>
                {openDemographic ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openDemographic} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component={Link} to="/by-gender" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Gender"/>
                    </ListItem>
                    <ListItem button component={Link} to="/by-status" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Marital status"/>
                    </ListItem>
                    <ListItem button component={Link} to="/by-age" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Age"/>
                    </ListItem>
                </List>
            </Collapse>


            <ListItem button onClick={handleBehaviourClick}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Behaviour"/>
                {openBehaviour ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openBehaviour} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component={Link} to="/by-risk" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Transmission Risk"/>
                    </ListItem>

                </List>
            </Collapse>

            <ListItem button onClick={handleGeographicClick}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Geographic"/>
                {openGeographic ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openGeographic} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component={Link} to="/by-area" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Area"/>
                    </ListItem>
                    <ListItem button component={Link} to="/by-site" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Testing Site"/>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handlePartnerTest}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Partner Test"/>
                {openPartnerTest ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openPartnerTest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component={Link} to="/by-outcome" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="HIV Test Outcome"/>
                    </ListItem>
                </List>
            </Collapse>

        </List>
    );
}