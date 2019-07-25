import React from 'react';
import './App.scss';
import Chance from 'chance';
import uuid from 'uuid/v4';
import Header from './components/Header';
import Main from './components/Main';

export const AppContext = React.createContext();
const chance = new Chance();
const employees = Array.from({ length: 10 }).map(() => ({
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
}));
console.log(employees);

function App() {
  return (
    <AppContext.Provider value={{ employees }}>
      <div className="app-container">
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
