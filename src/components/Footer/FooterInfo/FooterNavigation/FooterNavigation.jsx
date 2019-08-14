import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterNavigation.css";

export function FooterNavigation() {
  return (
    <nav className="footer__navigation">
      <ul className="footer__navigation-menu">
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            About Us
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Track Orders
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Returns
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Jobs
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Shipping
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Blog
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Partners
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Bloggers
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Support
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Terms of Use
          </NavLink>
        </li>
        <li className="footer__navigation-menu-item">
          <NavLink className="navigation-link" to={"#"}>
            Press
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
