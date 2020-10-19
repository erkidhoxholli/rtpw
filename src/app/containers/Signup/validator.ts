import messages from "./messages";

const Validator = (intl: any) => ({
    firstName:
        {
            minLength: {
                value: 5,
                message: intl.formatMessage(messages.formValidationFirstnameMinLength)
            },
            maxLength: {
                value: 10,
                message: intl.formatMessage(messages.formValidationFirstnameMaxLength)
            }

        }
})

export default Validator