import React from "react";

import MaterialTable from "material-table";

// @material-ui/core
import { Grid, Button } from "@material-ui/core";

// @material-ui/core/styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: (props) => ({
    height: props?.overflow?.height,
    overflowY: props?.overflow?.overflow,
  }),
}));

const Table = (props) => {
  const {
    data,
    columns,
    pageSize,
    paging,
    onRowClick,
    selection,
    overflow,
  } = props;
  const classes = useStyles({ overflow: overflow });

  return (
    <MaterialTable
      className={classes.table}
      title=""
      data={data}
      columns={columns}
      onRowClick={(event, rowData) => {
        if (onRowClick) {
          onRowClick(rowData);
        }
      }}
      options={{
        // selection: onSelectionChange ? true : false,
        selection: selection?.isSelection,
        // paginationType: "stepped",
        pageSize: pageSize,
        paging: paging,
        toolbar: false,
        search: false,
        sorting: false,
      }}
      onSelectionChange={selection?.onSelectionChange}
    />
  );
};

export default Table;
