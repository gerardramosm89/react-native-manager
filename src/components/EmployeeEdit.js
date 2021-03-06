import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }
  onDecline() {
    this.setState({
      showModal: false
    });
  }
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

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete?
        </Confirm>
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
export default connect(mapStateToProps, { employeeDelete, employeeUpdate, employeeSave })(EmployeeEdit);