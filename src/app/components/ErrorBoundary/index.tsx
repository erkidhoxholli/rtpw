import React, { Component } from 'react';
import { IntlShape } from 'react-intl';
import { injectIntl } from 'react-intl';

import ErrorMessage from '../ErrorMessage';
import messages from './messages';

type ErrorBoundaryProps = {
    children: React.ReactNode;
    intl: IntlShape;
};

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = { hasError: false };
    constructor(props: ErrorBoundaryProps) {
        super(props);
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary error: ', error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, intl } = this.props;

        if (hasError) {
            return <ErrorMessage message={intl.formatMessage(messages.generalError)} />;
        }

        return children;
    }
}

export default injectIntl(ErrorBoundary);
