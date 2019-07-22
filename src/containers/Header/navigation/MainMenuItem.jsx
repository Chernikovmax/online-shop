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

    showSubMenu = () => {
        this.setState({isMenuItemHovered: true})
    };

    hideSubMenu = () => {
        this.setState({isMenuItemHovered: false})
    };

    render(props) {
        const { route: { routeName, routeLink }, linksToSections } = this.props;
        const { isMenuItemHovered } = this.state;
        return (
            <div className="main-menu__item"
                onMouseLeave={this.hideSubMenu}
            >
                <NavLink 
                    className="main-menu__link"
                    to={routeLink} 
                    onMouseOver={this.showSubMenu}
                >
                    {routeName}
                </NavLink>
                {isMenuItemHovered && <SubMenu links={linksToSections}/>}
            </div>
        )
    }
}