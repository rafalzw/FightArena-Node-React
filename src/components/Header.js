import logo from '../images/shield.png';
import {Menu} from "./Menu";

export function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark mb-5 px-5" style={{background: 'rgba(255,255,255,.1)'}}>
                <a className="navbar-brand" href="/">
                    <img src={logo} height="50px" width="50px" className="img-fluid" alt="fight arena"/>
                </a>
                    <ul className="navbar-nav">
                        <Menu />
                    </ul>
            </nav>
        </>
    )
}
