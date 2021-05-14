import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './Auth.css';


const Auth = () => {
  const [formState, inputHandler] = useForm(
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

    const authSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    }

return (
  <Card className="authentication">
    <h2>Authentification</h2>
    <hr />
    <form onSubmit= {authSubmitHandler}>
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
            VALIDER
            </Button>
    </form>
    </Card>
);

};

export default Auth;