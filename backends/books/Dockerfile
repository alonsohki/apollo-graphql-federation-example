FROM node:21-alpine3.18 as build

WORKDIR /app

COPY src .
COPY tsconfig.json package*.json .

RUN npm ci
RUN npm run build



FROM node:21-alpine3.18

WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY ./src/*.graphql ./src/

CMD [ "npm", "run", "start:release" ]
