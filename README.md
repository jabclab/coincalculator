CoinCalculator<sup>￡</sup>
=====

Web service which takes an amount in pounds and pence and returns the minimum number of coins which make that amount.

[![Build Status](https://travis-ci.org/jabclab/coincalculator.svg)](https://travis-ci.org/jabclab/coincalculator)
[![Coverage Status](https://coveralls.io/repos/jabclab/coincalculator/badge.png)](https://coveralls.io/r/jabclab/coincalculator)

```bash
$ curl http://localhost:7777/coins?pounds=1&pence=85
```

```json
{
  "£2": 0,
  "£1": 1,
  "50p": 1,
  "20p": 1,
  "10p": 1,
  "5p": 1,
  "2p": 0,
  "1p": 0
}
```

### Installation
`CoinCalculator` is installed as follows:

```bash
$ npm install jabclab/coincalculator
```

And started via:

```bash
$ npm start
```

### Development
Tests can be run via:

```bash
$ npm test
```

#### Running tests on file change
If you want to watch changes to files and run tests on a file event use:

```bash
$ npm run watch
```

**NB** This makes use of the [`growl` npm module](https://www.npmjs.org/package/growl). Follow the instructions on its `README.md` for installation.