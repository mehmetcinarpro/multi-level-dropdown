import React from 'react';

interface DropdownItemProps {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    goToMenu?: string;
    setActiveMenu?: (menuItem: string) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
    leftIcon,
    rightIcon,
    goToMenu,
    setActiveMenu,
    children
}) => {
    return (
        <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}>
            <span className="icon-button">{leftIcon}</span>
            {children}
            <span className="icon-right">{rightIcon}</span>
        </a>
    );
};

export default DropdownItem;
