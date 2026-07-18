FROM node:20-alpine AS build
WORKDIR /app

RUN apk add --no-cache git
RUN git clone --depth 1 https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git .
RUN npm install
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
