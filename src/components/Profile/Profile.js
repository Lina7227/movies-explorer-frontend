import React from 'react';
import './Profile.css';
import PageForm from '../PageForm/PageForm';
import FormName from '../FormName/FormName';
import FormEmail from '../FormEmail/FormEmail';
import useValidaty from '../../utils/useValidaty';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import PopupAptly from '../PopupAptly/PopupAptly';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isInputs, setisInputs] = React.useState(false);
    const {values, errors, isValid, handleChange, resetForm} = useValidaty();

    React.useEffect(() => {
        resetForm();
    },[]);

    React.useEffect(() => {
        checkInputs();
    },// eslint-disable-next-line
    [values, currentUser]
    );

    function checkInputs() {
        const { name, email } = currentUser;
        if (!values.name && !values.email) return;
        if (name === values.name.trim() && email === values.email.trim()) {
            setisInputs(true);
        } else {
            setisInputs(false);
        }
    }

    function handleProfile(evt) {
        evt.preventDefault();
        props.onUpdeteProfile(values);
    }

    function handleSignOut(evt) {
        evt.preventDefault();
        props.onSignOut();
      }
    

    return (
        <section className="profile">
            <PageForm
                name="profile"
                title="Привет, Елена!"
                onSubmit={handleProfile}
                isAuth={false}
                buttonText="Редактировать"
                redirectClick={handleSignOut}
                onRedirectLink="/"
                textLinkRedirect="Выйти из аккаунта"
                isFormDisabled={props.isFormDisabled}
                buttonState={isInputs ? false : isValid}
            >
                <FormName
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={false}
                />
                <FormEmail
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isAuth={false}
                />
                {props.isAptly && <PopupAptly isAptly={props.isAptly} />}

            </PageForm>
        </section>
    );
}

export default Profile;