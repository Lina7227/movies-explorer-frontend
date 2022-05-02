import React from 'react';
import './Register.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import FormName from '../FormName/FormName';
import useValidaty from '../../hooks/useValidaty';

function Register(props) {
    const {values, errors, isValid, handleChange, resetForm} = useValidaty();
    const [isInputs, setisInputs] = React.useState(false);


    React.useEffect(() => {
        resetForm();
    },// eslint-disable-next-line
    []);

    React.useEffect(() => {
        checkInputs();
    },// eslint-disable-next-line
    [values]);

    function checkInputs () {
        if ((values.name && values.email && values.password) !== undefined) {
            setisInputs(true);
        } else {
            setisInputs(false);
        }
    }

    function handleRegister(evt) {
        evt.preventDefault();
        props.handleIsRegister({name: values.name, email: values.email, password: values.password});
        props.setIsAuth(true);
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
                buttonState={ isInputs ? isValid : false}
            >
                <FormName
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={props.isAuth}
                />
                <FormEmail
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={props.isAuth}
                />
                <FormPassword
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={props.isAuth}
                />

            </PageForm>
        </section>
    );
}

export default Register;