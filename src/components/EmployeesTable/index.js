import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import Button from '../Button';
import './EmployeesTable.scss';
import { IoIosArrowRoundUp } from 'react-icons/io';

function EmployeesTable() {
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
      <tr>
        <td className="select"><input type="checkbox" /></td>
        <td className="employee">
          <img src="http://lorempixel.com/100/100/people/1" alt="Employee" />
          <span className="name">Foo Bar</span>
          <span className="designation">Software Engineer</span>
        </td>
        <td className="salary">
          <span className="salary">3200 NOK</span>
          <span className="type">full time</span>
        </td>
        <td className="status">
          <span className="status">test period</span>
          <span className="period">2 months</span>
        </td>
        <td className="manage">
          <Button icon><MdModeEdit /></Button>
          <Button icon  className="-delete"><MdDelete /></Button>
        </td>
      </tr>
      <tr>
        <td className="select"><input type="checkbox" /></td>
        <td className="employee">
          <img src="http://lorempixel.com/100/100/people/2" alt="Employee" />
          <span className="name">Foo Bar</span>
          <span className="designation">Software Engineer</span>
        </td>
        <td className="salary">
          <span className="salary">3200 NOK</span>
          <span className="type">full time</span>
        </td>
        <td className="status">
          <span className="status">test period</span>
          <span className="period">2 months</span>
        </td>
        <td className="manage">
          <Button icon><MdModeEdit /></Button>
          <Button icon  className="-delete"><MdDelete /></Button>
        </td>
      </tr>
      <tr>
        <td className="select"><input type="checkbox" /></td>
        <td className="employee">
          <img src="http://lorempixel.com/100/100/people/3" alt="Employee" />
          <span className="name">Foo Bar</span>
          <span className="designation">Software Engineer</span>
        </td>
        <td className="salary">
          <span className="salary">3200 NOK</span>
          <span className="type">full time</span>
        </td>
        <td className="status">
          <span className="status">test period</span>
          <span className="period">2 months</span>
        </td>
        <td className="manage">
          <Button icon><MdModeEdit /></Button>
          <Button icon className="-delete"><MdDelete /></Button>
        </td>
      </tr>
    </table>
  );
}

export default EmployeesTable;
