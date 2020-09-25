cd room-booking-system/api
sh docker_build.sh

cd room-booking-system/web
sh docker_build.sh

cd ../../
docker-compose up 
