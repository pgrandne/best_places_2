import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }

        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

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
                AJOUTER PLACE
                </Button>
        </form>
    );

};

export default NewPlace;