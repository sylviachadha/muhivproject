import 'date-fns';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateSelection(props) {

    const handleStartDateChange = (date) => {
        props.setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        props.setEndDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container >
                <Grid item style={{marginRight:"1em"}}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Start Date"
                        value={props.startDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>

                <Grid item>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        label="End Date"
                        value={props.endDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>


            </Grid>
        </MuiPickersUtilsProvider>
    );
}
