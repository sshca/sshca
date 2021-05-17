import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useCookies } from "react-cookie";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [cookies, setCookie] = useCookies(["id"]);
  const history = useHistory();
  const responseGoogle = React.useCallback(
    ({ accessToken }: { accessToken: string }) => {
      fetch("/api/web/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ code: accessToken }),
      }).then((response) =>
        response
          .text()
          .then((text) => setCookie("id", text, { maxAge: 2 * 60 * 60 }))
      );
    },
    [setCookie]
  );

  // @ts-ignore
  if (window.Cypress) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      const { token } = JSON.parse(localStorage.getItem("googleCypress")!);
      responseGoogle({ accessToken: token });
    }, [responseGoogle]);
  }

  if (cookies.id) {
    history.push("/dash");
  }
  return (
    <Paper className="paper" style={{ textAlign: "center" }}>
      <Typography variant="h4">Login</Typography>
      <GoogleLogin
        clientId="257154229658-rafo0ic3bfvk4crenrs45ie6ii411khu.apps.googleusercontent.com"
        isSignedIn
        onFailure={console.log}
        onSuccess={(e) => responseGoogle(e as GoogleLoginResponse)}
        theme="dark"
        cookiePolicy="single_host_origin"
      />
    </Paper>
  );
};

export default Login;
