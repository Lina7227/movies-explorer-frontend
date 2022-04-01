import './Login.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';

function Login(props) {
    return (
        <section className="login">
            <PageForm
                name="login"
                title="Рады видеть!"
                onSubmit={props.onSubmit}
                logOnIn={true}
                buttonText="Войти"
                textBottom="Ещё не зарегистрированы?"
                onRedirectLink="/sign-up"
                textLinkRedirect="Регистрация"
            >
                <FormEmail />
                <FormPassword />

            </PageForm>
        </section>
    );
}

export default Login;