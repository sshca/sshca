import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  from,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { LocalizationProvider } from "@mui/lab";
import { Card, CircularProgress, CssBaseline, Typography } from "@mui/material";
import { Components, createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { lazy, Suspense, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Header";
import DateAdapter from "@mui/lab/AdapterDateFns";

const Dash = lazy(() => import("./pages/Dash"));
const Login = lazy(() => import("./pages/Login"));
const Roles = lazy(() => import("./pages/RolesPage"));
const Hosts = lazy(() => import("./pages/HostsPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const Host = lazy(() => import("./pages/Host"));
const User = lazy(() => import("./pages/User"));
const Role = lazy(() => import("./pages/Role"));
const VerifyHostCode = lazy(() => import("./pages/VerifyHostCode"));
const CustomCertificate = lazy(() => import("./pages/CustomCertificate"));

const link = createHttpLink({
  uri: "/api/graphql",
  credentials: "same-origin",
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const props: Components = {
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "outlined",
    },
  },
};
const darkTheme = createTheme({
  components: props,
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  components: props,
  palette: {
    mode: "light",
  },
});

function Loading() {
  return (
    <Card className="card" style={{ textAlign: "center" }}>
      <Typography variant="h3">Loading...</Typography>
      <CircularProgress style={{ width: "10%", height: "10%" }} />
    </Card>
  );
}
function App() {
  const [darkMode, setDarkMode] = useState(darkThemeMq.matches);
  darkThemeMq.addEventListener("change", (evt) => {
    setDarkMode(evt.matches);
  });
  const history = useHistory();
  React.useEffect(() => {
    const errorLink = onError(({ graphQLErrors }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message }) => {
          if (message === "Invalid Auth") {
            history.push("");
          }
        });
    });

    client.setLink(from([errorLink, link]));
  }, [history]);
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            </Route>
            <Route exact path="/dash">
              <Suspense fallback={<Loading />}>
                <Dash />
              </Suspense>
            </Route>
            <Route exact path="/roles">
              <Suspense fallback={<Loading />}>
                <Roles />
              </Suspense>
            </Route>
            <Route exact path="/hosts">
              <Suspense fallback={<Loading />}>
                <Hosts />
              </Suspense>
            </Route>
            <Route exact path="/users">
              <Suspense fallback={<Loading />}>
                <UsersPage />
              </Suspense>
            </Route>
            <Route exact path="/host/:id">
              <Suspense fallback={<Loading />}>
                <Host />
              </Suspense>
            </Route>
            <Route exact path="/user/:id">
              <Suspense fallback={<Loading />}>
                <User />
              </Suspense>
            </Route>
            <Route exact path="/role/:id">
              <Suspense fallback={<Loading />}>
                <Role />
              </Suspense>
            </Route>
            <Route exact path="/verifyHost/:id">
              <Suspense fallback={<Loading />}>
                <VerifyHostCode />
              </Suspense>
            </Route>
            <Route exact path="/custom">
              <Suspense fallback={<Loading />}>
                <CustomCertificate />
              </Suspense>
            </Route>
          </Switch>
        </ThemeProvider>
      </ApolloProvider>
    </LocalizationProvider>
  );
}

export default App;
