import './Register.css';
import PageForm from '../PageForm/PageForm';
import FormEmail from '../FormEmail/FormEmail';
import FormPassword from '../FormPassword/FormPassword';
import FormName from '../FormName/FormName';

function Register(props) {
    return (
        <section className="register">
            <PageForm
                name="register"
                title="Добро пожаловать!"
                onSubmit={props.onSubmit}
                logOnIn={true}
                buttonText="Зарегистрироваться"
                textBottom="Уже зарегистрированы?"
                onRedirectLink="/sign-in"
                textLinkRedirect="Войти"
            >
                <FormName logOnIn={true} />
                <FormEmail logOnIn={true} />
                <FormPassword logOnIn={true} />

            </PageForm>
        </section>
    );
}

export default Register;