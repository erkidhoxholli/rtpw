import {defineMessages} from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'containers.login.title',
        defaultMessage: 'Login',
    },
    formNameLabel: {
        id: 'containers.login.formNameLabel',
        defaultMessage: 'Name',
    },
    formEmailLabel: {
        id: 'containers.login.formEmailLabel',
        defaultMessage: 'Email',
    },
    formPasswordLabel: {
        id: 'containers.login.formPasswordLabel',
        defaultMessage: 'Password',
    },
    formCreateButton: {
        id: 'containers.login.formCreateButton',
        defaultMessage: 'Login',
    },
    formValidationEmailRequired: {
        id: 'containers.login.formValidationEmailRequired',
        defaultMessage: 'Email is required',
    },
    formValidationEmailInvalid: {
        id: 'containers.login.formValidationEmailInvalid',
        defaultMessage: 'Email is invalid',
    },
    formValidationPasswordRequired: {
        id: 'containers.login.formValidationPasswordRequired',
        defaultMessage: 'Password is required',
    },
    formValidationPasswordMinLength: {
        id: 'containers.login.formValidationPasswordMinLength',
        defaultMessage: 'Min length of password is 5',
    },
    formValidationPasswordMaxLength: {
        id: 'containers.login.formValidationPasswordMaxLength',
        defaultMessage: 'Max length of password is 10',
    }
});

export default messages;
