import './Register.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import FormName from '../FormName/FormName';

function Register(props) {
    function handleRegister(evt) {
        evt.preventDefault();
        props.handleIsRegister();
    }

    return (
        <section className="register">
            <PageForm
                name="register"
                title="Добро пожаловать!"
                onSubmit={props.handleRegister}
                logOnIn={true}
                buttonText="Зарегистрироваться"
                textBottom="Уже зарегистрированы?"
                onRedirectLink="/sign-in"
                textLinkRedirect="Войти"
                isFormDisabled={props.isFormDisabled}
            >
                <FormName />
                <FormEmail />
                <FormPassword />

            </PageForm>
        </section>
    );
}

export default Register;