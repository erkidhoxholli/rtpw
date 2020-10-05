import { defineMessages } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'containers.home.title',
        defaultMessage: 'Home',
    },
    description: {
        id: 'containers.home.description',
        defaultMessage: 'Create a React application using TypeScript that connects to the GitHub API.',
    },
    searchLabel: {
        id: 'components.home.searchLabel',
        defaultMessage: 'Search by github username:',
    },
    noUserFound: {
        id: 'components.home.noUserFound',
        defaultMessage: 'No user found with this username. Please search again!',
    },
    noReposFound: {
        id: 'components.home.noReposFound',
        defaultMessage: 'This user doesnt have any repositories.',
    },
});

export default messages;
