import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import { ApolloProvider } from "@apollo/client/react";
import { onError } from "@apollo/client/link/error";
import { Card, CircularProgress, CssBaseline, Typography } from "@mui/material";
import { Components, ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { Suspense, lazy, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header";

const Dash = lazy(() => import("./pages/Dash"));
const Login = lazy(() => import("./pages/Login"));
const Roles = lazy(() => import("./pages/RolesPage"));
const Hosts = lazy(() => import("./pages/HostsPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const Host = lazy(() => import("./pages/Host"));
const User = lazy(() => import("./pages/User"));
const Role = lazy(() => import("./pages/Role"));
const VerifyHostCode = lazy(() => import("./pages/VerifyHostCode"));
const ViewHostRequests = lazy(() => import("./pages/ViewHostRequests"));
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
  React.useEffect(() => {
    const listener = (evt: MediaQueryListEvent) => {
      setDarkMode(evt.matches);
    };
    darkThemeMq.addEventListener("change", listener);
    return () => darkThemeMq.removeEventListener("change", listener);
  }, []);
  const navigate = useNavigate();
  React.useEffect(() => {
    const errorLink = onError(({ error }) => {
      if (CombinedGraphQLErrors.is(error)) {
        error.errors.forEach(({ message }) => {
          if (message === "Invalid Auth") navigate("/");
        });
      }
    });

    client.setLink(from([errorLink, link]));
  }, [navigate]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
            <Route path="/dash" element={<Suspense fallback={<Loading />}><Dash /></Suspense>} />
            <Route path="/roles" element={<Suspense fallback={<Loading />}><Roles /></Suspense>} />
            <Route path="/hosts" element={<Suspense fallback={<Loading />}><Hosts /></Suspense>} />
            <Route path="/users" element={<Suspense fallback={<Loading />}><UsersPage /></Suspense>} />
            <Route path="/host/:id" element={<Suspense fallback={<Loading />}><Host /></Suspense>} />
            <Route path="/user/:id" element={<Suspense fallback={<Loading />}><User /></Suspense>} />
            <Route path="/role/:id" element={<Suspense fallback={<Loading />}><Role /></Suspense>} />
            <Route path="/verifyHost/:id" element={<Suspense fallback={<Loading />}><VerifyHostCode /></Suspense>} />
            <Route path="/custom" element={<Suspense fallback={<Loading />}><CustomCertificate /></Suspense>} />
            <Route path="/verify" element={<Suspense fallback={<Loading />}><ViewHostRequests /></Suspense>} />
          </Routes>
        </ThemeProvider>
      </ApolloProvider>
    </LocalizationProvider>
  );
}

export default App;
