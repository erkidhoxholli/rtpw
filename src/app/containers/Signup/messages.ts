import { defineMessages } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'containers.signup.title',
        defaultMessage: 'Sign up',
    },
    formFirstnameLabel: {
        id: 'containers.signup.formFirstnameLabel',
        defaultMessage: 'Firstname',
    },
    formLastnameLabel: {
        id: 'containers.signup.formLastnameLabel',
        defaultMessage: 'Lastname',
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
    formValidationFirstnameMinLength: {
        id: 'containers.signup.formValidationFirstnameMinLength',
        defaultMessage: 'Min length is 3',
    },
    formValidationFirstnameMaxLength: {
        id: 'containers.signup.formValidationFirstnameMaxLength',
        defaultMessage: 'Max length is 6',
    },
    formValidationLastnameMinLength: {
        id: 'containers.signup.formValidationLastnameMinLength',
        defaultMessage: 'Min length of lastname is 5',
    },
    formValidationLastnameMaxLength: {
        id: 'containers.signup.formValidationLastnameMaxLength',
        defaultMessage: 'Max length of lastname is 10',
    }
});

export default messages;
