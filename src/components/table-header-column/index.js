import React, { useEffect, useState } from "react";

//-------------------------------------------
// ui
import clsx from "clsx";
import {
  Grid,
  Checkbox,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  InputBase,
  Button,
  Menu,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import { ArrowDropDown, ArrowDropUp, Search } from "@material-ui/icons";

import Picker from "components/picker";

//-------------------------------------------
// redux
import { useDispatch, useSelector } from "react-redux";

//-------------------------------------------
// date-fns
import { startOfMonth, endOfMonth, format, endOfToday } from "date-fns";

const useStyles = makeStyles((theme) => ({
  upload_button: {
    color: "#ffffff",
    backgroundColor: "rgba(76,175,80,1.0)",
  },
  formControl: {
    // maxHeight: 16.5,
    "& .MuiOutlinedInput-input": {
      paddingTop: "16.5px",
      paddingBottom: "16.5px",
    },
  },
  api_help: {
    color: "#ec407a !important",
  },
  checkbox: {
    // height: "unset!important",
    // marginTop: "5px",
    color: "rgba(0, 0, 0, 0.54)!important",
  },
  default_text: {
    width: "264",
    paddingLeft: "5",
    color: "rgb(200, 200, 200)!important",
  },
  search_grid: {
    cursor: "pointer",
  },
  outlinedCustomHeader: {
    "& .MuiOutlinedInput-input": {
      paddingTop: 10,
      paddingBottom: 11,
      background: "#ffffff",
      minWidth: 64,
      // fontWeight: "500",
    },
    "& fieldset": {
      border: "none",
    },
  },
  headerContainer: {
    border: `solid 1px ${theme.palette.grey[300]}`,
    borderRadius: 4,
  },
  headerItemLabel: {
    width: 80,
    paddingLeft: 8,
    paddingRight: 8,
    background: theme.palette.grey[200],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey[500],
    borderRadius: "4px 0 0 4px",
  },
}));

export const TableHeaderSortSpan = (props) => {
  const classes = useStyles();
  const { reducer_key, order_by } = props;
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(false);

  const onClick = () => {
    // var countTemp = count + 1;

    // onChange({
    //   order_column: order_by.key,
    //   order_type: countTemp % 2 === 1 ? "DESC" : "ASC",
    // });
    // console.log({ current });
    dispatch({
      type: "SET_HADER_LIST_PARAMS",
      payload: {
        reducer_type: reducer_key,
        list_params: {
          order_column: order_by.key,
          order_type:
            current && reducer[reducer_key].list_params.order_type === "DESC"
              ? "ASC"
              : "DESC",
          current_page: 1,
        },
      },
    });
    // setCount(countTemp);
  };

  useEffect(() => {
    reducer[reducer_key]?.list_params?.order_column === order_by.key
      ? setCurrent(true)
      : setCurrent(false);
  }, [reducer[reducer_key]?.list_params?.order_column]);

  return (
    <Grid
      container
      className={classes.search_grid}
      justify="center"
      alignItems={"center"}
      direction="row"
      spacing={1}
    >
      <Grid container className="search_select" alignItems="center">
        <Typography
          display="inline"
          variant={
            reducer[reducer_key]?.list_params?.order_column === order_by.key
              ? "h6"
              : undefined
          }
          color="textSecondary"
          onClick={onClick}
        >
          {order_by.label}
        </Typography>
        {current && reducer[reducer_key].list_params.order_type === "DESC" ? (
          <ArrowDropDown />
        ) : (
          <ArrowDropUp />
        )}
      </Grid>
    </Grid>
  );
};

export const SelectComponent = (props) => {
  const classes = useStyles();
  const {
    reducer_key,
    items,
    // current,
    onChange,
    // variant, className,
    label,
  } = props;
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const onSelectMenuItem = (event) => {
    onChange(items.find((item) => item.key === event.target.value));
  };

  return (
    <Grid container className={label && classes.headerContainer}>
      {label && (
        <Grid item className={classes.headerItemLabel}>
          <Typography variant="body1">{label}</Typography>
        </Grid>
      )}
      <Grid item>
        <Select
          className={classes.outlinedCustomHeader}
          variant={"outlined"}
          value={reducer[reducer_key].list_params.filter_user_type}
          onChange={onSelectMenuItem}
        >
          {items.map((item, index) => {
            return (
              <MenuItem key={item.key} value={item.key}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
};

// =======================================================================

export const SearchFilter = (props) => {
  const classes = useStyles();
  const { search_type_data, onChange } = props;

  const [searchText, setSearchText] = useState();
  // const [menuItem, setMenuItem] = useState(
  //   search_type_data.length > 0 && search_type_data[0].search_column
  //     ? search_type_data[0].search_column
  //     : ""
  // );

  const onClickSearchButton = () => {
    if (onChange) {
      onChange({
        searchText: searchText ? searchText : null,
        // menuItem: menuItem ? menuItem : null,
      });
    }
  };

  const onChangeSearchText = (event) => {
    setSearchText(event.target.value);
  };

  // const onSelectMenuItem = (event) => {
  //   setMenuItem(event.target.value);
  //   setSearchText("");
  // };

  return (
    <Box width={152} clone>
      <FormControl variant="outlined">
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" onClick={onClickSearchButton}>
                <Search fontSize={"small"} />
              </InputAdornment>
            ),
          }}
          value={searchText}
          onChange={onChangeSearchText}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onClickSearchButton();
            }
          }}
          className={classes.pickerTextField}
        />
      </FormControl>
    </Box>
  );
};

export const DatePicker = (props) => {
  const { onChange, type, reducer_key } = props;
  const classes = useStyles();

  const [date, setDate] = useState(
    useSelector((state) => state.reducer[reducer_key].list_params[type])
  );

  const onChangeDatePicker = (event) => {
    setDate(event);

    var dateData =
      type === "filter_start_dt"
        ? {
            filter_start_dt: event,
          }
        : {
            filter_end_dt: event,
          };

    if (onChange) {
      onChange(dateData);
    }
  };

  return (
    <Grid item>
      <Picker
        value={date}
        onChange={onChangeDatePicker}
        type={type}
        reducer_key={reducer_key}
      />
    </Grid>
  );
};

export const TypeSelectMenu = (props) => {
  const classes = useStyles();
  const { type_data, onChange } = props;

  const [menuItem, setMenuItem] = useState(
    type_data.length > 0 && type_data[0].value ? type_data[0].value : ""
  );

  const onSelectMenuItem = (event) => {
    setMenuItem(event.target.value);

    if (onChange) {
      onChange(
        type_data.find((typeInfo) => typeInfo.value === event.target.value)
      );
    }
  };

  return (
    <Grid container spacing={1}>
      <Box mr={7}>
        <Grid item className="search_select">
          <FormControl margin="dense">
            <Select
              style={{ width: 100 }}
              value={menuItem}
              onChange={onSelectMenuItem}
            >
              {type_data.map((typeInfo, index) => {
                return (
                  <MenuItem value={typeInfo.value} key={typeInfo.key}>
                    {typeInfo.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Box>
    </Grid>
  );
};
