import React, { useState, useEffect } from "react";

import { Grid, IconButton, TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DateRangeIcon from "@material-ui/icons/DateRange";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//-------------------------------------------
// redux
import { useDispatch, useSelector } from "react-redux";

//-------------------------------------------
// date-fns
import {
  subMonths,
  addMonths,
  endOfToday,
  format,
  endOfMonth,
  subDays,
  addDays,
} from "date-fns";

const useStyles = makeStyles((theme) => ({
  change_month_button: {
    padding: 0,
    color: "#333",
  },
  pickerTextField: {
    width: 152,
  },
}));

const Picker = (props) => {
  const classes = useStyles();
  const { value, onChange, type, reducer_key } = props;
  const list_params = useSelector(
    (state) => state.reducer[reducer_key].list_params
  );

  const prevMonth = () => {
    onChange(subMonths(value, 1));
  };
  const nextMonth = () => {
    onChange(addMonths(value, 1));
  };

  // console.log(`max : ${subDays(list_params.filter_end_dt, 1)} `);
  // console.log(`min : ${addDays(list_params.filter_start_dt, 1)} `);

  return (
    <Grid container alignItems="center">
      <Grid item>
        {/* <IconButton
          color="inherit"
          className={classes.change_month_button}
          onClick={prevMonth}
        >
          <ArrowLeftIcon />
        </IconButton> */}
      </Grid>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          // inputVariant="outlined"
          TextFieldComponent={(props) => (
            <TextField
              {...props}
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              className={classes.pickerTextField}
            />
          )}
          // openTo="date"
          // views={["year", "date", "month"]}
          // label="Year and Month"
          // helperText="Start from year selection"
          value={value}
          onChange={onChange}
          format="yyyy-MM-dd"
          autoOk
          minDate={
            type === "filter_end_dt"
              ? addDays(list_params.filter_start_dt, 1)
              : new Date(1900, 0, 1)
          }
          // maxDate={
          //   type === "filter_start_dt" &&
          //   subDays(list_params.filter_end_dt, 1)
          // }
          maxDate={
            type === "filter_start_dt"
              ? subDays(list_params.filter_end_dt, 1)
              : new Date(2100, 0, 1)
          }
          className={classes.picker}
        />
      </MuiPickersUtilsProvider>

      <Grid item>
        {/* <IconButton
          color="inherit"
          className={classes.change_month_button}
          onClick={nextMonth}
          disabled={
            format(endOfMonth(value), "yyyy-MM-dd") ===
            format(endOfMonth(new Date()), "yyyy-MM-dd")
          }
        >
          <ArrowRightIcon />
        </IconButton> */}
      </Grid>
    </Grid>
  );
};

export default Picker;
