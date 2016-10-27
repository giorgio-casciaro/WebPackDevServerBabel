#!/bin/bash
#set -x
MICROSERVICE_INDEX="0";
if [ -n "$1" ]; then MICROSERVICE_INDEX=$1;fi
MICROSERVICE_NAME=$(basename $PWD);
MICROSERVICE_SLUG=$(echo "$MICROSERVICE_NAME" | tr '[:upper:]' '[:lower:]') ;
MICROSERVICE_ID=$(basename $PWD)$MICROSERVICE_INDEX;
MICROSERVICE_PATH=$PWD;
MICROSERVICE_USER="service";

#DOCKER IMAGE
rm ./dev/docker/docker.cid
rm ./dev/docker/MICROSERVICE_ID
rm ./dev/docker/MICROSERVICE_INDEX
rm ./dev/docker/MICROSERVICE_SLUG

cd ./dev/docker
docker build --tag $MICROSERVICE_SLUG -f "./Dockerfile" .

#DOCKER CONTAINER
docker stop $MICROSERVICE_ID
docker rm $MICROSERVICE_ID
docker run -d --cidfile ./docker.cid -p 8080:8080 -v $MICROSERVICE_PATH:/app/  -h $MICROSERVICE_ID  --name $MICROSERVICE_ID -t -i $MICROSERVICE_SLUG
#-v $MICROSERVICE_PATH:/app/
# /bin/bash

echo $MICROSERVICE_ID > './MICROSERVICE_ID';
echo $MICROSERVICE_INDEX > './MICROSERVICE_INDEX';
echo $MICROSERVICE_SLUG > './MICROSERVICE_SLUG';

clear;
echo "";
echo "************************************************************************************************************";
echo MICROSERVICE_INDEX $MICROSERVICE_INDEX;
echo MICROSERVICE_ID $MICROSERVICE_ID
echo MICROSERVICE_PATH $MICROSERVICE_PATH
echo "************************************************************************************************************";
echo "";

cd ../..

gnome-terminal -e "docker exec -i -t --user $MICROSERVICE_USER $MICROSERVICE_ID /bin/bash "  2>/dev/null
lxterminal -e "docker exec -i -t --user $MICROSERVICE_USER   $MICROSERVICE_ID  /bin/bash "  2>/dev/null
docker exec -i -t --user $MICROSERVICE_USER  $MICROSERVICE_ID /bin/bash
#npm run dev
#npm start

docker stop $MICROSERVICE_ID

rm ./dev/docker/docker.cid
rm ./dev/docker/MICROSERVICE_ID
rm ./dev/docker/MICROSERVICE_INDEX
rm ./dev/docker/MICROSERVICE_SLUG
