FROM node:18

WORKDIR /app

COPY package.json .

RUN corepack enable
RUN yarn install

COPY . .

CMD ["yarn", "start"]
