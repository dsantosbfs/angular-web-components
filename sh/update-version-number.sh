#!/bin/bash

if [ -z "$1" ]
then
  echo "You need to inform a new version number"
else
  echo "Update sonar-project.properties version to $1"
  sed -i '' "s|sonar.projectVersion=[0-9].[0-9].[0-9]|sonar.projectVersion=$1|g" sonar-project.properties

  echo "Update package.json version to $1"
  sed -i '' "s|\"version\": \"[0-9].[0-9].[0-9]\"|\"version\": \"$1\"|g" package.json
fi
