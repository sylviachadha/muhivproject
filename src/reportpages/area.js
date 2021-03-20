

//Map start
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import VerticalMenu from "../components/sidemenu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Plot from "react-plotly.js";

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