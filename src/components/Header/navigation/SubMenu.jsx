import React from 'react'
import { Link } from 'react-router-dom';

import './SubMenu.css';

export const SubMenu = (props) => {
    const { links } = props;
    return (
        <div className="sub-menu">
            <div className="sub-menu__wrapper">
                {links.map(item =>
                    <Link key={item.id} to={item.link} className="sub-menu__link">{item.sectionName}</Link>
                )}
            </div>
        </div>
    );
};