#!/bin/bash

flag=0;

if grep -r -in --exclude-dir=node_modules --exclude-dir=dist --include='*.spec.ts'  '\bfdescribe\b' .
then
  echo '\033[41mYou have skipped tests, please remove forced tests and try again!\033[0m';
  flag=1;
fi

if grep -r -in --exclude-dir=node_modules --exclude-dir=dist --include='*.spec.ts'  '\bfit\b' .
then
  echo '\033[41mYou have skipped tests, please remove forced tests and try again!\033[0m';
  flag=1;
fi

exit $flag;
