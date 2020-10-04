FROM node:14.11.0

LABEL Name=rbs_web


WORKDIR /app
COPY . /app


RUN yarn install && yarn cache clean
EXPOSE 3000
CMD ["yarn", "start"]
