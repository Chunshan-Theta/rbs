docker stop rbs_api_container
docker container rm rbs_api_container
docker image rm rbs_api_image
docker build ./ --tag rbs_api_image
docker run -it -p 7321:7321 --name rbs_api_container rbs_api_image
