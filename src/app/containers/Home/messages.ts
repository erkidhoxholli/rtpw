import { defineMessages } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'containers.home.title',
        defaultMessage: 'Home',
    },
    description: {
        id: 'containers.about.description',
        defaultMessage: 'Create a React application using TypeScript that connects to the GitHub API.',
    },
    searchLabel: {
        id: 'components.about.searchLabel',
        defaultMessage: 'Search by github username:',
    },
    notFound: {
        id: 'components.repos.notFound',
        defaultMessage: 'No user found with this username. Please search again!',
    },
});

export default messages;
