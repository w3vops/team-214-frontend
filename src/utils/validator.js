export const errorObject = {
    errorName: '',
    errorMessage: '',
};

export const validateName = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, name)) {
        return false;
    } else if (notOnlyLetters(value, name, error)) {
        return false;
    }
    return true;
};
export const validateMail = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, name)) {
        return false;
    } else if (!containsCharacters(value, 5, error, name)) {
        return false;
    }
    return true;
};
export const validateContact = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, name)) {
        return false;
    } else if (!containsCharacters(value, 6, error, name)) {
        return false;
    }
    return true;
};
export const validateAddress = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    return !isEmpty(value, error, name);
};

// UTILS
const isEmpty = (value, error, name) => {
    if (value.trim() === '') {
        setInvalid(error, name, 'Please do not leave empty');
        return true;
    } else {
        setValid(error, name);
        return false;
    }
};

const setValid = (error, name) => {
    const iconElement = document.querySelector(`#${name}`);
    errorObject.errorName = error;
    errorObject.errorMessage = '';
    iconElement.classList.remove("fa-exclamation-circle");
    iconElement.classList.add("fa-check-circle");
};
const setInvalid = (error, name, message) => {
    const iconElement = document.querySelector(`#${name}`);
    errorObject.errorName = error;
    errorObject.errorMessage = message;
    iconElement.classList.remove("fa-check-circle");
    iconElement.classList.add("fa-exclamation-circle");
};
const containsCharacters = (value, code, error, name) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter", error, name);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter and one number", error, name);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error, name);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error, name);
        case 5:
            // for emails
            // eslint-disable-next-line no-useless-escape
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(value, regEx, "Invalid Email", error, name));
        case 6:
            // check if only numbers
            // eslint-disable-next-line no-useless-escape
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
            return matchWithRegEx(value, regEx, "Please enter a valid phone number", error, name);
        default:
            return false
    }
};

const matchWithRegEx = (value, regEx, message, error, name) => {
    if (value.toLowerCase().match(regEx)) {
        setValid(error, name);
        return true;
    } else {
        setInvalid(error, name, message);
        return false;
    }
};
const notOnlyLetters = (value, name, error) => {
    if (!/^[a-zA-Z ]+$/.test(value)) {
        setInvalid(error, name, 'Please enter only letters');
        return true;
    } else {
        setValid(error, name);
        return false;
    }
};


// MAIN VALIDATORS

export const validateService = (event) => {
    return !!(validateName(undefined, event, 'fname') &&
        validateName(undefined, event, 'lname') &&
        validateMail(undefined, event, 'mail') &&
        validateContact(undefined, event, 'cont') &&
        validateAddress(undefined, event, 'address') &&
        validateName(undefined, event, 'city'));
};

export const validateEnquiry = (event) => {
    return !!(validateName(undefined, event, 'eFName') &&
        validateName(undefined, event, 'eLName') &&
        validateMail(undefined, event, 'eMail') &&
        validateAddress(undefined, event, 'eMessage'))
};