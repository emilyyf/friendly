FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json .

RUN bun install

EXPOSE 5173

COPY . . 

CMD ["bun", "run", "dev"]
