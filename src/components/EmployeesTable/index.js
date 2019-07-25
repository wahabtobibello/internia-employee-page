import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { AppContext } from '../../contexts';
import Button from '../Button';
import './EmployeesTable.scss';

function EmployeesTable() {
  const [{ employees, sort }, dispatch] = useContext(AppContext);
  const [field, order] = sort || [];
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

  const sortBy = (_field, _order) => () => {
    dispatch({ type: 'SORT_BY', field: _field, order: _order });
  };

  return (
    <table className="employees-table">
      <tbody>
        <tr>
          <th className="select">
            <input
              type="checkbox"
              checked={allSelected === listLengthRef.current}
              onChange={selectAllCb}
            />
          </th>
          <th className="employee" onClick={sortBy('name', field === 'name' && order === 'up' ? 'down' : 'up')}>
            <span className="name">Employee</span>
            <span className={`order-icon${field === 'name' && order === 'down' ? ' -down' : ' -up'}${field === 'name' ? ' -active' : ''}`}>
              <IoIosArrowRoundUp
                className="order-icon -up"
              />
            </span>
          </th>
          <th className="salary" onClick={sortBy('salary', field === 'salary' && order === 'up' ? 'down' : 'up')}>
            <span className="name">Salary</span>
            <span className={`order-icon${field === 'salary' && order === 'down' ? ' -down' : ' -up'}${field === 'salary' ? ' -active' : ''}`}>
              <IoIosArrowRoundUp
                className="order-icon -up"
              />
            </span>
          </th>
          <th className="status" onClick={sortBy('status', field === 'status' && order === 'up' ? 'down' : 'up')}>
            <span className="name">Status</span>
            <span className={`order-icon${field === 'status' && order === 'down' ? ' -down' : ' -up'}${field === 'status' ? ' -active' : ''}`}>
              <IoIosArrowRoundUp
                className="order-icon -up"
              />
            </span>
          </th>
          <th className="manage">
            <span className="name">Manage</span>
          </th>
        </tr>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td className="select">
              <input
                type="checkbox"
                checked={selectedEmployees[employee.id]}
                onChange={selectOne(employee.id, selectedEmployees[employee.id])}
              />
            </td>
            <td className="employee">
              <img src={employee.image_url} alt="Employee" />
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
      </tbody>
    </table>
  );
}

export default EmployeesTable;
