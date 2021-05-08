import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Marc DUO',
            image: 'https://pic.onlinewebfonts.com/svg/img_87237.png',
            places: 3
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;