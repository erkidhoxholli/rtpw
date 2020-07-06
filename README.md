#### How to run
* git clone https://gitlab.com/erkidhoxholli/rimac-react
* cd ./rimac-react
* rename ```.env.example``` to ```.env```
* [generate github token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
* replace ```YOUR_TOKEN``` in ```.env``` with the one you generated from github
* ```yarn```
* ```yarn dev```

#### Recommended improvements
* default messages (generate i18n files from default messages)
* theme support in styled components
* add support for lint-staged "pre-commit" hook
* use suspense and lazy loading
* better production pipeline (bundle splitting, minification etc)
* add pagination, better strict typing support, testing
