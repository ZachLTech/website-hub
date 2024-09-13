FROM node:latest

COPY ./site /site

WORKDIR /site

RUN npm install

RUN npm audit fix

RUN npx nuxt build

EXPOSE 3000

CMD ["/bin/bash", "-c", "node .output/server/index.mjs"]