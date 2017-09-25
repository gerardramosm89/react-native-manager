import React, { Component } from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList" component={EmployeeList} title="Employees"
            />
            <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            />
          </Stack>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;