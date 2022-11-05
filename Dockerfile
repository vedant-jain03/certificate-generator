FROM node:15.13-alpine
WORKDIR /
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
