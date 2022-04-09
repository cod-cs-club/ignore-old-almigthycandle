#!/usr/bin/env bash

# kill children on exit
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

cd ai
flask run &

cd ../web
npm run start
