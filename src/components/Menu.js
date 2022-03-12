import {NavLink} from "react-router-dom";

export function Menu() {
    return (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/create">Create Warrior</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/fight-arena">Fight Arena</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/hall-of-fame">Hall of Fame</NavLink>
            </li>
        </>
    )
}
