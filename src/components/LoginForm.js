import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions/'
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  onEmailChange(email) {
    this.setState({ email }, () => console.log(this.state));
  }
  onPasswordChange(password) {
    this.setState({ password }, () => console.log(this.state));
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@domain.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      
      </Card>
    );
  }
}

export default connect(null, actions)(LoginForm);