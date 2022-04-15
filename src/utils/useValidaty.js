import React from 'react';

function useValidaty() {
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const charactersName = /^[a-zA-Zа-яА-ЯёЁ\- ]+$/;
    const charactersPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z$%#^].{6,}/;
    const charactersEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const errorMessages = {
        name: "Недопустимый символ. Попробуйте еще раз.",
        email: "Некорректный адрес электронной почты.",
        password:
          "Пароль не соответствует требованиям. Попробуйте еще раз.",
    };

    React.useEffect(() => {
        setIsValid(!Object.values(errors).some((err) => err.length !== 0));
    }, [errors]);

    function getErrorsMessage({name, value}) {
        if (name === "name" && value.length >= 2 && !charactersName.test(value)) {
            setErrors({...errors, [name]: errorMessages[name]});
        } else if (name === "email" && !charactersEmail.test(value)) {
            setErrors({...errors, [name]: errorMessages[name]})
        } else if (name === "password" && value.length >= 6 && !charactersPassword.test(value)) {
            setErrors({...errors, [name]: errorMessages[name]})
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: evt.target.validationMessage });
        getErrorsMessage({ name, value });
    }

    const resetForm = React.useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );
    
    return {
        values,
        errors,
        isValid,
        setValues,
        setErrors,
        setIsValid,
        handleChange,
        resetForm
    }
}

export default useValidaty;