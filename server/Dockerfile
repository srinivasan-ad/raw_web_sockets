FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g typescript
RUN npm install
RUN tsc -b 

EXPOSE 8000

CMD [ "node" , "./dist/index.js" ]