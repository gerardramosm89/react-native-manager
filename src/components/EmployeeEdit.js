import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeSave } from '../actions';
import _ from 'lodash';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    console.log(name, phone, shift);
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
  const { name, phone, shift } = state.employeeForm;
  return {
    name, phone, shift
  }
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);