import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.employees = [
      'Employee1',
      'Employee2',
      'Employee3',
      'Employee4',
      'Employee5',
      'Employee6'
    ]
  }
  renderEmployees() {
    return this.employees.map(employee => {
      return <Text key={employee}>{employee}</Text>
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