import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  
  onRowPress(name) {
    const employee = this.props.employee.item;
    Actions.employeeEdit({ employee });
  }

  render() {
    const { name, uid } = this.props.employee.item;
    const { titleStyle } = styles;
    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this, name)}>
        <View>
          <CardSection>
            <Text key={uid} style={titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
export default ListItem;