#!/usr/bin/env bash

# kill children on exit
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

cd ai
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  source venv/bin/activate
elif [[ "$OSTYPE" == "darwin"* ]]; then
  source venv/bin/activate
else
  .\\venv\\Scripts\\activate
fi
flask run &

cd ../web
npm run start
