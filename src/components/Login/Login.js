import React from 'react';
import './Login.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import useValidaty from '../../utils/useValidaty';

function Login(props) {
    const {values, errors, isValid, handleChange, resetForm} = useValidaty();

    React.useEffect(() => {
        resetForm();
    },[]);

    
    function handleLogin(evt) {
        evt.preventDefault();
        props.handleIsLogin(values);
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
                        buttonState={!props.isFormDisabled&&isValid}
                    >
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
            )}
        </>
    );
}

export default Login;