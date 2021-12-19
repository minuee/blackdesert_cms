import React, { useEffect, useState, useRef } from "react";

import { Grid, Button, Box } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import { Pagination } from "@material-ui/lab";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  a_button: {
    // border: "2px solid #F2C200",
    // padding: 8,
    // borderRadius: 3,
    // "&:hover": {
    //   backgroundColor: "rgba(242,194,0,0.5)",
    //   color: "#ffffff",
    // },
    display: "none",
  },
}));

const TableFooter = (props) => {
  const {
    data,
    count,
    page,
    periodExcel,
    entireExcel,
    onChangeCallback,
    createButton,
    goToCreate,
    onExcelDownload,
    goBackButton,
    onBackCallback,
    createButtonLabel,
  } = props;

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [excelUrl, setExcelUrl] = useState(null);
  const excelUrlRef = useRef(null);

  const onClickExcelButton = async ({ period }) => {
    if (!period) {
      if (
        !window.confirm(
          "모든 데이터를 엑셀로 내려 받으시겠습니까? 자료량에 따라 수초~수십초 정도 소요될 수 있습니다."
        )
      ) {
        return;
      }
    }
    if (onExcelDownload) {
      const url = await onExcelDownload({ period });
      if (url !== "fail") {
        setExcelUrl(url);
      }
    }
  };

  useEffect(() => {
    if (excelUrl) {
      excelUrlRef.current.click();
    }
  }, [excelUrl]);

  return (
    <Box py={2} clone>
      <Grid container justify="space-between" className="table_footer">
        <Grid item>
          <>
            {entireExcel && (
              <Button
                variant="outlined"
                color="default"
                className="btn_excel"
                onClick={onClickExcelButton}
              >
                전체 엑셀저장
              </Button>
            )}

            <a href={excelUrl} className={classes.a_button} target="_blank" ref={excelUrlRef} />
            {periodExcel && (
              <Button
                variant="outlined"
                color="default"
                className="btn_excel"
                onClick={() => {
                  onClickExcelButton({ period: true });
                }}
              >
                기간별 엑셀저장
              </Button>
            )}

            <a href={excelUrl} className={classes.a_button} target="_blank" ref={excelUrlRef} />
          </>
        </Grid>
        <Grid item>
          <Pagination
            color="secondary"
            page={page}
            count={count}
            onChange={(e, n) => {
              if (onChangeCallback) {
                onChangeCallback(n);
              }
            }}
          />
        </Grid>
        <Grid item>
          {createButton && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditOutlinedIcon />}
                onClick={goToCreate}
              >
                {createButtonLabel ? createButtonLabel : "작성하기"}
              </Button>
            </Grid>
          )}
          {goBackButton && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditOutlinedIcon />}
                onClick={onBackCallback}
              >
                전체목록
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableFooter;
