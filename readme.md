# start-input-connector

[![npm](https://img.shields.io/npm/v/start-input-connector.svg?style=flat-square)](https://www.npmjs.com/package/start-input-connector)
[![linux build](https://img.shields.io/travis/start-runner/input-connector.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/input-connector)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/input-connector.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/input-connector)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/input-connector.svg?style=flat-square)](https://codecov.io/github/start-runner/input-connector)
[![deps](https://img.shields.io/gemnasium/start-runner/input-connector.svg?style=flat-square)](https://gemnasium.com/start-runner/input-connector)

Input connector task for [Start](https://github.com/start-runner/start), helps to pass data through different tasks runners.

## Install

```
npm i -S start-input-connector
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import inputConnector from 'start-input-connector';
import eslint from 'start-eslint';

const start = Start(reporter());

function lint(input) {
    return start(
        inputConnector(input),
        eslint()
    );
}

export function lintLib() {
    return start(
        files([ 'lib/**/*.js' ]),
        lint
    );
}

export function lintTest() {
    return start(
        files([ 'test/**/*.js' ]),
        lint
    );
}
```

See [documentation](https://github.com/start-runner/start#readme) for details.
