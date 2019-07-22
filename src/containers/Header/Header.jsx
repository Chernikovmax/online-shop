import React, { Component } from 'react';
import { Navigation } from './navigation';
import { NavLink } from 'react-router-dom';
import {
    LogoIcon, SearchIcon, ProfileIcon, ShoppingBagIcon
} from '../../components/icons'
import { HOME } from '../../routes';


import './Header.css';

export class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <div className="header-top">
                    <NavLink to={HOME}>
                        <div className="logo-wrapper">
                            <LogoIcon />
                        </div>
                    </NavLink>
                    <div className="header-top__input-wrapper">
                        <input 
                            type="text" 
                            className="header-top__search" 
                            placeholder="Search on divisima..."
                            maxLength="80"
                        />
                        <div className="header-top__search-icon">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="profile">
                        <ProfileIcon/>
                        <NavLink to="/login" className="profile__link">Sign in</NavLink>
                        <span>or</span>
                        <NavLink to="/register" className="profile__link">Create Account</NavLink>
                        
                    </div>
                    <div className="shopping-cart">
                        <div className="shopping-cart__counter">0</div>
                        <NavLink to="/login" className="shopping-cart__link">
                            <ShoppingBagIcon />
                            Shopping Cart
                        </NavLink>                        
                    </div>

                </div>
                <Navigation/>
            </div>
        );
    }
}