import React from 'react';
import './Sidebar.scss';
import Chance from 'chance';
import Button from '../Button';
import interniaIcon from '../../assets/images/icon_internia.png';

const colors = ['#EB5757', '#57CCF2', '#3480EC', '#70CF98', '#63B7A6', '#F45310', '#1522A0', '#144168', '#50D3AE'];
const chance = new Chance();
const selectColor = () => {
  const pos = chance.integer({ min: 0, max: colors.length });
  return colors[pos];
};

function Sidebar() {
  return (
    <aside className="side-bar">
      <Button>
        <span className="logo">
          <img
            className="-internia-icon"
            src={interniaIcon}
            alt="internia icon"
          />
        </span>
        <span className="name">All Employees</span>
      </Button>
      <div className="section">
        <div className="title">Project</div>
        <ul className="options">
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>AS</span>
              <span className="name">Arena Sports</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>DS</span>
              <span className="name">DSV</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>SM</span>
              <span className="name">Seafood Mail</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>FS</span>
              <span className="name">FireStar</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>ZB</span>
              <span className="name">Zeta Bank</span>
            </Button>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="title">Status</div>
        <ul className="options">
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>FT</span>
              <span className="name">Full time</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo" style={{ background: selectColor() }}>PT</span>
              <span className="name">Part time</span>
            </Button>
          </li>
        </ul>
      </div>
      <Button className="-calltoaction" primary accent>add project</Button>
    </aside>
  );
}

export default Sidebar;
