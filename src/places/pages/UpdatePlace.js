import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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
];

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if(identifiedPlace) {
            setFormData(
                {
                    title: {
                        value: identifiedPlace.title,
                        isValid: true
                    },
                    description: {
                        value: identifiedPlace.description,
                        isValid: true
                    }
                },
                true
            );
        }

        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                <h2>Impossible d'identifier le lieu </h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Chargement...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Merci d'entrer un titre valide"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Merci d'entrer une description valide (5 charactères minimum)"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                METTRE A JOUR LE LIEU
            </Button>
        </form>
    );

};

export default UpdatePlace;
