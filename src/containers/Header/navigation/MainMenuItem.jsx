import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { SubMenu } from './SubMenu'


export class MainMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuItemHovered: false
        };
    }

    toggleSubMenu = () => {
        this.setState({isMenuItemHovered: !this.state.isMenuItemHovered})
    };

    render(props) {
        const { route: { routeName, routeLink }, linksToSections } = this.props;
        const { isMenuItemHovered } = this.state;
        return (
            <div className="main-menu__item">
                <NavLink 
                    className="main-menu__link"
                    to={routeLink} 
                    onMouseOver={this.toggleSubMenu}
                >
                    {routeName}
                </NavLink>
                {isMenuItemHovered && <SubMenu links={linksToSections}/>}
            </div>
        )
    }
}