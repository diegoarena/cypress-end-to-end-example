FROM cypress/base:10

WORKDIR /test
RUN npm install --save-dev cypress