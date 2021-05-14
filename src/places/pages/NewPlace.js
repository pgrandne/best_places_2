import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm} from '../../shared/hooks/form-hook';
import './PlaceForm.css';



const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }

        }, false
        );

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
    };

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id='title'
                element="input"
                type="text"
                label="Titre"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Merci d'entrer un titre valide"
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Merci d'entrer une description valide (5 charactères minimum)"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                label="Adresse"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Merci d'entrer une adresse valide"
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
                AJOUTER LE LIEU
                </Button>
        </form>
    );

};

export default NewPlace;