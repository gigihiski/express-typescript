#!/bin/bash

# Start Docker
docker_start() {
    # Stop container
    docker_stop
    # Build container with deatached status
    docker-compose up --build -d
}

# Stop Docker
docker_stop() {
    # Taking down container
    docker-compose down --remove-orphans
    # Cleaning container
    docker system prune -f
    docker volume ls -qf dangling=true | xargs -r docker volume rm 
    docker images -q --filter dangling=true | xargs -r docker rmi -f
}

if [ $1 = "start" ]; then
    docker_start
elif [ $1 = "stop" ]; then
    docker_stop
else
    echo "command not found"
    exit
fi
