---
sidebar_position: 3
description: ''
---

# DOCKER

## Install Docker

Net Ninja has a great [tutorial](https://www.youtube.com/watch?v=8Ev1aXl7TGY&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=2&pp=iAQB)
no how to install docker.

## Build Image

```shell title="Template"
docker build $(DOCKERFILE_PATH) [-t $(IMAGE_NAME)[:$(VERSION)]]
```

```shell title="Example"
docker build . -t my-image:0.0.1
```

| Variable        | Description                                        | Example  | Explanation       |
| --------------- | -------------------------------------------------- | -------- | ----------------- |
| DOCKERFILE_PATH | The path of the directory that contains Dockerfile | .        | Current directory |
| IMAGE_NAME      | The name of the image                              | my-image |                   |
| VERSION         | The version of the image                           | 0.0.1    |                   |

## Create New Container

```shell title="Template"
docker run $(IMAGE_NAME) --name $(CONTAINER_NAME) -p $(PUBLISH_PORT):$(CONTAINER_PORT)
```

```shell title="Example"
docker run my-image --name my-container -p 5000:4200
```

| Variable       | Description                                | Example      | Explanation                                                     |
| -------------- | ------------------------------------------ | ------------ | --------------------------------------------------------------- |
| CONTAINER_NAME | The name of the Container                  | my-container |                                                                 |
| PUBLISH_PORT   | The port which end user will use           | 5000         | End user can visit website by going to https://example.com:5000 |
| CONTAINER_PORT | The port which is exposed by the container | 4200         |                                                                 |

:::info

This command also runs the container after building it.

:::

### Detach (Run in Background)

You can detach process after running the container by adding `-d` after `$(CONTAINER_NAME)`.

## Images

### Show All Images

```shell
docker images
```

### Remove an Image

```shell
docker images rm $(IMAGE_NAME)
```

:::tip

If you want to remove an image that is being used by a container,
you can use `-f` flag.

:::

## Containers

### Start Container

```shell title="Template"
docker start $(CONTAINER_NAME)
```

```shell title="Example"
docker start my-container
```

### Stop Container

```shell title="Template"
docker stop $(CONTAINER_NAME)
```

```shell title="Example"
docker stop my-container
```

### Show Running Containers

```shell
docker ps
```

### Show All Containers

```shell
docker ps -a
```

### Remove a Container

```shell
docker container rm $(CONTAINER_NAME)
```

## Compose

### Up

```shell
docker compose up
```

### Up and Rebuild

```shell
docker compose up --build
```

### Down

```shell
docker compose down
```

## Prune

This will remove:

-   All stopped containers
-   All networks not used by at least one container
-   All images without at least one container associated to them
-   All build cache

```shell
docker system prune -a
```
