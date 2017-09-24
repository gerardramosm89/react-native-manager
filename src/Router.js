import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

// const RouterComponent = () => {
//   return(
//     <Router>
//       <Scene
//       key="login"
//       component={LoginForm}
//       title="Please Login"
//       />
//     </Router>
//   );
// };

class RouterComponent extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene
          key="login"
          title="Please login"
          component={LoginForm}
          />
          <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;