> NEW: Added a Neo4J database with GRAPHQL backend in /backend 

#### How to run
-   git clone https://github.com/erkidhoxholli/rtpw.git
-   cd ./rtpw
-   rename `.env.example` to `.env`
-   [generate github token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
-   replace `YOUR_TOKEN` in `.env` with the one you generated from github
-   `yarn`
-   `yarn dev`

#### Features:
-   Use as a boilerplate
-   Theming 
-   Internationalization 
-   Scalable structure


#### Screenshots
![Preview image](docs/preview.jpg)


#### Technologies
-   React 
-   GraphQL 
-   Typescript
> Everything is built from the ground up!

#### Recommended improvements
-   add "strict": true in tsconfig and fix errors
-   search/pagination improvements and refactoring
-   finish up a proper useQuery implementation for graphql
-   add proper e2e and unit tests