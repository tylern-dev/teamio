FROM node:12.13.0-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install -g nodemon && npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]