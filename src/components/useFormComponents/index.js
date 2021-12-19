import React, { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";

// api
import { apiObject } from "api";

// @material-ui/core/styles
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/core
import {
  Grid,
  Button,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Divider,
  CircularProgress,
} from "@material-ui/core";

// @material-ui/pickers
import { KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

// react-hook-form
import { Controller, useFormContext, useForm, FormProvider } from "react-hook-form";

import { DevTool } from "@hookform/devtools";

// @date-io/date-fns
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  upload_button: {
    color: "white",
    backgroundColor: "rgba(76,175,80,1.0)",
  },

  noBorderOutlined: {
    "& fieldset": {
      border: 0,
    },
  },

  api_help: {
    color: "#ec407a !important",
  },
  checkbox: {
    margin: 0,
    // height: "unset!important",
    // marginTop: "5px",
    // color: "rgba(0, 0, 0, 0.26)!important",
  },
  table_container: {
    backgroundColor: "white",
    // border: "2px solid white",
  },
  row_container: {
    minHeight: 64,

    borderBottom: "solid 1px white",
    // "& > :first-child": {
    //   borderTop: "solid 1px #bbbbbb",
    // },
  },
  row_item: {
    height: "100%",
  },
  row_title: {
    height: "100%",
  },
  row_title_text_container: {
    height: "100%",
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "#dddddd",
    // borderRadius: "3px",
  },
  row_title_text: {
    wordBreak: "keep-all",
    fontWeight: 500,
    lineHeight: "1.3",
    // "& .MuiTypography-subtitle1": {
    // lineHeight: "1.3",
    // },
  },
  row_content: {
    height: "100%",
    backgroundColor: "#f1f1f1",
    // paddingLeft: "10px",
    // paddingRight: "10px",
    // "& .MuiOutlinedInput-input": {
    //   padding: "5px 5px 7px 5px",
    // },
    "& .MuiTypography-subtitle1": {
      paddingLeft: "15px",
    },
  },
  row_content_text_container: {
    height: "100%",
  },
  // text_field: {
  //   padding: "6px 15px 7px 15px",
  // },
  text_area: {
    width: "calc(100% - 180px)",
    backgroundColor: "white",
  },

  slider: {
    // width: "80%",
    // margin
  },

  wysiwyg_wrapper: {},
  wysiwyg_editor: {
    padding: "18.5px 14px",
  },
  chip: {
    margin: theme.spacing(0.5),
    "& .MuiChip-label": {
      // backgroundColor: "red",
      paddingBottom: 2,
    },
  },
}));

const useSelectStyles = makeStyles((theme) => ({
  outlinedCustom: {
    "& .MuiOutlinedInput-input": {
      paddingTop: 10,
      paddingBottom: 11,
      background: "white",
      minWidth: 64,
      // fontWeight: "500",
    },
    "& fieldset": {
      // border: "none",
    },
  },
}));

const useTextFieldStyles = makeStyles((theme) => ({
  accountInput: {
    // color: theme.palette.primary.main,
    height: 78,
    marginTop: 8,
  },
  autofillCustom: {
    // "&:-internal-autofill-selected": {
    //   backgroundColor: "red !important",
    //   // WebkitBoxShadow: "0 0 0 1000px white inset"
    // },
    "&:-webkit-autofill": {
      // WebkitBoxShadow: "0 0 0 1000px white inset",
      boxShadow: "0 0 0 1000px white inset",
    },
  },
  termsInput: {
    backgroundColor: theme.palette.grey[100],
  },
  outlinedCustom: {
    "& .MuiOutlinedInput-input": {
      paddingTop: 10,
      paddingBottom: 11,
      // background: "white",
      minWidth: 64,
    },
    "& fieldset": {
      // border: "none",
    },
  },
}));

const usePickerStyles = makeStyles((theme) => ({
  outlinedCustom: {
    "& .MuiOutlinedInput-input": {
      paddingTop: 10,
      paddingBottom: 11,
    },
  },
}));

const useHookFormContainerStyles = makeStyles((theme) => ({
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
    "& button": {
      marginLeft: theme.spacing(1),
    },
  },
}));

const useRecommendStocksHookFormStyles = makeStyles((props) => ({
  label: (props) => ({
    width: props.labelWidth,
    paddingRight: 16,
    "& p": {
      fontWeight: 500,
    },
  }),
  inputs: (props) => ({
    width: `calc(90% - ${props.labelWidth}px)`,
  }),
}));

