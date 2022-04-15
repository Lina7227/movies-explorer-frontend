import React from 'react';
import './Register.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import FormName from '../FormName/FormName';
import useValidaty from '../../utils/useValidaty';

function Register(props) {
    const {values, errors, isValid, handleChange, resetForm} = useValidaty();

    React.useEffect(() => {
        resetForm();
    },[]);

    function handleRegister(evt) {
        evt.preventDefault();
        props.handleIsRegister({name: values.name, email: values.email, password: values.password});
    }

    return (
        <section className="register">
            <PageForm
                name="register"
                title="Добро пожаловать!"
                onSubmit={handleRegister}
                isAuth={true}
                buttonText="Зарегистрироваться"
                textBottom="Уже зарегистрированы?"
                onRedirectLink="/sign-in"
                textLinkRedirect="Войти"
                isFormDisabled={props.isFormDisabled}
                buttonState={!props.isFormDisabled&&isValid}
            >
                <FormName
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={true}
                />
                <FormEmail
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={true}
                />
                <FormPassword
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={true}
                />

            </PageForm>
        </section>
    );
}

export default Register;