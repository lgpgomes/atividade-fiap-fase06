/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        [isActive ? styles.activeMenuItem : styles.menuItem].join(" ")
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
