#!/bin/bash

git checkout $1 && git pull && npm i && npm run lint && npm run lint-css && npm run test && npm run build-hml


