import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        <Link to={`${user.id}`} state={user}>{user.name}</Link>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Users;