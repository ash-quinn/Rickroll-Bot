FROM node:10.13.0-alpine

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python2 && ln -sf python3 /usr/bin/python
RUN python2 -m ensurepip
RUN pip install --no-cache --upgrade pip setuptools
RUN apk add --update alpine-sdk
RUN apk add ffmpeg

# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/app

# Start
CMD [ "npm", "start" ]