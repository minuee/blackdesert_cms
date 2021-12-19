import React from "react";
import { Route } from "react-router-dom";

// ui
import List from "./list";
// import Setting from "./setting";

const Company = (props) => {
  const { match } = props;

  return (
    <>
      <Route exact path={match.path} component={List} />
      {/* <Route path={`${match.path}/setting/`} component={Setting} /> */}
    </>
  );
};

export default Company;
