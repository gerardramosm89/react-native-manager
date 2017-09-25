import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class RouterComponent extends Component {
  render() {
    return(
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" initial>
            <Scene key="login" title="Please login" component={LoginForm} />
          </Scene>
          <Stack key="main">
            <Scene 
            onRight={() => console.log('clicking the right!')}
            rightTitle="Add"
            key="employeeList" component={EmployeeList} title="Employees" />
          </Stack>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;