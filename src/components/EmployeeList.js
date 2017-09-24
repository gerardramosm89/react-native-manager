import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.employees = [
      'Employee',
      'Employee',
      'Employee',
      'Employee',
      'Employee',
      'Employee'
    ]
  }
  renderEmployees() {
    return this.employees.map(employee => {
      return <Text>{employee}</Text>
    });
  }
  render() {
    return(
      <View>
        {this.renderEmployees()}
      </View>
    );
  }
}