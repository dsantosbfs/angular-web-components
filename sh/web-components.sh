#!/bin/bash

cat './dist/web-components/runtime.js' './dist/web-components/polyfills.js' './dist/web-components/main.js' >> './dist/web-components/lib.js'
