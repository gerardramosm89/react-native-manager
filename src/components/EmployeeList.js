import React, { Component } from 'react';
import { ListView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);    
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    console.log('... creating Data Source ... \n employees found is: ', employees);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.employees);
  }
  renderRow(employee) {
    return <ListItem employee={employee} />
  }
  renderArray() {
    return this.props.employees.map(employee => {
      console.log('employee from renderArray is: ', employee);
      return <ListItem key={employee.uid} employee={employee} />
    });
  }
  renderFlatList() {
    return(
      <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee} />}
      />
    );
  }
  render() {
    return(
      <View>
        {this.renderFlatList()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { employees } = state.employeeForm;
  const mappedEmployees = _.map(employees, (val, uid) => {
    return { ...val, uid }
  })
  return {
    employees: mappedEmployees
  }
}
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);