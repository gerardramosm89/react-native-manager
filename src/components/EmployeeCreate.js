import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeUpdate({ prop: 'name', value: '' });
    this.props.employeeUpdate({ prop: 'phone', value: '' });
    this.props.employeeUpdate({ prop: 'shift', value: '' });    
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });

  }
  render() {
    console.log("this.props from employeeCreate is: ", this.props);
    return(
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {
    name,
    phone,
    shift
  }
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);