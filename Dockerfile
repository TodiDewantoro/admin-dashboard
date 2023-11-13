# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /_app
# Install app dependencies
RUN npm install
# Bundle app source
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "start" ]
