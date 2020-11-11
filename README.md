# Project Name

> Project description

## Related Projects

- https://github.com/Team-Zebra/project-catwalk
- https://github.com/Orca-Team-One
- https://github.com/TeamPenguins/catwalk
- https://github.com/snow-leopards/hratx52-front-end-capstone

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

The initial release will focus on providing the minimum viable product for our retail application. Features implemented will be constrained to the client experience which enables customers to search, browse, add to cart, and checkout. These will comprise of 4 widgets: Overview, Ratings and Reviews, Questions and Answers, Related Items and Comparison. Improvements other than those to the client user interface are out of scope for this project. Specific improvements discussed and anticipated by the business team are outlined below.

|         In Scope         | Deferred to Future Release  |
| :----------------------: | :-------------------------: |
|    Item Detail pages     |       Internal portal       |
| Performance Optimization | Catalog search improvements |
|                          |  Homepage and Search page   |
|                          |     Checkout/Cart page      |

### Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

### Running

Open the file `dist/index.html` in your browser

### Testing

To run unit tests:

```sh
npm test
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- babel 7.12.3
- css-loader ^5.0.1
- eslint ^7.13.0,
- eslint-plugin-react ^7.21.5,
- jest ^26.6.3,
- lodash-webpack-plugin ^0.11.5,
- style-loader ^2.0.0,
- webpack ^5.4.0,
- webpack-cli ^4.2.0

## Development

### Installing Dependencies

From within the root directory:

```sh
cd myapp
npm init -y
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env css-loader style-loader eslint eslint-plugin-react jest babel-jest lodash-webpack-plugin
npm install react react-dom bootstrap jquery popper.js lodash
```
