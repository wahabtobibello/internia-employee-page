import React, { useReducer } from 'react';
import './App.scss';
import Chance from 'chance';
import uuid from 'uuid/v4';
import Header from './components/Header';
import Main from './components/Main';
import { AppContext } from './contexts';

const chance = new Chance();
const employees = Array.from({ length: 10 }).map((_, index) => ({
  id: uuid(),
  name: chance.name(),
  designation: chance.profession(),
  salary: `${chance.integer({ min: 1000, max: 20000 })} NOK`,
  job_type: (() => {
    const number = chance.integer({ min: 0, max: 1 });
    return number > 0 ? 'full time' : 'part time';
  })(),
  status: (() => {
    const number = chance.integer({ min: 0, max: 1 });
    return number > 0 ? 'worker' : 'test period';
  })(),
  work_duration: (() => {
    const yearOrMonth = chance.integer({ min: 0, max: 1 });
    const years = chance.integer({ min: 1, max: 5 });
    const months = chance.integer({ min: 1, max: 12 });
    return yearOrMonth > 0 ? `${years} year(s)` : `${months} month(s)`;
  })(),
  image_url: `http://lorempixel.com/100/100/people/${index + 1}`,
}));

const initialState = {
  employees,
  sort: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return {
        ...state,
        employees: state.employees.sort((a, b) => {
          if (!a[action.field] || !b[action.field]) return 0;
          if (a[action.field] > b[action.field]) {
            return action.order === 'down' ? -1 : 1;
          }
          if (a[action.field] < b[action.field]) {
            return action.order === 'down' ? 1 : -1;
          }
          return 0;
        }),
        sort: [action.field, action.order],
      };
    default:
      return state;
  }
};

function App() {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      <div className="app-container">
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
