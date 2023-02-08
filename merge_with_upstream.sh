#!/bin/bash -e
git checkout "$1"
git remote add upstream git@github.com:UWVerse/uwconnect-frontend.git || true
git fetch upstream
git merge upstream/main --no-edit
git push