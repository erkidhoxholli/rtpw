#####

#### How to run

-   git clone https://gitlab.com/erkidhoxholli/rimac-react
-   cd ./rimac-react
-   rename `.env.example` to `.env`
-   [generate github token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
-   replace `YOUR_TOKEN` in `.env` with the one you generated from github
-   `yarn`
-   `yarn dev`

#### Recommended improvements

-   default messages (generate i18n files from default messages)
    - https://github.com/akameco/extract-react-intl-messages
-   add floating label search input
-   use suspense and lazy loading
-   better production pipeline (bundle splitting, minification, optimization etc)
-   add pagination, better strict typing support, testing
