FROM node:12.18-alpine
ENV NODE_ENV=production
ENV SERVICE_URL=http://103.74.255.166:5051/api

WORKDIR /usr/src/app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# Uses port which is used by the actual application
EXPOSE 3001

# start app
CMD ["npm", "start"]