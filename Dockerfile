FROM node:18-alpine
COPY . .
// EXPOSE 3000
CMD ["npm", "install"]
CMD ["next", "build"] 
CMD ["next", "start"] 
