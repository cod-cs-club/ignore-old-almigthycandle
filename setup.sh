#!/usr/bin/env bash

wait() {
  echo 'When you are done installing, press enter.'
  read
}

if ! command -v python &> /dev/null || ! command -v pip &> /dev/null; then
  echo 'Please install: https://www.python.org/downloads/'
  wait
fi

if ! command -v node &> /dev/null; then
  echo 'Please install NodeJS (do the LTS version): https://nodejs.org/en/download/'
  wait
fi

echo 'You have installed all needed programs. Press enter to start setup...'
read

cd ai
echo 'Setting up python virtual environment...'
python -m venv --system-site-packages venv
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  source venv/bin/activate
elif [[ "$OSTYPE" == "darwin"* ]]; then
  source venv/bin/activate
else
  .\\venv\\Scripts\\activate
fi

echo 'Upgrading pip...'
pip install --upgrade pip

echo 'Installing python dependencies...'
pip install -r requirements.txt

echo 'Done setting up AI!'

echo 'Setting up nodejs environment...'
cd ../web
npm install

echo 'Done! press enter to exit.'
read
