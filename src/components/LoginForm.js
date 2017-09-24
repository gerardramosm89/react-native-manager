import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { loginUser } from '../actions/';

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
  onButtonPress() {
    this.props.loginUser({ email: this.state.email, password: this.state.password});    
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      
        <CardSection>
          <Button onPress={() => console.log('this.props of loginForm is: ', this.props)}>
            Console Log Props
          </Button>
        </CardSection>

      </Card>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps, { loginUser })(LoginForm);