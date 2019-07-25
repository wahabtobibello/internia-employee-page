import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { AppContext } from '../../contexts';
import Button from '../Button';
import './EmployeesTable.scss';

function EmployeesTable() {
  const { employees } = useContext(AppContext);
  const listLengthRef = useRef(employees.length);
  const [allSelected, setAllSelected] = useState(0);
  const [selectedEmployees, setSelectedEmployees] = useState(
    employees.reduce((prevValue, employee) => ({
      ...prevValue,
      [employee.id]: false,
    }), {}),
  );

  useEffect(() => {
    setSelectedEmployees(prev => employees.reduce((prevValue, employee) => ({
      ...prevValue,
      [employee.id]: prev[employee.id] !== undefined ? prev[employee.id] : false,
    }), {}));
    listLengthRef.current = employees.length;
  }, [employees]);

  useEffect(() => {
    if (allSelected === 0) {
      setSelectedEmployees(prevSelectedEmployees => Object.keys(prevSelectedEmployees).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: false,
        }), {},
      ));
    } else if (allSelected === listLengthRef.current) {
      setSelectedEmployees(prevSelectedEmployees => Object.keys(prevSelectedEmployees).reduce(
        (prev, curr) => ({
          ...prev,
          [curr]: true,
        }), {},
      ));
    }
  }, [allSelected]);

  const selectAllCb = () => {
    setAllSelected(allSelected < listLengthRef.current ? listLengthRef.current : 0);
  };

  const selectOne = (id, prevSelect) => () => {
    setSelectedEmployees(selected => ({
      ...selected,
      [id]: !prevSelect,
    }));
    setAllSelected((prevAllSelected) => {
      let selectedNo = prevAllSelected;
      if (!prevSelect) {
        selectedNo += 1;
      } else {
        selectedNo -= 1;
      }
      return selectedNo;
    });
  };

  return (
    <table className="employees-table">
      <th>
        <td className="select">
          <input
            type="checkbox"
            checked={allSelected === listLengthRef.current}
            onChange={selectAllCb}
          />
        </td>
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
          <td className="select">
            <input
              type="checkbox"
              checked={selectedEmployees[employee.id]}
              onChange={selectOne(employee.id, selectedEmployees[employee.id])}
            />
          </td>
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
