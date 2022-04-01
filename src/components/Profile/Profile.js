import './Profile.css';
import PageForm from '../PageForm/PageForm';
import FormName from '../FormName/FormName';
import FormEmail from '../FormEmail/FormEmail';

function Profile(props) {
    return (
        <section className="profile">
            <PageForm
                name="profile"
                title="Привет, Виталий!"
                onSubmit={props.onSubmit}
                logOnIn={false}
                buttonText="Редактировать"
                redirectClick={props.onSignOut}
                onRedirectLink="/"
                textLinkRedirect="Выйти из аккаунта"
            >
                <FormName />
                <FormEmail />

            </PageForm>
        </section>
    );
}

export default Profile;