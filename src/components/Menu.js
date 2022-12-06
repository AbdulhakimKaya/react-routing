import React from 'react';
import {Link} from "react-router-dom";
function Menu(props) {
    return (
        <div>
            <ul className={"menu"}>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"users"}>
                        Users
                    </Link>
                </li>
                <li>
                    <Link to={"contact"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;