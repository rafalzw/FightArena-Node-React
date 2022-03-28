import {NavLink} from "react-router-dom";

export const Menu = () => (
    <>
        <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/create-warrior">Create Warrior</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/fight-arena">Fight Arena</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/hall-of-fame">Hall of Fame</NavLink>
        </li>
    </>
);
