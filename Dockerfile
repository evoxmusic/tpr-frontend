### STAGE 1: Build ###
FROM node:14.3-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19-alpine
EXPOSE 80
COPY --from=build /usr/src/app/dist/tpr-frontend /usr/share/nginx/html
