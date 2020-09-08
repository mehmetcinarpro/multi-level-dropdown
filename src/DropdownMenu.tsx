import React, { useState, useRef, useEffect } from 'react';
import DropdownItem from './DropdownItem';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<number>(0);
    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild?.offsetHeight ?? 0)
    }, [])

    const calcHeight = (el: HTMLElement) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>

                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                        setActiveMenu={setActiveMenu}>
                        Settings
                     </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                        setActiveMenu={setActiveMenu}>
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>



            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>

        </div>
    );
};

export default DropdownMenu;
