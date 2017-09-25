import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        
      </View>
    );
  }
}

const mapStateToProps = () => {

};

export default connect(mapStateToProps, null)(EmployeeForm);