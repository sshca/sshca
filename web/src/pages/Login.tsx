import { gql, useMutation } from "@apollo/client";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { Signin } from "./__generated__/Signin";

const LOGIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

  const [login, { data }] = useMutation<Signin>(LOGIN_MUTATION, {
    variables: { email: formData.email, password: formData.password },
  });

  if (data?.login) {
    history.push("/dash");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    login({
      variables: { email: formData.email, password: formData.password },
    });
  }

  return (
    <Paper className="paper" style={{ textAlign: "center" }}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Password"
          value={formData.password}
          onChange={(e) =>
            setformData({ ...formData, password: e.target.value })
          }
          type="password"
          style={{ marginTop: "10px" }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Paper>
  );
};

export default Login;
