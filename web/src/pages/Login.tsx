import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { FIRST_USER } from "./__generated__/FIRST_USER";
import { FIRST_USER_SIGNUP } from "./__generated__/FIRST_USER_SIGNUP";
import { LOGIN } from "./__generated__/LOGIN";

const LOGIN_MUTATION = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      admin
    }
  }
`;
const FIRST_USER_QUERY = gql`
  query FIRST_USER {
    isFirstUser
  }
`;
const FIRST_USER_SIGNUP_MUTATION = gql`
  mutation FIRST_USER_SIGNUP($email: String!, $password: String!) {
    firstUser(email: $email, password: $password) {
      id
    }
  }
`;

const Login = () => {
  const [formData, setformData] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const history = useHistory();
  const [error, setError] = React.useState<null | string>(null);

  const [login] = useMutation<LOGIN>(LOGIN_MUTATION, {
    variables: { email: formData.email, password: formData.password },
  });
  const [signup] = useMutation<FIRST_USER_SIGNUP>(FIRST_USER_SIGNUP_MUTATION, {
    variables: { email: formData.email, password: formData.password },
  });
  const { data } = useQuery<FIRST_USER>(FIRST_USER_QUERY);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (data?.isFirstUser) {
      try {
        await signup();
        history.push("/dash");
      } catch (e) {
        if (e instanceof ApolloError) {
          setError(e.message);
        } else {
          throw e;
        }
      }
    } else {
      try {
        const { data } = await login();
        if (data?.login?.admin) {
          history.push("/dash");
        } else {
          setError("Only admins may login to management interface");
        }
      } catch (e) {
        if (e instanceof ApolloError) {
          setError(e.message);
        } else {
          throw e;
        }
      }
    }
  }
  return (
    <Paper className="paper" style={{ textAlign: "center" }}>
      <Typography variant="h4">
        {data?.isFirstUser ? "First User Signup" : "Login"}
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          id="Email"
          error={error !== null}
          label="Email"
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
          required
          value={formData.email}
        />
        <TextField
          id="Password"
          error={error !== null}
          helperText={error}
          label="Password"
          onChange={(e) =>
            setformData({ ...formData, password: e.target.value })
          }
          required
          style={{ marginTop: "10px" }}
          type="password"
          value={formData.password}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Paper>
  );
};

export default Login;
