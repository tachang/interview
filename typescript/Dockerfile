ARG NPM_TOKEN
FROM node:21

WORKDIR /app
ENV NPM_TOKEN=${NPM_TOKEN}

COPY . .
RUN npm run build

CMD ["npm", "run", "serve"]