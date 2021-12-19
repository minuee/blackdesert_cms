import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Signin from "./signin";

const Accounts = (props) => {
  const { match } = props;

  return (
    <>
      {/* <Route exact path={match.path} component={List} />
      <Route path={`${match.path}/detail/:user_no`} component={Detail} /> */}
      {/* <Switch> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/accounts/signin" component={Signin} />
          <Redirect to="/accounts/signin" />
        </Switch>
      </BrowserRouter>
      {/* </Switch> */}
    </>
  );
};

export default Accounts;
