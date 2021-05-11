import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Place Royale',
        description: 'Une des plus belles places de Nantes',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Nantes_-_fontaine_de_la_Place_Royale.jpg/560px-Nantes_-_fontaine_de_la_Place_Royale.jpg',
        address: 'Place Royale 44000 Nantes',
        location: {
            lat: 47.2143647,
            lng: -1.5589925
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
            lat: 40.7484405,
            lng: -73.9878584
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