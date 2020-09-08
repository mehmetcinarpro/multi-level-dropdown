import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

function App() {
  return (
    <div className="app">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <div className="app__container">
        <DropdownMenu></DropdownMenu>
      </div>
    </div>
  );
}

export default App;
