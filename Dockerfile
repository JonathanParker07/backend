FROM node:23-alpine3.19

WORKDIR /app

COPY ./package.json ./yarn.lock /app/

RUN yarn install

# Copy production files
COPY ./src /app/src
COPY ./prisma /app/prisma
COPY ./tsconfig.json /app

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn start"]