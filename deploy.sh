#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm build
cd dist

if [ ! -d ".git" ]; then
  git init
fi

git add -A
git commit -m 'deploy'

git push -f https://github.com/bobosun0713/roulette.git master:gh-pages

cd -