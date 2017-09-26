import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate } from '../actions';
import _ from 'lodash';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {

  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
          Save changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);