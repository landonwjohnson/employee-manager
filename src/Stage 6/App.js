import React, { Component } from 'react';

import Employee from './models/Employee';

import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [ new Employee(0, 'Cahlan Sharp', 4824931093, 'Co-Founder, CEO', 'Provo, Utah'), new Employee(1, 'Tyler Richards', 3094812387, 'Co-Founder, VP', 'Provo, Utah'), new Employee(2, 'Mark Hanson', 7459831843, 'VP of Ops', 'Provo, Utah'), new Employee(3, 'Meaghan Barber', 3841238745, 'Employer Relations', 'Provo, Utah'), new Employee(4, 'Niall Cummins', 4873459812, 'Software Developer', 'Provo, Utah'), new Employee(5, 'Cameron Kinney', 6571249801, 'Marketing Manager', 'Provo, Utah'), new Employee(6, 'Brandon Hassler', 5740923478, 'Director of Marketing', 'Provo, Utah'), new Employee(7, 'Brett Shaffer', 8727813498, 'Director of Finance', 'Provo, Utah'), new Employee(8, 'Cory Johnson', 8734567810, 'Curriculum Designer', 'Provo, Utah'), new Employee(9, 'James Lemire', 8749823456, 'Curriculum Developer', 'Provo, Utah') ],
      selectedEmployee: null
    };
    this.selectEmployee = this.selectEmployee.bind( this );
    this.refresh = this.refresh.bind( this );
  }

  // selectEmployee
  selectEmployee(employee){
    this.setState({ selectedEmployee: employee });
  }
  // refresh
  refresh() {
    this.setState(this.state);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selectEmployee={ this.selectEmployee } />
          <EmployeeEditor selected={this.state.selectedEmployee} refreshList={ this.refresh } />
        </div>
      </div>
    )
  }
}

export default App;
