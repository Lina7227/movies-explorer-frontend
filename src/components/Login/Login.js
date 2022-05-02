import React from 'react';
import './Login.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import useValidaty from '../../hooks/useValidaty';

function Login(props) {
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
        if ((values.email && values.password) !== undefined) {
            setisInputs(true);
        } else {
            setisInputs(false);
        }
    }
    
    function handleLogin(evt) {
        evt.preventDefault();
        props.handleIsLogin({email: values.email, password: values.password});
        
    }

    return (
        <>
            {!props.islogOn && (
                <section className="login">
                    <PageForm
                        name="login"
                        title="Рады видеть!"
                        onSubmit={handleLogin}
                        isAuth={true}
                        buttonText="Войти"
                        textBottom="Ещё не зарегистрированы?"
                        onRedirectLink="/sign-up"
                        textLinkRedirect="Регистрация"
                        isFormDisabled={props.isFormDisabled}
                        buttonState={ isInputs ? isValid : false}
                    >
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
            )}
        </>
    );
}

export default Login;