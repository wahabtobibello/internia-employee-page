import React from 'react';
import Button from '../Button';
import Sidebar from '../Sidebar';
import './Main.scss';
import EmployeesTable from '../EmployeesTable';

function Main() {
  return (
    <main className="app-content">
      <h1>employee</h1>
      <Button primary>add employee</Button>
      <Sidebar />
      <EmployeesTable />
    </main>
  );
}

export default Main;
