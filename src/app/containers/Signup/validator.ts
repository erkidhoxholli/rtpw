import messages from "./messages";

const Validator = (intl: any) => ({
    firstName:
        {
            minLength: {
                value: 3,
                message: intl.formatMessage(messages.formValidationFirstnameMinLength)
            },
            maxLength: {
                value: 6,
                message: intl.formatMessage(messages.formValidationFirstnameMaxLength)
            }

        },
    lastName:
        {
            minLength: {
                value: 5,
                message: intl.formatMessage(messages.formValidationLastnameMinLength)
            },
            maxLength: {
                value: 10,
                message: intl.formatMessage(messages.formValidationLastnameMaxLength)
            }

        },

})

export default Validator