# cai node
FROM mhart/alpine-node:slim-12.21.0

# Khai bao noi lam viec
WORKDIR /api_server

# copy toan bo file vao image
COPY . .

# RUN           //thuc thi cau lenh
# ENV PORT=3000 //set bien moi truong
# EXPOSE 3000   //mo port 3000

# chay lenh
CMD ["node", "app.js"]

# step chay ne
# docker build -t viettran/nodejs .   
# docker run -p 3000:3000 --name test_docker viettran/nodejs

# cac lenh co ban
# docker search _name
# docker images -a
# docker ps -a
# docker pull _image_name
# docker image rm _id || _name == docker rmi _id || _name
# docker build -t _name _context
# docker run -d -p _port:_port --name _name _container
# docker stop _name || _id
# docker rm -f _name || _id
# docker log _container
# docker network -ls
# docker network create _network
# docker network connect _network _container 
# docker network rm _name || _id
# docker volume -ls
# docker volume create _name
# docker volume rm _name || _id

# --net 
# -v