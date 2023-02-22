#!/bin/bash -e
git remote add upstream git@github.com:UWVerse/uwconnect-frontend.git || true
git fetch upstream
git checkout -b "$1" upstream/main
git push --set-upstream origin "$1"