import React from 'react';
import './Profile.css';
import PageForm from '../PageForm/PageForm';
import FormName from '../FormName/FormName';
import FormEmail from '../FormEmail/FormEmail';
import useValidaty from '../../hooks/useValidaty';
import CurrentUserContext from '../../contexts/CurrentUserContext'

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isInputs, setisInputs] = React.useState(false);
    const {values, errors, isValid, handleChange, resetForm} = useValidaty();

    React.useEffect(() => {
        resetForm(currentUser);
    },// eslint-disable-next-line
    []);

    React.useEffect(() => {
        checkInputs();
    },// eslint-disable-next-line
    [values, currentUser]
    );

    function checkInputs() {
        const { name, email } = currentUser;
        if (!values.name && !values.email) return;
        if (name === values.name && email === values.email) {
            setisInputs(true);
        } else {
            setisInputs(false);
        }
    }

    function handleProfile(evt) {
        evt.preventDefault();
        props.onUpdateProfile({name: values.name, email: values.email});
    }

    function handleSignOut(evt) {
        evt.preventDefault();
        props.onSignOut();
    }
    

    return (
        <section className="profile">
            <PageForm
                name="profile"
                title={`Привет, ${currentUser.name}`}
                onSubmit={handleProfile}
                isAuth={false}
                buttonText="Редактировать"
                redirectClick={handleSignOut}
                onRedirectLink="/"
                textLinkRedirect="Выйти из аккаунта"
                isFormDisabled={props.isFormDisabled}
                buttonState={isInputs ? false : isValid}
                isInputs={isInputs}
            >
                <FormName
                    values={values}
                    currentUser={currentUser}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={props.isAuth}
                />
                <FormEmail
                    values={values}
                    currentUser={currentUser}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={props.isAuth}
                />

            </PageForm>
        </section>
    );
}

export default Profile;