FROM node:21

WORKDIR /app

# Assume NPM_TOKEN is used by `npm install`
ARG NPM_TOKEN
ENV NPM_TOKEN=${NPM_TOKEN}

COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]