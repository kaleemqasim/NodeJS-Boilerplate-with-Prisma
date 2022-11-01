FROM node:18.11.0
 
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 3000

# VOLUME [ "/app/node_modules" ]

CMD ["node", "src/app.js"]