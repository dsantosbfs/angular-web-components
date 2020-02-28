#!/bin/bash

echo 'REVISE SEUS TODOS:'

grep -r -in --exclude-dir=node_modules --exclude-dir=dist --exclude='*.html' --exclude='*.pack'  '\bTODO\b' .

echo ''
echo ''
