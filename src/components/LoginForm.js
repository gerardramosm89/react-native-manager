import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { View, Text } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  onEmailChange(email) {
    this.setState({ email });
  }
  onPasswordChange(password) {
    this.setState({ password });
  }
  onButtonPress() {
    this.props.loginUser({ email: this.state.email, password: this.state.password});
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return(
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }
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
        <Text>
        {this.props.authError}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
function mapStateToProps({ auth }) {
  const { user, authError, loading } = auth;
  return {
    user: user,
    authError: authError,
    loading: loading
  }
}
export default connect(mapStateToProps, { loginUser })(LoginForm);