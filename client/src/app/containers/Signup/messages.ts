import { defineMessages } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'containers.signup.title',
        defaultMessage: 'Sign up',
    },
    formNameLabel: {
        id: 'containers.signup.formNameLabel',
        defaultMessage: 'Name',
    },
    formEmailLabel: {
        id: 'containers.signup.formEmailLabel',
        defaultMessage: 'Email',
    },
    formPasswordLabel: {
        id: 'containers.signup.formPasswordLabel',
        defaultMessage: 'Password',
    },
    formCreateButton: {
        id: 'containers.signup.formCreateButton',
        defaultMessage: 'Create now',
    },
    formValidationNameRequired: {
        id: 'containers.signup.formValidationNameRequired',
        defaultMessage: 'Name is required',
    },
    formValidationNameMaxLength: {
        id: 'containers.signup.formValidationNameMaxLength',
        defaultMessage: 'Max length of name is 255',
    },
    formValidationEmailRequired: {
        id: 'containers.signup.formValidationEmailRequired',
        defaultMessage: 'Email is required',
    },
    formValidationEmailInvalid: {
        id: 'containers.signup.formValidationEmailInvalid',
        defaultMessage: 'Email is invalid',
    },
    formValidationPasswordRequired: {
        id: 'containers.signup.formValidationPasswordRequired',
        defaultMessage: 'Password is required',
    },
    formValidationPasswordMinLength: {
        id: 'containers.signup.formValidationPasswordMinLength',
        defaultMessage: 'Min length of password is 5',
    },
    formValidationPasswordMaxLength: {
        id: 'containers.signup.formValidationPasswordMaxLength',
        defaultMessage: 'Max length of password is 10',
    }
});

export default messages;
