FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=1s --retries=5 \
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["node","app.js"]