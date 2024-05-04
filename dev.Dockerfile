FROM node:18 as build-stage
WORKDIR /app

COPY package*.json ./
COPY quasar.config.js ./
COPY ./ ./

RUN npm install
RUN npm install -g @vue/cli
RUN npm install -g @quasar/cli 
RUN quasar build


FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80