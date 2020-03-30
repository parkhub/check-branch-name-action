FROM mhart/alpine-node

COPY index.js package.json package-lock.json ./

RUN npm install

COPY node_modules ./

CMD ["node", "/index.js"]