import React from "react";
import Routes from "./Routes";

//--------------------------------------------------
// redux
import { Provider } from "react-redux";
import { store } from "./redux/Redux";
import { RecoilRoot } from "recoil";

// material-ui/core/styles
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "theme";

//--------------------------------------------------
// apu
import { Auth } from "@psyrenpark/auth";
import { Api } from "@psyrenpark/api";
import { Storage } from "@psyrenpark/storage";
import awsmobile from "./aws-exports-bde-admin";
Auth.setConfigure(awsmobile);
Api.setConfigure(awsmobile);
Storage.setConfigure(awsmobile);

const App = () => {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </RecoilRoot>
  );
};

export default App;
