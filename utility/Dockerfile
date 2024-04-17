FROM node

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN chmod +x bin/footballStat.js
RUN npm publish --dry-run
RUN npm link
