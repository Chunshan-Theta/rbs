docker stop rbs_web_container
docker container rm rbs_web_container
docker image rm rbs_web_image
docker build ./ --tag rbs_web_image
