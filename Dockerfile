FROM node:8-alpine

ADD ./ /app

RUN cd /app && npm i && npm run build && npm i --production && sh ./clear.sh

CMD ["node", "/app/app"]
