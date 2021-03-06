import React from "react";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Profile from "./containers/Profile";
import { Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Authentication from "./hoc/requireAuth";
import NoAuthentication from "./hoc/requireNoAuth";

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} style={{ "text-align": "center" }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid item xs={12} sm={6} alignContent="center">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={NoAuthentication(SignIn)}
                    />
                    <Route
                      path="/signin"
                      component={NoAuthentication(SignIn)}
                    />
                    <Route
                      path="/signup"
                      component={NoAuthentication(SignUp)}
                    />
                    <Route
                      path="/profile"
                      component={Authentication(Profile)}
                    />
                  </Switch>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
