import React from 'react';

function usePopupError() {
    const [isError, setIsError] = React.useState({
        textError: "", isActive: false
    });

    function handleErrorVisible(error) {
        const errorNew = error;
        setFieldsError(errorNew.message, true);
        setTimeout(() => setFieldsError(errorNew.message, false), 4000);
    }
    
    function setFieldsError(message, active) {
        setIsError({textError: message, isActive: active});
    }

    return {
        isError,
        handleErrorVisible,
    }
}

export default usePopupError;
