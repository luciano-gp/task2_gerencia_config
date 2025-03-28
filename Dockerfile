FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY start.sh ./

RUN npm install --omit=dev
RUN chmod +x ./start.sh

CMD ["./start.sh"]