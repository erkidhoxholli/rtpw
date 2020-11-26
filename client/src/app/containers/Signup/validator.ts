import messages from "./messages";

const Validator = (intl: any) => ({
    name:
        {
            required: {
                value: true,
                message: intl.formatMessage(messages.formValidationNameRequired)
            },
            maxLength: {
                value: 255,
                message: intl.formatMessage(messages.formValidationNameMaxLength)
            }

        },
    email:
        {
            required: {
                value: true,
                message: intl.formatMessage(messages.formValidationEmailRequired)
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: intl.formatMessage(messages.formValidationEmailInvalid)
            }

        },
    password:
        {
            required: {
                value: true,
                message: intl.formatMessage(messages.formValidationPasswordRequired)
            },
            minLength: {
                value: 5,
                message: intl.formatMessage(messages.formValidationPasswordMinLength)
            },
            maxLength: {
                value: 10,
                message: intl.formatMessage(messages.formValidationPasswordMaxLength)
            }

        },

})

export default Validator