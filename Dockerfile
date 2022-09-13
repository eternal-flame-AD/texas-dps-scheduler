FROM node:18 as ts-compiler
WORKDIR /home/container

COPY . .

RUN npm i --dev && npm run build

FROM node:18

COPY --from=ts-compiler /home/container/package.json ./
COPY --from=ts-compiler /home/container/dist ./

RUN npm i

USER 1000
CMD ["node", "index.js"]