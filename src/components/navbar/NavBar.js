import React from 'react';
import "./style.css";

const NavBar = props => {
    return (
        <div id="nav">
            <ul id="navBar">
                <li className="navItem">{props.text}</li>
                <li className="navItem">{props.userscore}</li>
            </ul>
        </div>
    )
}


export default NavBar