FROM node:21-bullseye as build

WORKDIR /work

RUN npm i -g @apollo/rover@0.21.0
COPY router ./router
COPY backends ./backends
RUN rover supergraph compose --config router/supergraph-config.yml > ./supergraph.graphql


FROM ghcr.io/apollographql/router:v1.34.0

COPY --from=build /work/supergraph.graphql /dist/schema/supergraph.graphql
