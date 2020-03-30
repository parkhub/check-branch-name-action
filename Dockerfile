FROM mhart/alpine-node

WORKDIR /github/workspace/

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]