# Value List Filter operator

[![](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/visualization.svg)](https://www.fiware.org/developers/catalogue/)
![](https://img.shields.io/github/license/Wirecloud/value-list-filter-operator.svg)<br/>
[![Build Status](https://travis-ci.org/Wirecloud/value-list-filter-operator.svg?branch=develop)](https://travis-ci.org/Wirecloud/value-list-filter-operator)
[![Coverage Status](https://coveralls.io/repos/github/Wirecloud/value-list-filter-operator/badge.svg?branch=develop)](https://coveralls.io/github/Wirecloud/value-list-filter-operator?branch=develop)

The Value List Filter operator is a [WireCloud operator](http://wirecloud.readthedocs.org/en/latest/) that provides a
simple mechanim of converting list of objects, produced by an output endpoint, into a list of values. This is done by
filtering the JSON data contained in the array using the path configured through a preference using a dot-sepparated
sytanx.

## Build dependencies

Be sure to have installed [Node.js](https://nodejs.org/) in your system. For example, you can install it on Ubuntu and
Debian running the following commands:

```console
sudo apt update; sudo apt install curl gnupg
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs npm
```

You also have to install the [Grunt](https://gruntjs.com/)'s command line interface (CLI):

```console
sudo npm install -g grunt-cli
```

The remaining dependencies are installed using npm (you have to run this command inside the folder where you downloaded
this repository):

```console
npm install
```

## Build

Once installed all the build dependencies you can build this operator by using grunt:

```console
grunt
```

If everything goes well, you will find a wgt file in the `dist` folder.

## Documentation

Documentation about how to use this operator is available on the [User Guide](src/doc/userguide.md). Anyway, you can
find general information about how to use operators on the
[WireCloud's User Guide](https://wirecloud.readthedocs.io/en/stable/user_guide/) available on Read the Docs.

## Copyright and License

Copyright (c) 2017-2018 CoNWeT Lab., Universidad Politecnica de Madrid
Copyright (c) 2019 Future Internet Consulting and Development Solutions S.L.
Licensed under the MIT license.
