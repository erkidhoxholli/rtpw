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
    formCreateButton: {
        id: 'containers.signup.formCreateButton',
        defaultMessage: 'Create now',
    },
    formValidationFirstnameMinLength: {
        id: 'containers.signup.formValidationFirstnameMinLength',
        defaultMessage: 'Min length is 5',
    },
    formValidationFirstnameMaxLength: {
        id: 'containers.signup.formValidationFirstnameMaxLength',
        defaultMessage: 'Max length is 10',
    }
});

export default messages;
