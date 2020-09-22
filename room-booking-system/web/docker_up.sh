docker stop rbs_web_container
docker container rm rbs_web_container
docker image rm rbs_web_image
docker build ./ --tag rbs_web_image
docker run -it -p 3000:3000 --name rbs_web_container rbs_web_image
