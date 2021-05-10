import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/73.jpg',
        address: '20W New York',
        location: {
            lat: 40.7,
            long: -73.9
        },
        creator: 'u1'
    },

    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/73.jpg',
        address: '20W New York',
        location: {
            lat: 40.7,
            long: -73.9
        },
        creator: 'u2'
    }
]

const UsersPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UsersPlaces;