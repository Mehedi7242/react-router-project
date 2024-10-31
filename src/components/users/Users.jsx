import React from 'react';
import { useLoaderData } from 'react-router-dom';

import User from '../user/User';




const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Users : {users.length}</h2>

            <div>
                {
                    users.map(user=> <User key={user.id} user= {user}></User>)
                }
            </div>

        </div>

    );
};

export default Users;