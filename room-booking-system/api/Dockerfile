FROM node:14.11.0-alpine

LABEL Name=rbs_api


WORKDIR /app
COPY . /app


RUN yarn install && yarn cache clean
EXPOSE 7321
CMD ["yarn", "start"]
