import React from 'react';
import {Link, useNavigate} from "react-router-dom";
function Menu(props) {
    const navigate = useNavigate()
    return (
        <div>
            <ul className={"menu"}>
                <li onClick={() => navigate(-1)}>
                    Back
                </li>
                <li>
                    <a href="#/" onClick={() => navigate(-1)}>Back</a>
                </li>
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
                <li>
                    <Link to={"auth"}>
                        Login
                    </Link>
                </li>
                <li onClick={() => navigate("contact")}>
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Menu;