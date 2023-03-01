#!/bin/bash -e
# Usage: ./merge_with_upstream.sh <ur checkout branch> <ur merge update remote branch>
git checkout "$1"
git remote add upstream git@github.com:UWVerse/uwconnect-frontend.git || true
git fetch upstream
git merge upstream/"$2" --no-edit
git push
