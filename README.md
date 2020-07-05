### How to run
* git clone https://gitlab.com/erkidhoxholli/rimac-react
* cd ./rimac-react
* rename ```.env.example``` to ```.env```
* [generate github token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
* replace ```YOUR_TOKEN``` in ```.env``` with the one you generated from github
* yarn
* yarn run dev

#### Recommended improvements
* default messages (generate i18n files from default messages)
* theme support in styled components
* add support for lint-staged "pre-commit" hook
* use suspense and lazy loading
* hot reloading (good to experiment with Fast refresh feature)