export const SelectControllerV2 = (props) => {
  const selectClasses = useSelectStyles();

  const {
    // isEditable,
    menuItems,
    name,
    className,
    // errors,
    label,
    placeholder,
    required,
    fullWidth,
  } = props;
  const { control, errors, reset, watch } = useFormContext();
  const errorMessage = {
    required: `*${label} 항목은 필수입니다.`,
  };

  return (
    <Controller
      render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => (
        <FormControl error={errors[name]} fullWidth={fullWidth ? true : false}>
          <Select
            className={selectClasses[className]}
            variant="outlined"
            // displayEmpty
            onChange={onChange}
            value={value}
          >
            {placeholder && (
              <MenuItem value={false} disabled>
                <Box color="grey.500">{placeholder}</Box>
              </MenuItem>
            )}
            {menuItems?.map((x) => {
              return (
                <MenuItem key={x.key} value={x.value}>
                  {x.key}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText variant="outlined">
            {
              errors[name] &&
                (errorMessage[errors[name].type]
                  ? errorMessage[errors[name].type]
                  : errors[name].message)
              // errors[name] && errors[name].message
            }
          </FormHelperText>
        </FormControl>
      )}
      name={name}
      control={control}
      error={errors[name]}
      rules={{
        required: required,
      }}
    />
  );
};

export const TextFieldControllerV2 = (props) => {
  const { name, component, required, pattern, errorMessage, noTrim, removeBlank } = props;
  const { control, errors, setValue } = useFormContext();

  // useEffect(() => {
  //   console.log(errors[name]);
  // }, [errors[name]]);

  return (
    <Controller
      as={
        <TextField
          {...component.props}
          label={
            errors[name] &&
            (errorMessage[errors[name].type]
              ? errorMessage[errors[name].type]
              : errors[name].message)
          }
          // helperText={errors[name] && errorMessage[errors[name].type]}
          // helperText={
          //   errors[name]
          //     ? errorMessage[errors[name].type]
          //       ? errorMessage[errors[name].type]
          //       : errors[name].message
          //     : " "
          // }
          inputProps={{
            ...component.props.inputProps,
            onBlur: (e) => {
              !noTrim && setValue(name, e.target.value.trim());
              removeBlank && setValue(name, e.target.value.replace(/(\s*)/g, ""));
              component.props.inputProps?.onBlur();
            },
          }}
        />
      }
      name={name}
      control={control}
      error={errors[name]}
      rules={{
        required: required,
        pattern: pattern,
      }}
      // defaultValue={""}
    />
  );
};

export const SelectController = (props) => {
  const selectClasses = useSelectStyles();

  const {
    // isEditable,
    menuItems,
    name,
    className,
    // errors,
    label,
    placeholder,
    required,
    fullWidth,
  } = props;
  const { control, errors, reset, watch } = useFormContext();
  const errorMessage = {
    required: `*${label} 항목은 필수입니다.`,
  };

  return (
    <FormControl error={errors[name]} fullWidth={fullWidth ? true : false}>
      <Controller
        render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => (
          <Select
            className={selectClasses[className]}
            variant="outlined"
            // displayEmpty
            onChange={onChange}
            value={value}
          >
            {placeholder && (
              <MenuItem value={false} disabled>
                <Box color="grey.500">{placeholder}</Box>
              </MenuItem>
            )}
            {menuItems?.map((x) => {
              return (
                <MenuItem key={x.key} value={x.value}>
                  {x.key}
                </MenuItem>
              );
            })}
          </Select>
        )}
        // as={
        //   <Select
        //     className={selectClasses[className]}
        //     variant="outlined"
        //     // displayEmpty
        //   >
        //     {placeholder && (
        //       <MenuItem value="선택" disabled>
        //         <Box color="grey.500">{placeholder}</Box>
        //       </MenuItem>
        //     )}
        //     {menuItems?.map((x) => {
        //       return (
        //         <MenuItem key={x.key} value={x.value}>
        //           {x.key}
        //         </MenuItem>
        //       );
        //     })}
        //   </Select>
        // }
        name={name}
        control={control}
        error={errors[name]}
        rules={{
          required: required,
        }}
      />
      <FormHelperText variant="outlined">
        {
          errors[name] &&
            (errorMessage[errors[name].type]
              ? errorMessage[errors[name].type]
              : errors[name].message)
          // errors[name] && errors[name].message
        }
      </FormHelperText>
    </FormControl>
  );
};

export const TextFieldController = (props) => {
  const textFieldClasses = useTextFieldStyles();
  const {
    name,
    className,
    label,
    placeholder,
    pattern,
    icon,
    endAdornment,
    errorMessage,
    type,
    min,
    max,
    step,
    // errors,
    multiline,
    rows,
    noCheck,
    noFullWidth,
    required,
    readOnly,
    maxlength,
    minlength,
  } = props;
  const { control, errors, watch, register, setValue } = useFormContext();
  // console.log({ errors });
  // const errorMessage = {
  //   required: `*${label} 항목은 필수입니다.`,
  // };

  useEffect(() => {
    console.log(errors[name]);
  }, [errors[name]]);

  return (
    <Controller
      as={
        <TextField
          className={textFieldClasses[className]}
          variant="outlined"
          fullWidth={noFullWidth ? false : true}
          // size="small"
          // label={label}
          placeholder={placeholder ? placeholder : label}
          helperText={
            errors[name]
              ? errorMessage[errors[name].type]
                ? errorMessage[errors[name].type]
                : errors[name].message
              : " "
          }
          inputProps={{
            className: textFieldClasses.autofillCustom,
            onBlur: (e) => {
              // console.log(e.target.value);
              !noCheck && setValue(name, e.target.value.replace(/(\s*)/g, ""));
            },
            readOnly: readOnly,
            step: step,
            min: min,
            max: max,
            type: type ? type : "text",
            maxlength: maxlength,
            minlength: minlength,
          }}
          InputProps={{
            startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>,
            endAdornment: endAdornment && (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          }}
          // onBlur={(e) => {
          //   console.log(e);
          // }}

          multiline={multiline}
          rows={rows}
          // fullWidth={fullWidth ? true : false}
        />
      }
      name={name}
      control={control}
      error={errors[name]}
      rules={{
        required: required,
        // pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
        pattern: pattern,
      }}
      // defaultValue={""}
    ></Controller>
  );
};

export const CheckBoxController = (props) => {
  const classes = useStyles();
  const { name, className, label, placeholder, required, fullWidth, message } = props;
  const { control, errors, reset, watch } = useFormContext();
  const errorMessage = {
    required: `*${label} 항목은 필수입니다.`,
  };
  const ref = React.useRef(null);

  return (
    <FormControl error={errors[name]} fullWidth={fullWidth ? true : false}>
      <FormControlLabel
        control={
          <Controller
            render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => (
              <Checkbox
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                // inputRef={ref}
                color="primary"
              />
            )}
            name={name}
            control={control}
            error={errors[name]}
            rules={{
              required: required,
            }}
          />
        }
        label={message}
      />
      <FormHelperText variant="outlined">
        {
          errors[name] &&
            (errorMessage[errors[name].type]
              ? errorMessage[errors[name].type]
              : errors[name].message)
          // errors[name] && errors[name].message
        }
      </FormHelperText>
    </FormControl>
  );
};

export const TimePickerController = (props) => {
  const timePickerClasses = usePickerStyles();
  const { name, className, label, placeholder, required, fullWidth, message } = props;
  const { control, errors, reset, watch } = useFormContext();
  const errorMessage = {
    required: `*${label} 항목은 필수입니다.`,
  };

  return (
    <FormControl error={errors[name]} fullWidth={fullWidth ? true : false}>
      <Controller
        render={({ onChange, onBlur, value }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              className={timePickerClasses.outlinedCustom}
              inputVariant="outlined"
              clearable
              // label="Step = 5"
              value={value}
              minutesStep={5}
              onChange={onChange}
              placeholder={placeholder}
              mask="__:__ _M"
              autoOk
            />
          </MuiPickersUtilsProvider>
        )}
        name={name}
        control={control}
        error={errors[name]}
        rules={{
          required: required,
        }}
      />
      <FormHelperText variant="outlined">
        {
          errors[name] &&
            (errorMessage[errors[name].type]
              ? errorMessage[errors[name].type]
              : errors[name].message)
          // errors[name] && errors[name].message
        }
      </FormHelperText>
    </FormControl>
  );
};

export const AutocompleteController = (props) => {
  const textFieldClasses = useTextFieldStyles();

  const {
    name,
    className,
    label,
    placeholder,
    pattern,
    icon,
    // errorMessage,
    type,
    // errors,
    multiline,
    rows,
    noCheck,
    noFullWidth,
    required,
    readOnly,
    // handleChange,
  } = props;
  const { control, errors, watch, register, setValue } = useFormContext();
  // console.log({ errors });
  const errorMessage = {
    required: `*${label} 항목은 필수입니다.`,
  };

  const [isLoading, setIsLoading] = useState(0);
  const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   console.log({ isLoading });
  // }, [isLoading]);

  const handleChange = async (startsWith) => {
    setIsLoading((prev) => prev + 1);
    try {
      let responseListStockCodes = await apiObject.listStockCodes(
        {
          limit: 20,
          filter: { and: [{ stock_name: { startsWith: startsWith } }] },
        },
        () => {}
      );
      console.log({ responseListStockCodes });

      setOptions(responseListStockCodes.items);

      // if (isLoading > 0) {
      setIsLoading((prev) => prev - 1);
      // }
    } catch (error) {
      // if (isLoading > 0) {
      setIsLoading((prev) => prev - 1);
      // }
      // alert(error);
      console.log("Error", error);
      console.log("Error", error.code);
      console.log("Error", error.message);
      console.log("Error", error.response.data);
    }
  };

  return (
    <Controller
      render={({ onChange, onBlur, value }) => (
        <Autocomplete
          id="highlights-demo"
          style={{ width: 300 }}
          options={options}
          getOptionLabel={(option) => option.stock_name}
          size="small"
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder={placeholder}
              helperText={
                errors[name]
                  ? errorMessage[errors[name].type]
                    ? errorMessage[errors[name].type]
                    : errors[name].message
                  : " "
              }
              // inputProps={{
              //   ...params.inputProps,
              //   className: textFieldClasses.autofillCustom,
              //   onBlur: (e) => {
              //     // console.log(e.target.value);
              //     !noCheck &&
              //       setValue(name, e.target.value.replace(/(\s*)/g, ""));
              //   },
              //   readOnly: readOnly,
              //   // step: step,
              //   // min: min,
              //   // max: max,
              //   type: type ? type : "text",
              // }}
              InputProps={{
                ...params.InputProps,
                startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              onChange={(e) => {
                console.log("onChange");
                if (e.target.value.length > 1) {
                  handleChange(e.target.value);
                }
              }}
            />
          )}
          renderOption={(option, { inputValue }) => {
            const matches = match(option.stock_name, inputValue);
            const parts = parse(option.stock_name, matches);

            return (
              <div>
                {parts.map((part, index) => (
                  <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }}
          onChange={(e, value, reason) => {
            // console.log({ value });
            onChange(value?.stock_code_no);
            console.log(value);
            console.log(reason);
          }}
        />
      )}
      name={name}
      control={control}
      error={errors[name]}
      rules={{
        required: required,
        // pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
        pattern: pattern,
      }}
      // defaultValue={""}
    ></Controller>
  );
};

export const HookFormContainer = (props) => {
  const classes = useHookFormContainerStyles();
  const { title, inputs, submitButton, listButton, deleteButton /* defaultValues */ } = props;

  const [isReady, setIsReady] = useState(false);

  // const methods = useForm({
  //   defaultValues: { key: "value", ...defaultValues },
  // });
  // const {
  //   handleSubmit,
  //   watch,
  //   /* setValue, */
  //   /* reset, */
  //   /* errors, */
  //   /* setError, */
  //   /* clearErrors  */
  // } = methods;

  const { watch, handleSubmit } = useFormContext();

  useEffect(() => {
    Object.keys(watch()).find((x) => Boolean(watch(x)) === false)
      ? setIsReady(false)
      : setIsReady(true);
  }, [watch()]);

  return (
    <>
      {/* <FormProvider {...methods}> */}
      <Box py={3} px={5} maxWidth={1000}>
        <Typography variant="h6">
          <Box fontWeight={600}>{title}</Box>
        </Typography>
        <Box py={2}>
          {inputs.map((x, i) => {
            return (
              <Box key={`inputs${i}`} py={2}>
                <Typography variant="body1" gutterBottom>
                  <Box fontWeight={500}>{x.label}</Box>
                </Typography>
                {x.component}
              </Box>
            );
          })}
        </Box>

        <div className={classes.buttonBox}>
          {listButton && (
            <Button
              onClick={() => {
                listButton.goToList();
              }}
              variant="contained"
              color="default"
              size="large"
            >
              {listButton.label}
            </Button>
          )}
          {submitButton && (
            <Button
              onClick={() => {
                handleSubmit(submitButton.onSubmit)();
              }}
              variant="contained"
              color={isReady ? "primary" : "default"}
              size="large"
            >
              {submitButton.label}
            </Button>
          )}
          {deleteButton && (
            <Button
              onClick={() => {
                deleteButton.onDelete();
              }}
              variant="contained"
              color={"secondary"}
              size="large"
            >
              {deleteButton.label}
            </Button>
          )}
        </div>
      </Box>
      {/* </FormProvider>
      <DevTool control={methods.control} /> */}
    </>
  );
};

export const HookFormApiTester = (props) => {
  const classes = useHookFormContainerStyles();
  const { title, inputs, onSubmit, defaultValues } = props;
  const result = useSelector((state) => state.reducerMobilePass.test);

  useEffect(() => {
    // console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const [isReady, setIsReady] = useState(false);

  const methods = useForm({
    defaultValues: defaultValues,
  });
  const { handleSubmit, watch } = methods;

  useEffect(() => {
    Object.keys(watch()).find((x) => Boolean(watch(x)) === false)
      ? setIsReady(false)
      : setIsReady(true);
  }, [watch()]);

  return (
    <>
      <FormProvider {...methods}>
        <Grid container justify="space-between">
          <Grid item xs={4}>
            <Box py={3} px={5} maxWidth={500}>
              <Typography variant="h6">
                <Box fontWeight={600}>{title}</Box>
              </Typography>
              <Box py={1}>
                {inputs.map((x, i) => {
                  return (
                    <Box key={`inputs${i}`} py={1}>
                      <Typography variant="body1" gutterBottom>
                        <Box fontWeight={500}>{x.label}</Box>
                      </Typography>
                      {x.component}
                    </Box>
                  );
                })}
              </Box>
              <div className={classes.submitBtnBox}>
                <Button
                  onClick={() => {
                    handleSubmit(onSubmit)();
                  }}
                  variant="contained"
                  color={isReady ? "primary" : "default"}
                  size="large"
                >
                  Test
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              <pre>{JSON.stringify(result, null, 4)}</pre>
            </Typography>
          </Grid>
        </Grid>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  );
};

export const RecommendStocksHookForm = (props) => {
  const { inputs, submit } = props;
  const labelWidth = 96;
  const classes = useRecommendStocksHookFormStyles({ labelWidth });

  const [isReady, setIsReady] = useState(false);

  const { watch, handleSubmit } = useFormContext();

  useEffect(() => {
    Object.keys(watch()).find((x) => Boolean(watch(x)) === false)
      ? setIsReady(false)
      : setIsReady(true);
  }, [watch()]);

  return (
    <>
      <Box pb={0}>
        <Grid container justify="space-between">
          {inputs.map((x, i) => {
            return (
              <Grid item xs={6} key={`inputs${i}`}>
                <Box pb={1}>
                  <Grid container alignItems="flex-start">
                    <Grid item className={classes.label}>
                      <Typography align="right">{x.label}</Typography>
                    </Grid>
                    <Grid item className={classes.inputs}>
                      {x.component}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* <div className={classes.buttonBox}> */}
      <Box pb={7}>
        <Button
          onClick={() => {
            handleSubmit(submit.onSubmit)();
          }}
          variant="contained"
          color={isReady ? "secondary" : "default"}
          size="large"
          fullWidth
        >
          {submit.label}
        </Button>
      </Box>

      {/* </div> */}
    </>
  );
};

export const RoomSettingHookForm = (props) => {
  const { inputs, submit } = props;
  const labelWidth = 96;
  const classes = useRecommendStocksHookFormStyles({ labelWidth });

  const [isReady, setIsReady] = useState(false);

  const { watch, handleSubmit, setValue } = useFormContext();

  useEffect(() => {
    Object.keys(watch())
      .filter((x) => x.includes("chat_"))
      .find((x) => Boolean(watch(x)) === false)
      ? setIsReady(false)
      : setIsReady(true);
  }, [watch()]);

  return (
    <>
      <Box pb={0}>
        {inputs.map((x, i) => {
          return (
            <Box key={`inputs${i}`} py={2}>
              <Typography variant="body1" gutterBottom>
                <Box fontWeight={500}>{x.label}</Box>
              </Typography>
              {x.component}
            </Box>
          );
        })}
      </Box>

      <Box py={2}>
        <Divider />
      </Box>

      <Box py={1}>
        <Button
          onClick={() => {
            handleSubmit(submit.onSubmit)();
          }}
          variant="contained"
          color={isReady ? "secondary" : "default"}
          size="large"
          fullWidth
          // disabled={true}
        >
          {submit.label}
        </Button>
      </Box>
      {/* </div> */}
    </>
  );
};
