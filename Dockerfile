FROM node:18-alpine
COPY . .
EXPOSE 8080
CMD ["npm", "install"]
CMD ["next", "build"] 
CMD ["next", "start"] 
