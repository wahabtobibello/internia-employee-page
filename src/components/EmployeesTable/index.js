import React, { useContext } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { AppContext } from '../../App';
import Button from '../Button';
import './EmployeesTable.scss';
import { IoIosArrowRoundUp } from 'react-icons/io';

function EmployeesTable() {
  const { employees } = useContext(AppContext);
  return (
    <table className="employees-table">
      <th>
        <td className="select"><input type="checkbox" /></td>
        <td className="employee">
          <span className="name">Employee</span>
          <span className="order-icon -up"><IoIosArrowRoundUp className="order-icon -up" /></span>
        </td>
        <td className="salary">
          <span className="name">Salary</span>
          <span className="order-icon -up"><IoIosArrowRoundUp className="order-icon -up" /></span>
        </td>
        <td className="status">
          <span className="name">Status</span>
          <span className="order-icon -up"><IoIosArrowRoundUp className="order-icon -up" /></span>
        </td>
        <td className="manage">
          <span className="name">Manage</span>
        </td>
      </th>
      {employees.map((employee, index) => (
        <tr key={employee.id}>
          <td className="select"><input type="checkbox" /></td>
          <td className="employee">
            <img src={`http://lorempixel.com/100/100/people/${index + 1}`} alt="Employee" />
            <span className="name">{employee.name}</span>
            <span className="designation">{employee.designation}</span>
          </td>
          <td className="salary">
            <span className="salary">{employee.salary}</span>
            <span className="type">{employee.job_type}</span>
          </td>
          <td className="status">
            <span className="status">{employee.status}</span>
            <span className="period">{employee.work_duration}</span>
          </td>
          <td className="manage">
            <Button icon><MdModeEdit /></Button>
            <Button icon className="-delete"><MdDelete /></Button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default EmployeesTable;
