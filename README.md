## express-typescript-template

⚡️ Node + Typescript + Express + some extras.

This is what I consider the "minimal" setup for any backend project using Express and Typescript.


### Scripts

`yarn run start`

Starts the server with nodemon, when changes are made it automaticall restarts it, so no need to do it manually.

`yarn run lint`

Runs ESLint with the Airbnb base configuration for Typescript. Also getting executed everytime you try to make a commit, thanks to `lint-staged` and `husky`.


### Libraries

- node & typescript
  - nodemon
  - ts-node
- express
  - helmet
  - morgan
- git + linter
  - husky
  - lint-staged
  - eslint
  - eslint-config-airbnb-typescript

### Todo

- ❌ Add links to the libraries.