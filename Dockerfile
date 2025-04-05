FROM oven/bun:1 AS builder

WORKDIR /friendly

COPY package.json bun.lockb .

RUN bun install

EXPOSE 5173
