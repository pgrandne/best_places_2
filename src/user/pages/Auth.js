import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext} from '../../shared/context/auth-context';

import './Auth.css';


const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }, false
    );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            },
                formState.inputs.email.isValid && formState.inputs.passworid.isValid
            );
        }
        else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode)
    };

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    }

    return (
        <Card className="authentication">
            <h2>Authentification</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Nom"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Merci d'entrer un nom"
                        onInput={inputHandler}
                    />
                )}
                <Input
                    id='email'
                    element="input"
                    type="email"
                    label="Adresse email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Merci d'entrer une adresse email"
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Mot de passe"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Merci d'entrer un mot de passe valide (5 charactères minimum)"
                    onInput={inputHandler}
                />
                <Button type='submit' disabled={!formState.isValid}>
                    {isLoginMode ? 'SE CONNECTER' : 'CREER UN COMPTE'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                BASCULER VERS {isLoginMode ? 'CREER UN COMPTE' : 'SE CONNECTER'}
            </Button>
        </Card>
    );

};

export default Auth;