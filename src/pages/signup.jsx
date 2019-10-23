import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "../css/signup.min.css";

class Signup extends React.PureComponent {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              required="required"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input
              type="Username"
              name="Username"
              id="Username"
              placeholder="Username"
              required="required"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Confirm Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              required="required"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Confirm Password"
              required="required"
            />
          </FormGroup>

          <div className="but">
            <Button size="lg" block>
              Submit
            </Button>
          </div>
          <br />
          <p>All Fields Required</p>
        </Form>
      </Container>
    );
  }
}

export default Signup;
