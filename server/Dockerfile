FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "tsc -b && node" , "./dist/index.js" ]