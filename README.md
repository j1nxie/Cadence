# eslint-plugin-cadence

Cadence is an experimental pre-written ESLint config for **forcing** clean, legible code.
To see it in action, check out us dogfooding it at [tachi-server](https://github.com/tng-dev/tachi-server).

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev

# or
yarn add eslint -D

# or
pnpm add eslint -D
```

Next, install `eslint-plugin-cadence`:

```sh
npm install eslint-plugin-cadence --save-dev

# or
yarn add eslint-plugin-cadence -D

# or
pnpm add eslint-plugin-cadence -D
```

## Usage

Add `cadence` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cadence"
    ]
}
```

## Supported Rules

todo


