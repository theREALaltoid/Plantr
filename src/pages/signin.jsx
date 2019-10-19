import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';

import '../css/form.min.css';

class Contacts extends React.PureComponent {
  render() {
    return (<Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"/>
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
        </FormGroup>
        <div className="signInButtonGroup">
          <FormGroup>
            <Button>Sign In
            </Button>
            {' '}
            <Button>
              Sign Up</Button>
          </FormGroup>
        </div>
      </Form>
    </Container>);
  }
}

export default Contacts;
