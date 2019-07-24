import React from 'react';
import './Sidebar.scss';
import Button from '../Button';
import interniaIcon from '../../assets/images/icon_internia.png';

function Sidebar() {
  return (
    <aside className="side-bar">
      <Button>
          <span className="logo"><img className="-internia-icon" src={interniaIcon}
                                      alt="internia icon"/></span>
        <span className="name">All Employees</span>
      </Button>
      <div className="section">
        <div className="title">Project</div>
        <ul className="options">
          <li className="item">
            <Button>
              <span className="logo">AS</span>
              <span className="name">Arena Sports</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo">DS</span>
              <span className="name">DSV</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo">SM</span>
              <span className="name">Seafood Mail</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo">FS</span>
              <span className="name">FireStar</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo">ZB</span>
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
              <span className="logo">FT</span>
              <span className="name">Full time</span>
            </Button>
          </li>
          <li className="item">
            <Button>
              <span className="logo">PT</span>
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
