import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

function UserDetail(props) {
    const {id} = useParams()
    const location = useLocation()
    const [user, setUser] = useState(location.state)

    useEffect(() => {
        if (!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response)=> response.json())
                .then((data) => setUser(data))
        }
    }, [id, user])

    return (
        <div>
            <h2>UserDetail</h2>
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
            }
            <Link to={`/users/${Number(id) - 1}`}>Previous User - </Link>
            <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
        </div>
    );
}

export default UserDetail;