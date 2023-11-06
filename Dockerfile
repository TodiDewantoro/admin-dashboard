FROM node:18-alpine
COPY . .
CMD ["npm", "install"]
CMD ["next", "build"] 
CMD ["next", "start"] 
